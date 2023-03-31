var school = {
  css: null,
  exports: null,
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr44="expr44" class="box p-2 m-2" disabled></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr44',
    selector: '[expr44]',
    template: template('<iframe expr45="expr45" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.56389453066509%2C13.601074218750002%2C51.754240074033525&amp;layer=mapnik" style="border-radius: 5px;"></iframe><br/><div class="block control has-icons-left is-inline-block is-pulled-right"><input expr46="expr46" class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th expr47="expr47"></th></tr></thead><tbody><tr expr49="expr49"></tr></tbody></table>', [{
      type: bindingTypes.IF,
      evaluate: _scope => false,
      redundantAttribute: 'expr45',
      selector: '[expr45]',
      template: template(null, [])
    }, {
      redundantAttribute: 'expr46',
      selector: '[expr46]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onkeyup',
        evaluate: _scope => _scope.props.filterSearch
      }]
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template(' <a expr48="expr48"><span class="icon"><i class="fas fa-sort"></i></span></a>', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.sortField.name].join('')
        }]
      }, {
        redundantAttribute: 'expr48',
        selector: '[expr48]',
        expressions: [{
          type: expressionTypes.ATTRIBUTE,
          name: 'id',
          evaluate: _scope => _scope.sortField.id
        }, {
          type: expressionTypes.EVENT,
          name: 'onclick',
          evaluate: _scope => () => _scope.props.sortList(_scope.sortField.id)
        }]
      }]),
      redundantAttribute: 'expr47',
      selector: '[expr47]',
      itemName: 'sortField',
      indexName: null,
      evaluate: _scope => _scope.props.sortFields
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template('<td expr50="expr50"> </td><td expr51="expr51"> </td><td expr52="expr52"> </td><td expr53="expr53"> </td><td><title-progress expr54="expr54" max="100" style="margin: auto"></title-progress></td>', [{
        redundantAttribute: 'expr50',
        selector: '[expr50]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.g_ea_lib_vx
        }]
      }, {
        redundantAttribute: 'expr51',
        selector: '[expr51]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.ville_etab
        }]
      }, {
        redundantAttribute: 'expr52',
        selector: '[expr52]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.dep
        }]
      }, {
        redundantAttribute: 'expr53',
        selector: '[expr53]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.moyenne
        }]
      }, {
        type: bindingTypes.TAG,
        getComponent: getComponent,
        evaluate: _scope => 'title-progress',
        slots: [],
        attributes: [{
          type: expressionTypes.ATTRIBUTE,
          name: 'value',
          evaluate: _scope => _scope.school.fields.taux_acces_ens
        }],
        redundantAttribute: 'expr54',
        selector: '[expr54]'
      }]),
      redundantAttribute: 'expr49',
      selector: '[expr49]',
      itemName: 'school',
      indexName: null,
      evaluate: _scope => _scope.props.schoolList
    }])
  }]),
  name: 'school'
};

export { school as default };
