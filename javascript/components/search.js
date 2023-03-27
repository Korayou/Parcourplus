const searchURL = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-parcoursup&timezone=Europe%2FBerlin`;
async function fetchFiliere(state) {
  if (state.sousfili) {
    await fetch(`${searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${sousfiliere}`);
  } else if (state.fili & !state.sousfili) {
    await fetch(`${searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${filiere}`);
  } else if (!state.fili & !state.sousfili) {
    await fetch(`${searchURL}&rows=0&sort=tri&facet=fili`);
  } else {
    console.log("ta verif elle pue");
  }
  let result = await request.json();
  return result["facet_groups"][0]["facets"];
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
          fetchFiliere(this.state).then(response => {
            this.update({
              allitems: response,
              items: response
            });
          });
          console.log(this.state.items);
        } else if (this.state.placeholder = "Formation") {
          this.update({
            placeholder: "Filière de formation",
            fili: fili
          });
          fetchFiliere(this.state).then(response => {
            this.update({
              allitems: response,
              items: response
            });
            console.log(this.state.items);
          });
        }
      },
      back() {
        console.log("back");
        if (this.state.placeholder === "Filière de formation") {
          this.update({
            placeholder: "Formation",
            fili: null
          });
          fetchFiliere(state).then(response => {
            this.update({
              allitems: response,
              items: response
            });
          });
          console.log(this.state.items);
        } else if (this.state.placeholder = "Filière de formation détaillée") {
          this.update({
            placeholder: "Filière de formation",
            sousfili: null
          });
          fetchFiliere(this.state).then(response => {
            this.update({
              allitems: response,
              items: response
            });
            console.log(this.state.items);
          });
        }
      }
    };
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<label><input expr0="expr0" type="input"/><button expr1="expr1"><</button><div id="list-formations"><ul><li expr2="expr2"></li></ul></div></label>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
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
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.back
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr3="expr3"> </span><span expr4="expr4"> </span>', [{
      redundantAttribute: 'expr3',
      selector: '[expr3]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.name
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => () => _scope.filter(_scope.item.name)
      }]
    }, {
      redundantAttribute: 'expr4',
      selector: '[expr4]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.count
      }]
    }]),
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }]),
  name: 'search'
};

export { search as default };
