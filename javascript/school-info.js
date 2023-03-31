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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr2149="expr2149" style="z-index: 10000" class="modal is-active"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.popupEnabled,
    redundantAttribute: 'expr2149',
    selector: '[expr2149]',
    template: template('<div class="modal-background"></div><div class="modal-content"><div class="box p-2"><p><h1 expr2150="expr2150" class="title is-4 m-2" style="color: #485FC7;"> </h1></p><div class="columns m-2"><div class="column"><p expr2151="expr2151"> </p><p expr2152="expr2152"> </p><p expr2153="expr2153"> </p><p expr2154="expr2154"> </p><p expr2155="expr2155"> </p><p expr2156="expr2156"> </p><p>Rang dernier appelé : </p><ul><li expr2157="expr2157"></li><li expr2158="expr2158"></li><li expr2159="expr2159"></li></ul><p expr2160="expr2160"> </p></div><div class="column"><p>Vitesse de remplissage :</p></div></div><div class="m-4"><line-graph expr2161="expr2161" title="Répartition par genre" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr2162="expr2162" title="Répartition par bac" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr2163="expr2163" title="Répartition par mention au bac" style="height: 6rem;"></line-graph></div></div></div><button expr2164="expr2164" class="modal-close is-medium"></button>', [{
      redundantAttribute: 'expr2150',
      selector: '[expr2150]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.school.fields.g_ea_lib_vx
      }]
    }, {
      redundantAttribute: 'expr2151',
      selector: '[expr2151]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Ville : ', _scope.props.school.fields.ville_etab].join('')
      }]
    }, {
      redundantAttribute: 'expr2152',
      selector: '[expr2152]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Département : ', _scope.props.school.fields.dep, ' ', _scope.props.school.fields.dep_lib].join('')
      }]
    }, {
      redundantAttribute: 'expr2153',
      selector: '[expr2153]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Académie : ', _scope.props.school.fields.acad_mies].join('')
      }]
    }, {
      redundantAttribute: 'expr2154',
      selector: '[expr2154]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.school.fields.contrat_etab
      }]
    }, {
      redundantAttribute: 'expr2155',
      selector: '[expr2155]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Capacité : ', _scope.props.school.fields.capa_fin].join('')
      }]
    }, {
      redundantAttribute: 'expr2156',
      selector: '[expr2156]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Nombre de voeux : ', _scope.props.school.fields.voe_tot].join('')
      }]
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.props.school.fields.lib_grp1,
      redundantAttribute: 'expr2157',
      selector: '[expr2157]',
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
      redundantAttribute: 'expr2158',
      selector: '[expr2158]',
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
      redundantAttribute: 'expr2159',
      selector: '[expr2159]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.props.school.fields.lib_grp3, ' : ', _scope.props.school.fields.ran_grp3].join('')
        }]
      }])
    }, {
      redundantAttribute: 'expr2160',
      selector: '[expr2160]',
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
      redundantAttribute: 'expr2161',
      selector: '[expr2161]'
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
      redundantAttribute: 'expr2162',
      selector: '[expr2162]'
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
      redundantAttribute: 'expr2163',
      selector: '[expr2163]'
    }, {
      redundantAttribute: 'expr2164',
      selector: '[expr2164]',
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
