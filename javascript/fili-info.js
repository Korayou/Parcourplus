var filiInfo = {
  css: null,
  exports: null,
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="box p-1 m-2"><h1 class="title is-4 m-2"><a>BUT</a>  /  <a>BUT - Production</a>  /  <a>Informatique</a></h1><div class="box mt-2" style="background-color: #EAEAEA; margin: auto; width: 60%;"><p>Moyenne des admis<span class="is-pulled-right">19.3</span></p><p>Nombre de formations<span class="is-pulled-right">5</span></p><p>Capacité<span class="is-pulled-right">90</span></p><p>Sélectivité</p></div><div class="m-4"><line-graph expr9="expr9" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr10="expr10" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr11="expr11" style="height: 6rem;"></line-graph></div></div>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr9',
    selector: '[expr9]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr10',
    selector: '[expr10]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr11',
    selector: '[expr11]'
  }]),
  name: 'fili-info'
};

export { filiInfo as default };
