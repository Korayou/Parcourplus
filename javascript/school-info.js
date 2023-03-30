var schoolInfo = {
  css: null,
  exports: {
    onMounted() {
      this.state.enabled = false;
      this.update();
    },
    closeWindow() {
      this.state.enabled = false;
      this.update();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr10="expr10" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background: #000000DD;"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.enabled,
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    template: template('<div style="position: absolute; top: 10%; left: 10%; width: 80%; height: 80%; background: #FFFFFF"><button expr11="expr11" class="delete is-medium">X</button><p><h2></h2></p><line-graph expr12="expr12" style="height: 90px; margin: 10px;"></line-graph></div>', [{
      redundantAttribute: 'expr11',
      selector: '[expr11]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => _scope.closeWindow
      }]
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [],
      redundantAttribute: 'expr12',
      selector: '[expr12]'
    }])
  }]),
  name: 'school-info'
};

export { schoolInfo as default };
