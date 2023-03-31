var school = {
  css: null,
  exports: null,
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr27="expr27" class="box p-2 m-2" disabled></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr27',
    selector: '[expr27]',
    template: template('<iframe expr28="expr28" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.56389453066509%2C13.601074218750002%2C51.754240074033525&amp;layer=mapnik" style="border-radius: 5px;"></iframe><br/><div class="block control has-icons-left is-inline-block is-pulled-right"><input class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th expr29="expr29"></th></tr></thead><tbody><tr expr31="expr31"></tr></tbody></table>', [{
      type: bindingTypes.IF,
      evaluate: _scope => false,
      redundantAttribute: 'expr28',
      selector: '[expr28]',
      template: template(null, [])
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template(' <a expr30="expr30"><span class="icon"><i class="fas fa-sort"></i></span></a>', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.sortField.name].join('')
        }]
      }, {
        redundantAttribute: 'expr30',
        selector: '[expr30]',
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
      redundantAttribute: 'expr29',
      selector: '[expr29]',
      itemName: 'sortField',
      indexName: null,
      evaluate: _scope => _scope.props.sortFields
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template('<td expr32="expr32"> </td><td expr33="expr33"> </td><td expr34="expr34"> </td><td expr35="expr35"> </td><td><title-progress expr36="expr36" max="100" style="margin: auto"></title-progress></td>', [{
        redundantAttribute: 'expr32',
        selector: '[expr32]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.g_ea_lib_vx
        }]
      }, {
        redundantAttribute: 'expr33',
        selector: '[expr33]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.ville_etab
        }]
      }, {
        redundantAttribute: 'expr34',
        selector: '[expr34]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.dep
        }]
      }, {
        redundantAttribute: 'expr35',
        selector: '[expr35]',
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
        redundantAttribute: 'expr36',
        selector: '[expr36]'
      }]),
      redundantAttribute: 'expr31',
      selector: '[expr31]',
      itemName: 'school',
      indexName: null,
      evaluate: _scope => _scope.props.schoolList
    }])
  }]),
  name: 'school'
};

export { school as default };
