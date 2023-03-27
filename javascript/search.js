const searchURL = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-parcoursup&timezone=Europe%2FBerlin`;
async function fetchFiliere0() {
  let request = await fetch(`${searchURL}&rows=0&sort=tri&facet=fili`);
  let result = await request.json();
  return result["facet_groups"][0]["facets"];
}
async function fetchFiliere1(filiere) {
  let request = await fetch(`${searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${filiere}`);
  let result = await request.json();
  return result["facet_groups"][0]["facets"];
}
async function fetchFiliere2(sousfiliere) {
  let request = await fetch(`${searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${sousfiliere}`);
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
          fili: null
        };
        fetchFiliere0().then(response => {
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
            fili: fili
          });
          fetchFiliere2(this.state.fili).then(response => {
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
          fetchFiliere1(this.state.fili).then(response => {
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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<label><input expr36="expr36" type="input"/><div id="list-formations"><ul><li expr37="expr37"></li></ul></div></label>', [{
    redundantAttribute: 'expr36',
    selector: '[expr36]',
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
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr38="expr38"> </span><span expr39="expr39"> </span>', [{
      redundantAttribute: 'expr38',
      selector: '[expr38]',
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
      redundantAttribute: 'expr39',
      selector: '[expr39]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.count
      }]
    }]),
    redundantAttribute: 'expr37',
    selector: '[expr37]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }]),
  name: 'search'
};

export { search as default };
