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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="box p-1 m-2"><div class="columns m-1"><input expr674="expr674" class="input" type="input"/><button expr675="expr675" class="button ml-1">&lt;</button></div><div id="list-formations"><ul><li expr676="expr676" class="m-1"></li></ul></div></div>', [{
    redundantAttribute: 'expr674',
    selector: '[expr674]',
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
    redundantAttribute: 'expr675',
    selector: '[expr675]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.back
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<button expr677="expr677" class="button is-fullwidth"><span><strong expr678="expr678"> </strong></span><div style="margin-left: auto;"></div><span expr679="expr679" class="tag is-primary"> </span></button>', [{
      redundantAttribute: 'expr677',
      selector: '[expr677]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => () => _scope.filter(_scope.item.name)
      }]
    }, {
      redundantAttribute: 'expr678',
      selector: '[expr678]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.name
      }]
    }, {
      redundantAttribute: 'expr679',
      selector: '[expr679]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.count
      }]
    }]),
    redundantAttribute: 'expr676',
    selector: '[expr676]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }]),
  name: 'search'
};

export { search as default };
