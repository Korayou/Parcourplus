const SORT_TABLE = [{
  name: "Nom",
  id: "g_ea_lib_vx"
}, {
  name: "Ville",
  id: "ville_etab"
}, {
  name: "Département",
  id: "dep"
}, {
  name: "Moyenne",
  id: "moyenne"
}, {
  name: "Sélectivité",
  id: "taux_acces_ens"
}];
var school = {
  css: null,
  exports: {
    filterSearch() {
      let input = this.$("input");
      if (!input) return;
      let finalArray = [];

      //On évite de trier avant d'avoir plus de 1 lettres.
      if (input.value.length > 1) {
        finalArray = this.state.schoolList.filter(item => {
          return item.fields.g_ea_lib_vx.toLowerCase().includes(input.value.toLowerCase());
        });
      } else {
        finalArray = this.state.schoolList;
      }
      this.update({
        filteredSchoolList: finalArray
      });
    },
    sortList(sortBy, shouldUpdate) {
      //Si la liste est déjà triée par la bonne catégorie, on l'inverse
      if (sortBy == this.state.sortBy) {
        this.state.filteredSchoolList.reverse();
      }

      //Sinon on l'ordonne par la nouvelle catégorie (ascendant par défaut)
      else {
        this.state.sortBy = sortBy;
        switch (sortBy) {
          case SORT_TABLE[3].id:
          case SORT_TABLE[4].id:
            {
              this.state.filteredSchoolList.sort((a, b) => {
                if (a.fields[sortBy] > b.fields[sortBy]) return 1;else return -1;
              });
              break;
            }
          default:
            {
              this.state.filteredSchoolList.sort((a, b) => {
                return a.fields[sortBy].localeCompare(b.fields[sortBy]);
              });
              break;
            }
        }
      }
      this.update();
    },
    onBeforeUpdate(props, state) {
      if (props.schoolListUpdating) {
        state.schoolList = [...props.schoolList];
        state.filteredSchoolList = [...state.schoolList];
        if (this.$("input")) this.$("input").value = "";
      }
    },
    onBeforeMount(props, state) {
      this.state = {
        sortBy: null,
        schoolList: [],
        filteredSchoolList: []
      };
    },
    sortFields: SORT_TABLE
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr680="expr680" class="box p-2 m-2" disabled></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr680',
    selector: '[expr680]',
    template: template('<iframe expr681="expr681" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-14.655761718750002%2C40.56389453066509%2C13.601074218750002%2C51.754240074033525&amp;layer=mapnik" style="border-radius: 5px;"></iframe><div class="block control has-icons-left is-inline-block is-pulled-right"><input expr682="expr682" class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th expr683="expr683"></th></tr></thead><tbody><tr expr685="expr685"></tr></tbody></table>', [{
      type: bindingTypes.IF,
      evaluate: _scope => false,
      redundantAttribute: 'expr681',
      selector: '[expr681]',
      template: template(null, [])
    }, {
      redundantAttribute: 'expr682',
      selector: '[expr682]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onkeyup',
        evaluate: _scope => _scope.filterSearch
      }]
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template(' <a expr684="expr684"><span class="icon"><i class="fas fa-sort"></i></span></a>', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.sortField.name].join('')
        }]
      }, {
        redundantAttribute: 'expr684',
        selector: '[expr684]',
        expressions: [{
          type: expressionTypes.ATTRIBUTE,
          name: 'id',
          evaluate: _scope => _scope.sortField.id
        }, {
          type: expressionTypes.EVENT,
          name: 'onclick',
          evaluate: _scope => () => _scope.sortList(_scope.sortField.id, true)
        }]
      }]),
      redundantAttribute: 'expr683',
      selector: '[expr683]',
      itemName: 'sortField',
      indexName: null,
      evaluate: _scope => _scope.sortFields
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template('<td expr686="expr686"> </td><td expr687="expr687"> </td><td expr688="expr688"> </td><td expr689="expr689"> </td><td><title-progress expr690="expr690" max="100" style="margin: auto"></title-progress></td>', [{
        redundantAttribute: 'expr686',
        selector: '[expr686]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.g_ea_lib_vx
        }]
      }, {
        redundantAttribute: 'expr687',
        selector: '[expr687]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.ville_etab
        }]
      }, {
        redundantAttribute: 'expr688',
        selector: '[expr688]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.dep
        }]
      }, {
        redundantAttribute: 'expr689',
        selector: '[expr689]',
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
        redundantAttribute: 'expr690',
        selector: '[expr690]'
      }]),
      redundantAttribute: 'expr685',
      selector: '[expr685]',
      itemName: 'school',
      indexName: null,
      evaluate: _scope => _scope.state.filteredSchoolList
    }])
  }]),
  name: 'school'
};

export { school as default };
