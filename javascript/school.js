var school = {
  css: null,
  exports: null,
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr52="expr52" class="box p-2 m-2" disabled></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr52',
    selector: '[expr52]',
    template: template('<iframe expr53="expr53" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.56389453066509%2C13.601074218750002%2C51.754240074033525&amp;layer=mapnik" style="border-radius: 5px;"></iframe><br/><div class="block control has-icons-left is-inline-block is-pulled-right"><input expr54="expr54" class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th expr55="expr55"></th></tr></thead><tbody><tr expr57="expr57"></tr></tbody></table>', [{
      type: bindingTypes.IF,
      evaluate: _scope => false,
      redundantAttribute: 'expr53',
      selector: '[expr53]',
      template: template(null, [])
    }, {
      redundantAttribute: 'expr54',
      selector: '[expr54]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onkeyup',
        evaluate: _scope => _scope.props.filterSearch
      }]
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template(' <a expr56="expr56"><span class="icon"><i class="fas fa-sort"></i></span></a>', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.sortField.name].join('')
        }]
      }, {
        redundantAttribute: 'expr56',
        selector: '[expr56]',
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
      redundantAttribute: 'expr55',
      selector: '[expr55]',
      itemName: 'sortField',
      indexName: null,
      evaluate: _scope => _scope.props.sortFields
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template('<td expr58="expr58"> </td><td expr59="expr59"> </td><td expr60="expr60"> </td><td expr61="expr61"> </td><td><title-progress expr62="expr62" max="100" style="margin: auto"></title-progress></td>', [{
        redundantAttribute: 'expr58',
        selector: '[expr58]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.g_ea_lib_vx
        }]
      }, {
        redundantAttribute: 'expr59',
        selector: '[expr59]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.ville_etab
        }]
      }, {
        redundantAttribute: 'expr60',
        selector: '[expr60]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.dep
        }]
      }, {
        redundantAttribute: 'expr61',
        selector: '[expr61]',
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
        redundantAttribute: 'expr62',
        selector: '[expr62]'
      }]),
      redundantAttribute: 'expr57',
      selector: '[expr57]',
      itemName: 'school',
      indexName: null,
      evaluate: _scope => _scope.props.schoolList
    }])
  }]),
  name: 'school'
};

export { school as default };
