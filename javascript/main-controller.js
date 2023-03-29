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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-3 m-2"><img class="mt-1 ml-5 mr-auto" style="margin: auto;" src="../resources/logo-parcoursup.svg"/></div><search expr470="expr470"></search></div><div class="column"><fili-info expr471="expr471"></fili-info><school expr472="expr472"></school></div></div><school-info expr473="expr473"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'updateCourse',
      evaluate: _scope => _scope.updateCourse
    }],
    redundantAttribute: 'expr470',
    selector: '[expr470]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr471',
    selector: '[expr471]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr472',
    selector: '[expr472]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr473',
    selector: '[expr473]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
