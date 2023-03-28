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
            etablissement.fields['list_com'] = moyenne;
          });
        });
      }
    };
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<main class="container"><div class="block control has-icons-left is-inline-block is-pulled-right"><input class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th><abbr title="name">Nom</abbr></th><th><abbr title="city">Ville</abbr></th><th><abbr title="dept">Dpt</abbr></th><th><abbr title="moyenne">Moyenne</abbr></th><th><abbr title="selectivite">Sélectivité</abbr></th></tr></thead><tbody><tr expr102="expr102"></tr></tbody></table></main>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td expr103="expr103"> </td><td expr104="expr104"> </td><td expr105="expr105"> </td><td expr106="expr106"> </td><td expr107="expr107"> </td>', [{
      redundantAttribute: 'expr103',
      selector: '[expr103]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.g_ea_lib_vx
      }]
    }, {
      redundantAttribute: 'expr104',
      selector: '[expr104]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.ville_etab
      }]
    }, {
      redundantAttribute: 'expr105',
      selector: '[expr105]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.dep
      }]
    }, {
      redundantAttribute: 'expr106',
      selector: '[expr106]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.list_com
      }]
    }, {
      redundantAttribute: 'expr107',
      selector: '[expr107]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.etablissement.taux_acces_ens
      }]
    }]),
    redundantAttribute: 'expr102',
    selector: '[expr102]',
    itemName: 'etablissement',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }]),
  name: 'school'
};

export { school as default };
