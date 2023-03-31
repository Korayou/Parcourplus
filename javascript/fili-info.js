var filiInfo = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
    },
    onBeforeUpdate(props, state) {
      if (!props.schoolList || !props.schoolList.length) return;
      let list = props.schoolList;
      let avg = list.reduce((s, e) => s + e.fields.moyenne, 0) / list.length;
      let avgCap = list.reduce((s, e) => s + e.fields.capa_fin, 0) / list.length;
      let avgSlc = list.reduce((s, e) => s + (e.fields.taux_acces_ens || 0), 0) / list.filter(e => e.fields.taux_acces_ens).length;
      state.courseNumber = list.length;
      state.average = Math.round(avg * 100) / 100;
      state.capacity = Math.floor(avgCap);
      state.selectivity = Math.floor(avgSlc);
      let pctFemmes = Math.round(list.reduce((s, e) => s + (e.fields.pct_f || 0), 0) / list.filter(e => e.fields.pct_f).length);
      state.genreStats = [{
        name: "Hommes",
        short: "H",
        value: 100 - pctFemmes
      }, {
        name: "Femmes",
        short: "F",
        value: pctFemmes
      }];
      let pctBG = Math.round(list.reduce((s, e) => s + (e.fields.part_acces_gen || 0), 0) / list.filter(e => e.fields.part_acces_gen).length);
      let pctBT = Math.round(list.reduce((s, e) => s + (e.fields.part_acces_tec || 0), 0) / list.filter(e => e.fields.part_acces_tec).length);
      let pctBP = Math.round(list.reduce((s, e) => s + (e.fields.part_acces_pro || 0), 0) / list.filter(e => e.fields.part_acces_pro).length);
      state.bacStats = [{
        name: "Général",
        short: "Gen.",
        value: pctBG
      }, {
        name: "Technologique",
        short: "Tech.",
        value: pctBT
      }, {
        name: "Professionnel",
        short: "Pro.",
        value: pctBP
      }, {
        name: "Autre",
        short: "Au.",
        value: 100 - (pctBG + pctBT + pctBP)
      }];
      let pctSM = Math.round(list.reduce((s, e) => s + e.fields.pct_sansmention, 0) / list.length);
      let pctAB = Math.round(list.reduce((s, e) => s + e.fields.pct_ab, 0) / list.length);
      let pctB = Math.round(list.reduce((s, e) => s + e.fields.pct_b, 0) / list.length);
      let pctTB = Math.round(list.reduce((s, e) => s + e.fields.pct_tb, 0) / list.length);
      let pctTBF = Math.round(list.reduce((s, e) => s + e.fields.pct_tbf, 0) / list.length);
      state.mentionStats = [{
        name: "Sans Mention",
        short: "SM",
        value: pctSM
      }, {
        name: "Assez Bien",
        short: "AB",
        value: pctAB
      }, {
        name: "Bien",
        short: "B",
        value: pctB
      }, {
        name: "Très Bien",
        short: "TB",
        value: pctTB
      }, {
        name: "Très Bien + Félicitations",
        short: "TBF",
        value: pctTBF
      }, {
        name: "Non Spécifié",
        short: "NS",
        value: 100 - (pctSM + pctAB + pctB + pctTB + pctTBF)
      }];
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr7="expr7" class="box p-1 m-2"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    template: template('<h1 class="title is-4 m-2"><span expr8="expr8" style="color: #485FC7;"> </span>  /  \r\n            <span expr9="expr9" style="color: #485FC7;"> </span>  /  \r\n            <span expr10="expr10" style="color: #485FC7;"> </span></h1><div class="box mt-2" style="background-color: #EAEAEA; margin: auto; width: 60%;"><p>Moyenne des admis<span expr11="expr11" class="is-pulled-right"> </span></p><p>Nombre de formations<span expr12="expr12" class="is-pulled-right"> </span></p><p>Capacité<span expr13="expr13" class="is-pulled-right"> </span></p><title-progress expr14="expr14" max="100"></title-progress></div><div class="m-4"><line-graph expr15="expr15" title="Répartition par genre" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr16="expr16" title="Répartition par bac" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr17="expr17" title="Répartition par mention au bac" style="height: 6rem;"></line-graph></div>', [{
      redundantAttribute: 'expr8',
      selector: '[expr8]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.fili
      }]
    }, {
      redundantAttribute: 'expr9',
      selector: '[expr9]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.sousfili
      }]
    }, {
      redundantAttribute: 'expr10',
      selector: '[expr10]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.soussousfili
      }]
    }, {
      redundantAttribute: 'expr11',
      selector: '[expr11]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.average
      }]
    }, {
      redundantAttribute: 'expr12',
      selector: '[expr12]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.courseNumber
      }]
    }, {
      redundantAttribute: 'expr13',
      selector: '[expr13]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.capacity
      }]
    }, {
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'title-progress',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => "Sélectivité"
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'value',
        evaluate: _scope => _scope.state.selectivity
      }],
      redundantAttribute: 'expr14',
      selector: '[expr14]'
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
      redundantAttribute: 'expr15',
      selector: '[expr15]'
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
      redundantAttribute: 'expr16',
      selector: '[expr16]'
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
      redundantAttribute: 'expr17',
      selector: '[expr17]'
    }])
  }]),
  name: 'fili-info'
};

export { filiInfo as default };
