var school = {
  css: null,
  exports: null,
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr345="expr345" class="box p-2 m-2" disabled></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr345',
    selector: '[expr345]',
    template: template('<iframe expr346="expr346" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.56389453066509%2C13.601074218750002%2C51.754240074033525&amp;layer=mapnik" style="border-radius: 5px;"></iframe><br/><div class="block control has-icons-left is-inline-block is-pulled-right"><input class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th expr347="expr347"></th></tr></thead><tbody><tr expr349="expr349"></tr></tbody></table>', [{
      type: bindingTypes.IF,
      evaluate: _scope => false,
      redundantAttribute: 'expr346',
      selector: '[expr346]',
      template: template(null, [])
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template(' <a expr348="expr348"><span class="icon"><i class="fas fa-sort"></i></span></a>', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.sortField.name].join('')
        }]
      }, {
        redundantAttribute: 'expr348',
        selector: '[expr348]',
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
      redundantAttribute: 'expr347',
      selector: '[expr347]',
      itemName: 'sortField',
      indexName: null,
      evaluate: _scope => _scope.props.sortFields
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template('<td expr350="expr350"> </td><td expr351="expr351"> </td><td expr352="expr352"> </td><td expr353="expr353"> </td><td><title-progress expr354="expr354" max="100" style="margin: auto"></title-progress></td>', [{
        redundantAttribute: 'expr350',
        selector: '[expr350]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.g_ea_lib_vx
        }]
      }, {
        redundantAttribute: 'expr351',
        selector: '[expr351]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.ville_etab
        }]
      }, {
        redundantAttribute: 'expr352',
        selector: '[expr352]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.dep
        }]
      }, {
        redundantAttribute: 'expr353',
        selector: '[expr353]',
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
        redundantAttribute: 'expr354',
        selector: '[expr354]'
      }]),
      redundantAttribute: 'expr349',
      selector: '[expr349]',
      itemName: 'school',
      indexName: null,
      evaluate: _scope => _scope.props.schoolList
    }])
  }]),
  name: 'school'
};

export { school as default };
