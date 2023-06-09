const DEFAULT_CLASSES = "progress is-small m-2 mt-auto mb-auto";
const COLOR_CLASSES = ["is-link", "is-info", "is-success", "is-warning", "is-danger"];
var titleProgress = {
  css: null,
  exports: {
    computeClasses() {
      if (!this.props.value) return DEFAULT_CLASSES;
      let n = Math.floor(this.props.value / 20);
      if (n == 5) n = 4;
      return DEFAULT_CLASSES + " " + COLOR_CLASSES[n];
    },
    calcPct() {
      if (!this.props.value) {
        return "???";
      } else {
        return Math.round(this.props.value / this.props.max * 100) + "%";
      }
    },
    onMounted(props, state) {
      this.update({
        class: this.computeClasses()
      });
    },
    onBeforeUpdate(props, state) {
      state.class = this.computeClasses();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div style="display: flex;"><span expr32="expr32"></span><span expr33="expr33" class="ml-1"> </span><progress expr34="expr34" style="box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);"></progress></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.title,
    redundantAttribute: 'expr32',
    selector: '[expr32]',
    template: template(' ', [{
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.title
      }]
    }])
  }, {
    redundantAttribute: 'expr33',
    selector: '[expr33]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.calcPct()
    }]
  }, {
    redundantAttribute: 'expr34',
    selector: '[expr34]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'value',
      evaluate: _scope => _scope.props.value
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'max',
      evaluate: _scope => _scope.props.max
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'class',
      evaluate: _scope => _scope.state.class
    }]
  }]),
  name: 'title-progress'
};

export { titleProgress as default };
