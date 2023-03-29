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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr1500="expr1500" class="box p-1 m-2"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr1500',
    selector: '[expr1500]',
    template: template('<h1 class="title is-4 m-2"><span expr1501="expr1501" style="color: #485FC7;"> </span>  /  \r\n            <span expr1502="expr1502" style="color: #485FC7;"> </span>  /  \r\n            <span expr1503="expr1503" style="color: #485FC7;"> </span></h1><div class="box mt-2" style="background-color: #EAEAEA; margin: auto; width: 60%;"><p>Moyenne des admis<span expr1504="expr1504" class="is-pulled-right"> </span></p><p>Nombre de formations<span expr1505="expr1505" class="is-pulled-right"> </span></p><p>Capacité<span expr1506="expr1506" class="is-pulled-right"> </span></p><p>Sélectivité</p></div><div class="m-4"><line-graph expr1507="expr1507" title="Répartition par genre" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr1508="expr1508" title="Répartition par bac" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr1509="expr1509" title="Répartition par mention au bac" style="height: 6rem;"></line-graph></div>', [{
      redundantAttribute: 'expr1501',
      selector: '[expr1501]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.fili
      }]
    }, {
      redundantAttribute: 'expr1502',
      selector: '[expr1502]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.sousfili
      }]
    }, {
      redundantAttribute: 'expr1503',
      selector: '[expr1503]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.soussousfili
      }]
    }, {
      redundantAttribute: 'expr1504',
      selector: '[expr1504]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.average
      }]
    }, {
      redundantAttribute: 'expr1505',
      selector: '[expr1505]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.courseNumber
      }]
    }, {
      redundantAttribute: 'expr1506',
      selector: '[expr1506]',
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
      redundantAttribute: 'expr1507',
      selector: '[expr1507]'
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [],
      redundantAttribute: 'expr1508',
      selector: '[expr1508]'
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [],
      redundantAttribute: 'expr1509',
      selector: '[expr1509]'
    }])
  }]),
  name: 'fili-info'
};

export { filiInfo as default };
