var mainController = {
  css: null,
  exports: {},
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><search expr19="expr19"></search></div><div class="column"><fili-info expr20="expr20"></fili-info><school expr21="expr21"></school></div></div><school-info expr22="expr22"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr19',
    selector: '[expr19]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr20',
    selector: '[expr20]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr21',
    selector: '[expr21]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr22',
    selector: '[expr22]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
