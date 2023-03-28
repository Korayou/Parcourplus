var schoolInfo = {
  css: null,
  exports: {
    onMounted() {
      this.state.enabled = true;
      this.update();
    },
    closeWindow() {
      this.state.enabled = false;
      this.update();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr33="expr33" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background: #000000DD;"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.enabled,
    redundantAttribute: 'expr33',
    selector: '[expr33]',
    template: template('<div style="position: absolute; top: 10%; left: 10%; width: 80%; height: 80%; background: #FFFFFF"><button expr34="expr34">X</button><p><h2></h2></p><line-graph expr35="expr35" style="height: 90px; margin: 10px;"></line-graph></div>', [{
      redundantAttribute: 'expr34',
      selector: '[expr34]',
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
      redundantAttribute: 'expr35',
      selector: '[expr35]'
    }])
  }]),
  name: 'school-info'
};

export { schoolInfo as default };
