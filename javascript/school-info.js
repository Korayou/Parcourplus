var schoolInfo = {
  css: null,
  exports: {
    onMounted() {
      console.log("Test!");
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div><div></div></div>', []),
  name: 'school-info'
};

export { schoolInfo as default };
