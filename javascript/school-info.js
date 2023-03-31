var schoolInfo = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      this.state = {
        bacStats: [],
        genreStats: [],
        mentionStats: []
      };
    },
    onBeforeUpdate(props, state) {
      if (!this.props.school) return;
      let school = this.props.school.fields;
      state.genreStats = [{
        name: "Hommes",
        short: "H",
        value: 100 - school.pct_f
      }, {
        name: "Femmes",
        short: "F",
        value: school.pct_f
      }];
      state.bacStats = [{
        name: "Général",
        short: "Gen.",
        value: Math.round(school.part_acces_gen)
      }, {
        name: "Technologique",
        short: "Tech.",
        value: Math.round(school.part_acces_tec)
      }, {
        name: "Professionnel",
        short: "Pro.",
        value: Math.round(school.part_acces_pro)
      }, {
        name: "Autre",
        short: "Au.",
        value: 100 - (school.part_acces_gen + school.part_acces_tec + school.part_acces_pro)
      }];
      state.mentionStats = [{
        name: "Sans Mention",
        short: "SM",
        value: Math.round(school.pct_sansmention)
      }, {
        name: "Assez Bien",
        short: "AB",
        value: Math.round(school.pct_ab)
      }, {
        name: "Bien",
        short: "B",
        value: Math.round(school.pct_b)
      }, {
        name: "Très Bien",
        short: "TB",
        value: Math.round(school.pct_tb)
      }, {
        name: "Très Bien + Félicitations",
        short: "TBF",
        value: Math.round(school.pct_tbf)
      }, {
        name: "Non Spécifié",
        short: "NS",
        value: 100 - (school.pct_sansmention + school.pct_ab + school.pct_b + school.pct_tb + school.pct_tbf)
      }];
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr77="expr77" style="z-index: 10000" class="modal is-active"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.popupEnabled,
    redundantAttribute: 'expr77',
    selector: '[expr77]',
    template: template('<div class="modal-background"></div><div class="modal-content"><div class="box p-2"><p><h1 expr78="expr78" class="title is-4 m-2" style="color: #485FC7;"> </h1></p><div class="columns m-2"><div class="column"><p expr79="expr79"> </p><p expr80="expr80"> </p><p expr81="expr81"> </p><p expr82="expr82"> </p><p expr83="expr83"> </p><p expr84="expr84"> </p><p>Rang dernier appelé : </p><ul><li expr85="expr85"></li><li expr86="expr86"></li><li expr87="expr87"></li></ul><p expr88="expr88"> </p></div></div><div class="m-4"><line-graph expr89="expr89" title="Répartition par genre" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr90="expr90" title="Répartition par bac" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr91="expr91" title="Répartition par mention au bac" style="height: 6rem;"></line-graph></div></div></div><button expr92="expr92" class="modal-close is-medium"></button>', [{
      redundantAttribute: 'expr78',
      selector: '[expr78]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.school.fields.g_ea_lib_vx
      }]
    }, {
      redundantAttribute: 'expr79',
      selector: '[expr79]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Ville : ', _scope.props.school.fields.ville_etab].join('')
      }]
    }, {
      redundantAttribute: 'expr80',
      selector: '[expr80]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Département : ', _scope.props.school.fields.dep, ' ', _scope.props.school.fields.dep_lib].join('')
      }]
    }, {
      redundantAttribute: 'expr81',
      selector: '[expr81]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Académie : ', _scope.props.school.fields.acad_mies].join('')
      }]
    }, {
      redundantAttribute: 'expr82',
      selector: '[expr82]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.school.fields.contrat_etab
      }]
    }, {
      redundantAttribute: 'expr83',
      selector: '[expr83]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Capacité : ', _scope.props.school.fields.capa_fin].join('')
      }]
    }, {
      redundantAttribute: 'expr84',
      selector: '[expr84]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Nombre de voeux : ', _scope.props.school.fields.voe_tot].join('')
      }]
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.props.school.fields.lib_grp1,
      redundantAttribute: 'expr85',
      selector: '[expr85]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.props.school.fields.lib_grp1, ' : ', _scope.props.school.fields.ran_grp1].join('')
        }]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.props.school.fields.lib_grp2,
      redundantAttribute: 'expr86',
      selector: '[expr86]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.props.school.fields.lib_grp2, ' : ', _scope.props.school.fields.ran_grp2].join('')
        }]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.props.school.fields.lib_grp3,
      redundantAttribute: 'expr87',
      selector: '[expr87]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.props.school.fields.lib_grp3, ' : ', _scope.props.school.fields.ran_grp3].join('')
        }]
      }])
    }, {
      redundantAttribute: 'expr88',
      selector: '[expr88]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Admis hors académie : ', 100 - _scope.props.school.fields.pct_aca_orig, '%'].join('')
      }]
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'data',
        evaluate: _scope => _scope.state.genreStats
      }],
      redundantAttribute: 'expr89',
      selector: '[expr89]'
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'data',
        evaluate: _scope => _scope.state.bacStats
      }],
      redundantAttribute: 'expr90',
      selector: '[expr90]'
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'line-graph',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'data',
        evaluate: _scope => _scope.state.mentionStats
      }],
      redundantAttribute: 'expr91',
      selector: '[expr91]'
    }, {
      redundantAttribute: 'expr92',
      selector: '[expr92]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => _scope.props.closeWindow
      }]
    }])
  }]),
  name: 'school-info'
};

export { schoolInfo as default };
