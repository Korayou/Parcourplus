var mainController = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      //Initial state
      this.state = {
        course: null,
        updating: false,
        shouldShowInfos: false
      };
    },
    updateCourse(course) {
      this.update({
        course: course,
        shouldShowInfos: course != null,
        updating: !this.state.updating
      });
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-3 m-2"><img class="mt-1 ml-5 mr-auto" style="margin: auto;" src="../resources/logo-parcoursup.svg"/></div><search expr125="expr125"></search></div><div class="column"><fili-info expr126="expr126"></fili-info><school expr127="expr127"></school></div></div><school-info expr128="expr128"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'updateCourse',
      evaluate: _scope => _scope.updateCourse
    }],
    redundantAttribute: 'expr125',
    selector: '[expr125]'
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
    redundantAttribute: 'expr126',
    selector: '[expr126]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'parentUpdate',
      evaluate: _scope => _scope.state.updating
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'course',
      evaluate: _scope => _scope.state.course
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'shouldShowInfos',
      evaluate: _scope => _scope.state.shouldShowInfos
    }],
    redundantAttribute: 'expr127',
    selector: '[expr127]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr128',
    selector: '[expr128]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
