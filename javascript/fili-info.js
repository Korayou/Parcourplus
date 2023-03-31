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
      console.log(pctFemmes);
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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr26="expr26" class="box p-1 m-2"></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr26',
    selector: '[expr26]',
    template: template('<h1 class="title is-4 m-2"><span expr27="expr27" style="color: #485FC7;"> </span>  /  \n            <span expr28="expr28" style="color: #485FC7;"> </span>  /  \n            <span expr29="expr29" style="color: #485FC7;"> </span></h1><div class="box mt-2" style="background-color: #EAEAEA; margin: auto; width: 60%;"><p>Moyenne des admis<span expr30="expr30" class="is-pulled-right"> </span></p><p>Nombre de formations<span expr31="expr31" class="is-pulled-right"> </span></p><p>Capacité<span expr32="expr32" class="is-pulled-right"> </span></p><title-progress expr33="expr33" max="100"></title-progress></div><div class="m-4"><line-graph expr34="expr34" title="Répartition par genre" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr35="expr35" title="Répartition par bac" style="height: 6rem;"></line-graph></div><div class="m-4"><line-graph expr36="expr36" title="Répartition par mention au bac" style="height: 6rem;"></line-graph></div>', [{
      redundantAttribute: 'expr27',
      selector: '[expr27]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.fili
      }]
    }, {
      redundantAttribute: 'expr28',
      selector: '[expr28]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.sousfili
      }]
    }, {
      redundantAttribute: 'expr29',
      selector: '[expr29]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.props.course.soussousfili
      }]
    }, {
      redundantAttribute: 'expr30',
      selector: '[expr30]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.average
      }]
    }, {
      redundantAttribute: 'expr31',
      selector: '[expr31]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.state.courseNumber
      }]
    }, {
      redundantAttribute: 'expr32',
      selector: '[expr32]',
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
      redundantAttribute: 'expr33',
      selector: '[expr33]'
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
      redundantAttribute: 'expr34',
      selector: '[expr34]'
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
      redundantAttribute: 'expr35',
      selector: '[expr35]'
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
      redundantAttribute: 'expr36',
      selector: '[expr36]'
    }])
  }]),
  name: 'fili-info'
};

export { filiInfo as default };
