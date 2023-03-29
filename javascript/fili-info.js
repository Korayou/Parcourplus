var filiInfo = {
  css: null,
  exports: null,
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="box p-1 m-2"><h1 class="title is-4 m-2"><a>BUT</a>  /  <a>BUT - Production</a>  /  <a>Informatique</a></h1><div class="box mt-2" style="background-color: #EAEAEA; margin: auto; width: 60%;"><p>Moyenne des admis<span class="is-pulled-right">19.3</span></p><p>Nombre de formations<span class="is-pulled-right">5</span></p><p>Capacité<span class="is-pulled-right">90</span></p><p>Sélectivité</p></div><div class="m-4"><line-graph expr4="expr4" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr5="expr5" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr6="expr6" style="height: 6rem;"></line-graph></div></div>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr4',
    selector: '[expr4]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr5',
    selector: '[expr5]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr6',
    selector: '[expr6]'
  }]),
  name: 'fili-info'
};

export { filiInfo as default };
