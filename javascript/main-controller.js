var mainController = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      //Initial state
      this.state = {
        course: null,
        shouldShowInfos: false
      };
    },
    updateCourse(course) {
      this.update({
        course: course,
        shouldShowInfos: course != null
      });
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-3 m-2"><img class="mt-1 ml-5 mr-auto" style="margin: auto;" src="../resources/logo-parcoursup.svg"/></div><search expr1334="expr1334"></search></div><div class="column"><fili-info expr1335="expr1335"></fili-info><school expr1336="expr1336"></school></div></div><school-info expr1337="expr1337"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'updateCourse',
      evaluate: _scope => _scope.updateCourse
    }],
    redundantAttribute: 'expr1334',
    selector: '[expr1334]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'course',
      evaluate: _scope => _scope.state.course
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'shouldShowInfos',
      evaluate: _scope => _scope.state.shouldShowInfos
    }],
    redundantAttribute: 'expr1335',
    selector: '[expr1335]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'course',
      evaluate: _scope => _scope.state.course
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'shouldShowInfos',
      evaluate: _scope => _scope.state.shouldShowInfos
    }],
    redundantAttribute: 'expr1336',
    selector: '[expr1336]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr1337',
    selector: '[expr1337]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
