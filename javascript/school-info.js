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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr11="expr11" style="z-index: 10000" class="modal is-active"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.popupEnabled,
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    template: template('<div class="modal-background"></div><div class="modal-content"><div class="box p-2"><p><h1 expr12="expr12" class="title is-4 m-2" style="color: #485FC7;"> </h1></p><div class="columns m-2"><div class="column"><p expr13="expr13"> </p><p expr14="expr14"> </p><p expr15="expr15"> </p><p expr16="expr16"> </p><p expr17="expr17"> </p><p expr18="expr18"> </p><p>Rang dernier appelé : </p><ul><li expr19="expr19"></li><li expr20="expr20"></li><li expr21="expr21"></li></ul><p expr22="expr22"> </p></div></div><div class="m-4"><line-graph expr23="expr23" title="Répartition par genre" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr24="expr24" title="Répartition par bac" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr25="expr25" title="Répartition par mention au bac" style="height: 6rem;"></line-graph></div></div></div><button expr26="expr26" class="modal-close is-medium"></button>', [{
      redundantAttribute: 'expr12',
      selector: '[expr12]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.school.fields.g_ea_lib_vx
      }]
    }, {
      redundantAttribute: 'expr13',
      selector: '[expr13]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Ville : ', _scope.props.school.fields.ville_etab].join('')
      }]
    }, {
      redundantAttribute: 'expr14',
      selector: '[expr14]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Département : ', _scope.props.school.fields.dep, ' ', _scope.props.school.fields.dep_lib].join('')
      }]
    }, {
      redundantAttribute: 'expr15',
      selector: '[expr15]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Académie : ', _scope.props.school.fields.acad_mies].join('')
      }]
    }, {
      redundantAttribute: 'expr16',
      selector: '[expr16]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.school.fields.contrat_etab
      }]
    }, {
      redundantAttribute: 'expr17',
      selector: '[expr17]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Capacité : ', _scope.props.school.fields.capa_fin].join('')
      }]
    }, {
      redundantAttribute: 'expr18',
      selector: '[expr18]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Nombre de voeux : ', _scope.props.school.fields.voe_tot].join('')
      }]
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.props.school.fields.lib_grp1,
      redundantAttribute: 'expr19',
      selector: '[expr19]',
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
      redundantAttribute: 'expr20',
      selector: '[expr20]',
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
      redundantAttribute: 'expr21',
      selector: '[expr21]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.props.school.fields.lib_grp3, ' : ', _scope.props.school.fields.ran_grp3].join('')
        }]
      }])
    }, {
      redundantAttribute: 'expr22',
      selector: '[expr22]',
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
      redundantAttribute: 'expr23',
      selector: '[expr23]'
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
      redundantAttribute: 'expr24',
      selector: '[expr24]'
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
      redundantAttribute: 'expr25',
      selector: '[expr25]'
    }, {
      redundantAttribute: 'expr26',
      selector: '[expr26]',
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
