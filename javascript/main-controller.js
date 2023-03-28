var mainController = {
  css: null,
  exports: {},
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-2 m-2"><img src="../resources/logo-parcoursup.svg"/></div><search expr41="expr41"></search></div><div class="column"><fili-info expr42="expr42"></fili-info><school expr43="expr43"></school></div></div><school-info expr44="expr44"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr41',
    selector: '[expr41]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr42',
    selector: '[expr42]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr43',
    selector: '[expr43]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr44',
    selector: '[expr44]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
