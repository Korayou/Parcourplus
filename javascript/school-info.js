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
        value: school.part_acces_gen
      }, {
        name: "Technologique",
        short: "Tech.",
        value: school.part_acces_tec
      }, {
        name: "Professionnel",
        short: "Pro.",
        value: school.part_acces_pro
      }, {
        name: "Autre",
        short: "Au.",
        value: 100 - (school.part_acces_gen + school.part_acces_tec + school.part_acces_pro)
      }];
      state.mentionStats = [{
        name: "Sans Mention",
        short: "SM",
        value: school.pct_sansmention
      }, {
        name: "Assez Bien",
        short: "AB",
        value: school.pct_ab
      }, {
        name: "Bien",
        short: "B",
        value: school.pct_b
      }, {
        name: "Très Bien",
        short: "TB",
        value: school.pct_tb
      }, {
        name: "Très Bien + Félicitations",
        short: "TBF",
        value: school.pct_tbf
      }, {
        name: "Non Spécifié",
        short: "NS",
        value: 100 - (school.pct_sansmention + school.pct_ab + school.pct_b + school.pct_tb + school.pct_tbf)
      }];
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr172="expr172" style="z-index: 10000" class="modal is-active"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.popupEnabled,
    redundantAttribute: 'expr172',
    selector: '[expr172]',
    template: template('<div class="modal-background"></div><div class="modal-content"><div class="box p-2"><p><h1 expr173="expr173" class="title is-4 m-2" style="color: #485FC7;"> </h1></p><p><h2></h2></p><div class="columns m-2"><div class="column"><p expr174="expr174"> </p><p expr175="expr175"> </p><p expr176="expr176"> </p><p expr177="expr177"> </p><p expr178="expr178"> </p><p expr179="expr179"> </p><p>Rang dernier admis : </p></div><div class="column is-one-fifth"><p>Vitesse de remplissage :</p></div></div><div class="m-4"><line-graph expr180="expr180" title="Répartition par genre" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr181="expr181" title="Répartition par bac" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr182="expr182" title="Répartition par mention au bac" style="height: 6rem;"></line-graph></div></div></div><button expr183="expr183" class="modal-close is-medium"></button>', [{
      redundantAttribute: 'expr173',
      selector: '[expr173]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.school.fields.g_ea_lib_vx
      }]
    }, {
      redundantAttribute: 'expr174',
      selector: '[expr174]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Ville : ', _scope.props.school.fields.ville_etab].join('')
      }]
    }, {
      redundantAttribute: 'expr175',
      selector: '[expr175]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Département : ', _scope.props.school.fields.dep, ' ', _scope.props.school.fields.dep_lib].join('')
      }]
    }, {
      redundantAttribute: 'expr176',
      selector: '[expr176]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Académie : ', _scope.props.school.fields.acad_mies].join('')
      }]
    }, {
      redundantAttribute: 'expr177',
      selector: '[expr177]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.school.fields.contrat_etab
      }]
    }, {
      redundantAttribute: 'expr178',
      selector: '[expr178]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Capacité : ', _scope.props.school.fields.capa_fin].join('')
      }]
    }, {
      redundantAttribute: 'expr179',
      selector: '[expr179]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => ['Nombre de voeux : ', _scope.props.school.fields.voe_tot].join('')
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
      redundantAttribute: 'expr180',
      selector: '[expr180]'
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
      redundantAttribute: 'expr181',
      selector: '[expr181]'
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
      redundantAttribute: 'expr182',
      selector: '[expr182]'
    }, {
      redundantAttribute: 'expr183',
      selector: '[expr183]',
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
