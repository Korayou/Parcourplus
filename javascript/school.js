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
var school = {
  css: null,
  exports: function search() {
    return {
      onBeforeMount(props, state) {
      },
      onUpdated(props, state) {
        if (!props.shouldShowInfos || state.breakCycle) return;
        fetchEtablissement(props.course).then(response => {
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
          state.breakCycle = true;
          this.update({
            items: response
          });
          state.breakCycle = false;
        });
      },
      sort(e) {}
    };
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr693="expr693" class="box p-2 m-2"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr693',
    selector: '[expr693]',
    template: template('<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.56389453066509%2C13.601074218750002%2C51.754240074033525&amp;layer=mapnik" style="border-radius: 5px;"></iframe><br/><div class="block control has-icons-left is-inline-block is-pulled-right"><input class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th><abbr title="name">Nom</abbr></th><a expr694="expr694" id="name"><span class="icon"><i class="fas fa-sort"></i></span></a><th><abbr title="city">Ville</abbr></th><a expr695="expr695" id="city"><span class="icon"><i class="fas fa-sort"></i></span></a><th><abbr title="dept">Dpt</abbr></th><a expr696="expr696" id="dept"><span class="icon"><i class="fas fa-sort"></i></span></a><th><abbr title="moyenne">Moyenne</abbr></th><a expr697="expr697" id="moyenne"><span class="icon"><i class="fas fa-sort"></i></span></a><th><abbr title="selectivite">Sélectivité</abbr></th><a expr698="expr698" id="select"><span class="icon"><i class="fas fa-sort"></i></span></a></tr></thead><tbody><tr expr699="expr699"></tr></tbody></table>', [{
      redundantAttribute: 'expr694',
      selector: '[expr694]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => _scope.sort
      }]
    }, {
      redundantAttribute: 'expr695',
      selector: '[expr695]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => _scope.sort
      }]
    }, {
      redundantAttribute: 'expr696',
      selector: '[expr696]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => _scope.sort
      }]
    }, {
      redundantAttribute: 'expr697',
      selector: '[expr697]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => _scope.sort
      }]
    }, {
      redundantAttribute: 'expr698',
      selector: '[expr698]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => _scope.sort
      }]
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template('<td expr700="expr700"> </td><td expr701="expr701"> </td><td expr702="expr702"> </td><td expr703="expr703"> </td><td expr704="expr704"> </td>', [{
        redundantAttribute: 'expr700',
        selector: '[expr700]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.g_ea_lib_vx
        }]
      }, {
        redundantAttribute: 'expr701',
        selector: '[expr701]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.ville_etab
        }]
      }, {
        redundantAttribute: 'expr702',
        selector: '[expr702]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.dep
        }]
      }, {
        redundantAttribute: 'expr703',
        selector: '[expr703]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.moyenne
        }]
      }, {
        redundantAttribute: 'expr704',
        selector: '[expr704]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.etablissement.fields.taux_acces_ens
        }]
      }]),
      redundantAttribute: 'expr699',
      selector: '[expr699]',
      itemName: 'etablissement',
      indexName: null,
      evaluate: _scope => _scope.state.items
    }])
  }]),
  name: 'school'
};

export { school as default };
