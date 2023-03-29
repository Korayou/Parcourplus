var mainController = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      //Initial state
      this.state = {
        formation: null
      };
    },
    updateCourse(formation) {
      this.update({
        formation: formation
      });
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-3 m-2"><img class="mt-1 ml-5 mr-auto" style="margin: auto;" src="../resources/logo-parcoursup.svg"/></div><search expr984="expr984"></search></div><div class="column"><fili-info expr985="expr985"></fili-info><school expr986="expr986"></school></div></div><school-info expr987="expr987"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'updateCourse',
      evaluate: _scope => _scope.updateCourse
    }],
    redundantAttribute: 'expr984',
    selector: '[expr984]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr985',
    selector: '[expr985]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr986',
    selector: '[expr986]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr987',
    selector: '[expr987]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
