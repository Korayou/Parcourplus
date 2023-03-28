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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr26="expr26" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; background: #000000DD;"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.state.enabled,
    redundantAttribute: 'expr26',
    selector: '[expr26]',
    template: template('<div style="position: absolute; top: 10%; left: 10%; width: 80%; height: 80%; background: #FFFFFF"><button expr27="expr27" class="delete is-medium">X</button><p><h2></h2></p><line-graph expr28="expr28" style="height: 90px; margin: 10px;"></line-graph></div>', [{
      redundantAttribute: 'expr27',
      selector: '[expr27]',
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
      redundantAttribute: 'expr28',
      selector: '[expr28]'
    }])
  }]),
  name: 'school-info'
};

export { schoolInfo as default };
