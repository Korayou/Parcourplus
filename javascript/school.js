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
          console.log(this.state.items);
          this.state.items.forEach(etablissement => {
            // calcul la moyenne
            let pct_sansmention = etablissement.fields.pct_sansmention;
            let pct_AB = etablissement.fields.pct_ab;
            let pct_B = etablissement.fields.pct_b;
            let pct_TB = etablissement.fields.pct_tb;
            let pct_TBF = etablissement.fields.pct_tbf;
            let moyenne = (pct_TBF * 18 + pct_TB * 16 + pct_B * 14 + pct_AB * 12 + pct_sansmention * 10) / 100;
            etablissement.fields.moyenne = moyenne;
            console.log(etablissement.fields);
          });
          this.update();
        });
      }
    };
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<main class="container"><div class="block control has-icons-left is-inline-block is-pulled-right"><input class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th><abbr title="name">Nom</abbr></th><th><abbr title="city">Ville</abbr></th><th><abbr title="dept">Dpt</abbr></th><th><abbr title="moyenne">Moyenne</abbr></th><th><abbr title="selectivite">Sélectivité</abbr></th></tr></thead><tbody><tr expr58="expr58"></tr></tbody></table></main>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td expr59="expr59"> </td><td expr60="expr60"> </td><td expr61="expr61"> </td><td expr62="expr62"> </td><td expr63="expr63"> </td>', [{
      redundantAttribute: 'expr59',
      selector: '[expr59]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.g_ea_lib_vx
      }]
    }, {
      redundantAttribute: 'expr60',
      selector: '[expr60]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.ville_etab
      }]
    }, {
      redundantAttribute: 'expr61',
      selector: '[expr61]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.dep
      }]
    }, {
      redundantAttribute: 'expr62',
      selector: '[expr62]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.moyenne
      }]
    }, {
      redundantAttribute: 'expr63',
      selector: '[expr63]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.fields.taux_acces_ens
      }]
    }]),
    redundantAttribute: 'expr58',
    selector: '[expr58]',
    itemName: 'etablissement',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }]),
  name: 'school'
};

export { school as default };
