const DEFAULT_CLASSES = "progress is-small m-2 mt-auto mb-auto";
const COLOR_CLASSES = ["is-danger", "is-warning", "is-success", "is-info", "is-link"];
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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div style="display: flex;"><span expr44="expr44"></span><span expr45="expr45" class="ml-1"> </span><progress expr46="expr46" style="box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);"></progress></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.title,
    redundantAttribute: 'expr44',
    selector: '[expr44]',
    template: template(' ', [{
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.title
      }]
    }])
  }, {
    redundantAttribute: 'expr45',
    selector: '[expr45]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.calcPct()
    }]
  }, {
    redundantAttribute: 'expr46',
    selector: '[expr46]',
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
