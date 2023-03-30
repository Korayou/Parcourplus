/*
    Parcoursup API (PAPI)
    Comprend un set de wrapper afin d'accéder plus aisément aux informations de l'API parcoursup
*/

class PAPI {
  static dataset = "fr-esr-parcoursup";
  static timezone = "Europe%2FBerlin";
  static searchURL = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=${PAPI.dataset}&timezone=${PAPI.timezone}`;
  static async fetchFilieres() {
    if (localStorage.getItem("filis")) return JSON.parse(localStorage.getItem("filis"));
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fili`);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem("filis", JSON.stringify(response));
    return response;
  }
  static async fetchFiliere(filiere) {
    if (localStorage.getItem("fili." + filiere)) return JSON.parse(localStorage.getItem("fili." + filiere));
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${filiere}`);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem("fili." + filiere, JSON.stringify(response));
    return response;
  }
  static async fetchSpecialites(specialite) {
    if (localStorage.getItem("spe." + specialite)) return JSON.parse(localStorage.getItem("spe." + specialite));
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${specialite}`);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem("spe." + specialite, JSON.stringify(response));
    return response;
  }
  static async fetchEtablissement(filiere, sousfiliere, soussousfiliere) {
    if (localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`)) return JSON.parse(localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`));
    let request = await fetch(`${PAPI.searchURL}&refine.fil_lib_voe_acc=${soussousfiliere}&refine.form_lib_voe_acc=${sousfiliere}&refine.fili=${filiere}`);
    let result = await request.json();
    let response = result["records"];
    localStorage.setItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`, JSON.stringify(response));
    return response;
  }
}

async function fetchEtablissement(course) {
  return PAPI.fetchEtablissement(course.fili, course.sousfili, course.soussousfili);
}
const SORT_TABLE = [{
  name: "Nom",
  id: "g_ea_lib_vx"
}, {
  name: "Ville",
  id: "ville_etab"
}, {
  name: "Département",
  id: "dep"
}, {
  name: "Moyenne",
  id: "moyenne"
}, {
  name: "Sélectivité",
  id: "taux_acces_ens"
}];
var school = {
  css: null,
  exports: function search() {
    return {
      updateList() {
        fetchEtablissement(this.props.course).then(response => {
          response.forEach(etablissement => {
            // calcul la moyenne
            let pct_sansmention = etablissement.fields.pct_sansmention;
            let pct_AB = etablissement.fields.pct_ab;
            let pct_B = etablissement.fields.pct_b;
            let pct_TB = etablissement.fields.pct_tb;
            let pct_TBF = etablissement.fields.pct_tbf;

            // On prend la moyenne des moyennes comprises dans la mention
            // Exemple : Assez bien est entre 12 et 14 donc 13.
            etablissement.fields.moyenne = (pct_TBF * 19 + pct_TB * 17 + pct_B * 15 + pct_AB * 13 + pct_sansmention * 11) / 100;
          });
          this.update({
            items: response,
            parentUpdate: this.props.parentUpdate
          });
        });
      },
      sortList(sortBy) {
        //Si la liste est déjà triée par la bonne catégorie, on l'inverse
        if (sortBy == this.state.sortBy) {
          this.state.items.reverse();
        }
        //Sinon on l'ordonne par la nouvelle catégorie (ascendant par défaut)
        else {
          this.state.sortBy = sortBy;
          switch (sortBy) {
            case SORT_TABLE[3].id:
            case SORT_TABLE[4].id:
              {
                this.state.items.sort((a, b) => {
                  if (a.fields[sortBy] > b.fields[sortBy]) return 1;else return -1;
                });
                break;
              }
            default:
              {
                this.state.items.sort((a, b) => {
                  return a.fields[sortBy].localeCompare(b.fields[sortBy]);
                });
                break;
              }
          }
        }
        this.update({
          items: this.state.items
        });
      },
      onBeforeMount(props, state) {
      },
      onMounted(props, state) {
        this.update({
          sortFields: SORT_TABLE
        });
      },
      onUpdated(props, state) {
        if (!props.shouldShowInfos || state.parentUpdate == props.parentUpdate) return;
        this.updateList();
      }
    };
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr336="expr336" class="box p-2 m-2"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr336',
    selector: '[expr336]',
    template: template('<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.56389453066509%2C13.601074218750002%2C51.754240074033525&amp;layer=mapnik" style="border-radius: 5px;"></iframe><br/><div class="block control has-icons-left is-inline-block is-pulled-right"><input class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th expr337="expr337"></th></tr></thead><tbody><tr expr339="expr339"></tr></tbody></table>', [{
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template(' <a expr338="expr338"><span class="icon"><i class="fas fa-sort"></i></span></a>', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.sortField.name].join('')
        }]
      }, {
        redundantAttribute: 'expr338',
        selector: '[expr338]',
        expressions: [{
          type: expressionTypes.ATTRIBUTE,
          name: 'id',
          evaluate: _scope => _scope.sortField.id
        }, {
          type: expressionTypes.EVENT,
          name: 'onclick',
          evaluate: _scope => () => _scope.sortList(_scope.sortField.id)
        }]
      }]),
      redundantAttribute: 'expr337',
      selector: '[expr337]',
      itemName: 'sortField',
      indexName: null,
      evaluate: _scope => _scope.state.sortFields
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template('<td expr340="expr340"> </td><td expr341="expr341"> </td><td expr342="expr342"> </td><td expr343="expr343"> </td><td expr344="expr344"> </td>', [{
        redundantAttribute: 'expr340',
        selector: '[expr340]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.g_ea_lib_vx
        }]
      }, {
        redundantAttribute: 'expr341',
        selector: '[expr341]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.ville_etab
        }]
      }, {
        redundantAttribute: 'expr342',
        selector: '[expr342]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.dep
        }]
      }, {
        redundantAttribute: 'expr343',
        selector: '[expr343]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.moyenne
        }]
      }, {
        redundantAttribute: 'expr344',
        selector: '[expr344]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.taux_acces_ens
        }]
      }]),
      redundantAttribute: 'expr339',
      selector: '[expr339]',
      itemName: 'etablissement',
      indexName: null,
      evaluate: _scope => _scope.state.items
    }])
  }]),
  name: 'school'
};

export { school as default };
