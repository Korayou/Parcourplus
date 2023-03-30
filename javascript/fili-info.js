var filiInfo = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      this.state = {
        average: 0,
        capacity: 0,
        selectivity: 0,
        courseNumber: 0
      };
    },
    onUpdated(props, state) {}
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr0="expr0" class="box p-1 m-2"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    template: template('<h1 class="title is-4 m-2"><span expr1="expr1" style="color: #485FC7;"> </span>  /  \r\n            <span expr2="expr2" style="color: #485FC7;"> </span>  /  \r\n            <span expr3="expr3" style="color: #485FC7;"> </span></h1><div class="box mt-2" style="background-color: #EAEAEA; margin: auto; width: 60%;"><p>Moyenne des admis<span expr4="expr4" class="is-pulled-right"> </span></p><p>Nombre de formations<span expr5="expr5" class="is-pulled-right"> </span></p><p>Capacité<span expr6="expr6" class="is-pulled-right"> </span></p><p>Sélectivité</p></div><div class="m-4"><line-graph expr7="expr7" title="Répartition par genre" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr8="expr8" title="Répartition par bac" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr9="expr9" title="Répartition par mention au bac" style="height: 6rem;"></line-graph></div>', [{
      redundantAttribute: 'expr1',
      selector: '[expr1]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.fili
      }]
    }, {
      redundantAttribute: 'expr2',
      selector: '[expr2]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.sousfili
      }]
    }, {
      redundantAttribute: 'expr3',
      selector: '[expr3]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.soussousfili
      }]
    }, {
      redundantAttribute: 'expr4',
      selector: '[expr4]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.average
      }]
    }, {
      redundantAttribute: 'expr5',
      selector: '[expr5]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.courseNumber
      }]
    }, {
      redundantAttribute: 'expr6',
      selector: '[expr6]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.capacity
      }]
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [],
      redundantAttribute: 'expr7',
      selector: '[expr7]'
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [],
      redundantAttribute: 'expr8',
      selector: '[expr8]'
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [],
      redundantAttribute: 'expr9',
      selector: '[expr9]'
    }])
  }]),
  name: 'fili-info'
};

export { filiInfo as default };
