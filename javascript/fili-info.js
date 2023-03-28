var filiInfo = {
  css: null,
  exports: null,
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="box p-1 m-2"><h1 class="title is-4 m-2"><a>BUT</a>  /  <a>BUT - Production</a>  /  <a>Informatique</a></h1><div class="box mt-2" style="background-color: #EAEAEA; margin: auto; width: 60%;"><p>Moyenne des admis<span class="is-pulled-right">19.3</span></p><p>Nombre de formations<span class="is-pulled-right">5</span></p><p>Capacité<span class="is-pulled-right">90</span></p><p>Sélectivité</p></div><div class="m-4"><line-graph expr16="expr16" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr17="expr17" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr18="expr18" style="height: 6rem;"></line-graph></div></div>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr16',
    selector: '[expr16]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr17',
    selector: '[expr17]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr18',
    selector: '[expr18]'
  }]),
  name: 'fili-info'
};

export { filiInfo as default };
