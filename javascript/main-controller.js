var mainController = {
  css: null,
  exports: {},
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-3 m-2"><img class="mt-1 ml-5 mr-auto" style="margin: auto;" src="../resources/logo-parcoursup.svg"/></div><search expr12="expr12"></search></div><div class="column"><fili-info expr13="expr13"></fili-info><school expr14="expr14"></school></div></div><school-info expr15="expr15"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr12',
    selector: '[expr12]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr13',
    selector: '[expr13]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr14',
    selector: '[expr14]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr15',
    selector: '[expr15]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
