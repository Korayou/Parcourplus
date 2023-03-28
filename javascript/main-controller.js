var mainController = {
  css: null,
  exports: {},
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-2 m-2"><img src="../resources/logo-parcoursup.svg"/></div><search expr0="expr0"></search></div><div class="column"><fili-info expr1="expr1"></fili-info><school expr2="expr2"></school></div></div><school-info expr3="expr3"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr0',
    selector: '[expr0]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr1',
    selector: '[expr1]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr2',
    selector: '[expr2]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr3',
    selector: '[expr3]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
