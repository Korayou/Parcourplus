var mainController = {
  css: null,
  exports: {
    //Fonction qui va écouter ce que <search> a à dire.
    searchListener(arg) {
      console.log("Search il a dit: " + arg);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-3 m-2"><img class="mt-1 ml-5 mr-auto" style="margin: auto;" src="../resources/logo-parcoursup.svg"/></div><search expr932="expr932"></search></div><div class="column"><fili-info expr933="expr933"></fili-info><school expr934="expr934"></school></div></div><school-info expr935="expr935"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'partouse',
      evaluate: _scope => _scope.searchListener
    }],
    redundantAttribute: 'expr932',
    selector: '[expr932]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr933',
    selector: '[expr933]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr934',
    selector: '[expr934]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr935',
    selector: '[expr935]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
