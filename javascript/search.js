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
    console.log(result["records"]);
    return result["records"];
  }
}

async function fetchFiliere(state) {
  if (state.sousfili) {
    return PAPI.fetchSpecialites(state.sousfili);
    //var request = await fetch(`${searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${state.sousfili}`)
  } else if (state.fili && !state.sousfili) {
    return PAPI.fetchFiliere(state.fili);
    //var request = await fetch(`${searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${state.fili}`)
  } else if (!state.fili && !state.sousfili) {
    return PAPI.fetchFilieres();
    //var request = await fetch(`${searchURL}&rows=0&sort=tri&facet=fili`)
  }

  //let result  = await request.json()
  //return result["facet_groups"][0]["facets"]
}

var search = {
  css: null,
  exports: function search() {
    return {
      onBeforeMount(props, state) {
        // initial state
        this.state = {
          placeholder: "Formation",
          items: null,
          allitems: null,
          fili: null,
          sousfili: null
        };
        fetchFiliere(this.state).then(response => {
          this.update({
            items: response,
            allitems: response
          });
        });
      },
      searchF(e) {
        let responseFiltered = [];
        this.state.allitems.forEach(formation => {
          if (formation.name.toUpperCase().includes(e.target.value.toUpperCase())) {
            responseFiltered.push(formation);
          }
        });
        this.update({
          items: responseFiltered
        });
      },
      filter(fili) {
        console.log("filter! " + fili);
        if (this.state.placeholder === "Filière de formation") {
          this.update({
            placeholder: "Filière de formation détaillée",
            sousfili: fili
          });
        } else if (this.state.placeholder = "Formation") {
          this.update({
            placeholder: "Filière de formation",
            fili: fili
          });
        }
        fetchFiliere(this.state).then(response => {
          this.update({
            allitems: response,
            items: response
          });
          console.log(this.state.items);
        });
      },
      back() {
        console.log("back");
        if (this.state.placeholder === "Filière de formation") {
          this.update({
            placeholder: "Formation",
            fili: null
          });
        } else if (this.state.placeholder = "Filière de formation détaillée") {
          this.update({
            placeholder: "Filière de formation",
            sousfili: null
          });
        }
        fetchFiliere(this.state).then(response => {
          this.update({
            allitems: response,
            items: response
          });
        });
      }
    };
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="box p-1 m-2"><div class="columns m-1"><input expr48="expr48" class="input" type="input"/><button expr49="expr49" class="button ml-1">&lt;</button></div><div id="list-formations"><ul><li expr50="expr50" class="m-1"></li></ul></div></div>', [{
    redundantAttribute: 'expr48',
    selector: '[expr48]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onkeydown',
      evaluate: _scope => _scope.searchF
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.state.placeholder
    }]
  }, {
    redundantAttribute: 'expr49',
    selector: '[expr49]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.back
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<button expr51="expr51" class="button is-fullwidth"><span style="font-size: .75em;"><strong expr52="expr52"> </strong></span><div style="margin-left: auto;"></div><span expr53="expr53" class="tag is-primary"> </span></button>', [{
      redundantAttribute: 'expr51',
      selector: '[expr51]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => () => _scope.filter(_scope.item.name)
      }]
    }, {
      redundantAttribute: 'expr52',
      selector: '[expr52]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.name
      }]
    }, {
      redundantAttribute: 'expr53',
      selector: '[expr53]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.count
      }]
    }]),
    redundantAttribute: 'expr50',
    selector: '[expr50]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }]),
  name: 'search'
};

export { search as default };
