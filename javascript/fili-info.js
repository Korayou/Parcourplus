var filiInfo = {
  css: null,
  exports: null,
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="box p-1 m-2"><h1 class="title is-4 m-2"><a>BUT</a>  /  <a>BUT - Production</a>  /  <a>Informatique</a></h1><div class="box mt-2" style="background-color: #EAEAEA; margin: auto; width: 60%;"><p>Moyenne des admis<span class="is-pulled-right">19.3</span></p><p>Nombre de formations<span class="is-pulled-right">5</span></p><p>Capacité<span class="is-pulled-right">90</span></p><p>Sélectivité</p></div><div class="m-4"><line-graph expr12="expr12" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr13="expr13" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr14="expr14" style="height: 6rem;"></line-graph></div></div>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr12',
    selector: '[expr12]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr13',
    selector: '[expr13]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'line-graph',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr14',
    selector: '[expr14]'
  }]),
  name: 'fili-info'
};

export { filiInfo as default };
