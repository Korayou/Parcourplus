/*
    Parcoursup API (PAPI)
    Comprend un set de wrapper afin d'accéder plus aisément aux informations de l'API parcoursup
*/

class PAPI {
  static dataset = "fr-esr-parcoursup";
  static timezone = "Europe%2FBerlin";
  static searchURL = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=${PAPI.dataset}&timezone=${PAPI.timezone}`;
  static async fetchFilieres() {
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fili`);
    let result = await request.json();
    return result["facet_groups"][0]["facets"];
  }
  static async fetchFiliere(filiere) {
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${filiere}`);
    let result = await request.json();
    return result["facet_groups"][0]["facets"];
  }
  static async fetchSpecialites(specialite) {
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${specialite}`);
    let result = await request.json();
    return result["facet_groups"][0]["facets"];
  }
  static async fetchEtablissement(filiere, sousfiliere, soussousfiliere) {
    let request = await fetch(`${PAPI.searchURL}&refine.fil_lib_voe_acc=${soussousfiliere}&refine.form_lib_voe_acc=${sousfiliere}&refine.fili=${filiere}`);
    let result = await request.json();
    return result["records"];
  }
}

async function fetchEtablissement(state) {
  return PAPI.fetchEtablissement(state.fili, state.sousfili, state.soussousfili);
}
var school = {
  css: null,
  exports: function search() {
    return {
      onBeforeMount(props, state) {
        this.state = {
          items: null,
          fili: "BUT",
          sousfili: "BUT - Production",
          soussousfili: "Informatique"
        };
        fetchEtablissement(this.state).then(response => {
          this.update({
            items: response
          });
          //console.log(this.state.items)
          this.state.items.forEach(etablissement => {
            // calcul la moyenne
            let pct_sansmention = etablissement.fields.pct_sansmention;
            let pct_AB = etablissement.fields.pct_ab;
            let pct_B = etablissement.fields.pct_b;
            let pct_TB = etablissement.fields.pct_tb;
            let pct_TBF = etablissement.fields.pct_tbf;

            // On prend la moyenne des moyennes comprises dans la mention
            // Exemple : Assez bien est entre 12 et 14 donc 13.
            let moyenne = (pct_TBF * 19 + pct_TB * 17 + pct_B * 15 + pct_AB * 13 + pct_sansmention * 11) / 100;
            etablissement.fields.moyenne = moyenne;
            //console.log(etablissement.fields)
          });

          this.update();
        });
      }
    };
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="box p-2 m-2"><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.56389453066509%2C13.601074218750002%2C51.754240074033525&amp;layer=mapnik" style="border-radius: 5px;"></iframe><br/><div class="block control has-icons-left is-inline-block is-pulled-right"><input class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th><abbr title="name">Nom</abbr></th><th><abbr title="city">Ville</abbr></th><th><abbr title="dept">Dpt</abbr></th><th><abbr title="moyenne">Moyenne</abbr></th><th><abbr title="selectivite">Sélectivité</abbr></th></tr></thead><tbody><tr expr16="expr16"></tr></tbody></table></div>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td expr17="expr17"> </td><td expr18="expr18"> </td><td expr19="expr19"> </td><td expr20="expr20"> </td><td expr21="expr21"> </td>', [{
      redundantAttribute: 'expr17',
      selector: '[expr17]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.g_ea_lib_vx
      }]
    }, {
      redundantAttribute: 'expr18',
      selector: '[expr18]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.ville_etab
      }]
    }, {
      redundantAttribute: 'expr19',
      selector: '[expr19]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.dep
      }]
    }, {
      redundantAttribute: 'expr20',
      selector: '[expr20]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.moyenne
      }]
    }, {
      redundantAttribute: 'expr21',
      selector: '[expr21]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.taux_acces_ens
      }]
    }]),
    redundantAttribute: 'expr16',
    selector: '[expr16]',
    itemName: 'etablissement',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }]),
  name: 'school'
};

export { school as default };
