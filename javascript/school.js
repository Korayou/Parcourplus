const SORT_TABLE = [{
  name: "Nom",
  id: "g_ea_lib_vx"
}, {
  name: "Ville",
  id: "ville_etab"
}, {
  name: "Dept.",
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
      if (state.map) {
        state.markers.clearLayers();
        for (let school of state.filteredSchoolList) {
          let fields = school.fields;
          let pos = fields.g_olocalisation_des_formations;
          let popupHTML = document.createElement("div");
          let title = document.createElement("span");
          title.textContent = fields.g_ea_lib_vx;
          title.class = "is-primary";
          console.log(props);
          let linkToForma = document.createElement("a");
          linkToForma.onclick = () => props.popup(school);
          linkToForma.textContent = "Voir les infos de l'établissement";
          popupHTML.appendChild(title);
          popupHTML.appendChild(document.createElement("br"));
          popupHTML.appendChild(linkToForma);
          let marker = L.marker(pos);
          marker.bindPopup(popupHTML);
          state.markers.addLayer(marker);
        }
        state.map.addLayer(state.markers);
      }
    },
    onUpdated(props, state) {
      if (!state.map && props.shouldShowInfos) {
        state.map = L.map("map").setView([47, 2.5], 5);
        state.markers = L.markerClusterGroup();
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(state.map);
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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr157="expr157" class="box p-2 m-2" disabled></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.shouldShowInfos,
    redundantAttribute: 'expr157',
    selector: '[expr157]',
    template: template('<div id="map" width="100%" style="border-radius: 5px"></div><div class="mt-2 mb-2 control has-icons-left is-inline-block is-pulled-right"><input expr158="expr158" class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable is-narrow"><thead><tr><th expr159="expr159"></th></tr></thead><tbody><tr expr161="expr161"></tr></tbody></table>', [{
      redundantAttribute: 'expr158',
      selector: '[expr158]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onkeyup',
        evaluate: _scope => _scope.filterSearch
      }]
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template(' <a expr160="expr160"><span class="icon"><i class="fas fa-sort"></i></span></a>', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.sortField.name].join('')
        }]
      }, {
        redundantAttribute: 'expr160',
        selector: '[expr160]',
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
      redundantAttribute: 'expr159',
      selector: '[expr159]',
      itemName: 'sortField',
      indexName: null,
      evaluate: _scope => _scope.sortFields
    }, {
      type: bindingTypes.EACH,
      getKey: null,
      condition: null,
      template: template('<td><a expr162="expr162"> </a></td><td expr163="expr163"> </td><td expr164="expr164"> </td><td expr165="expr165"> </td><td><title-progress expr166="expr166" max="100" style="margin: auto"></title-progress></td>', [{
        redundantAttribute: 'expr162',
        selector: '[expr162]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.g_ea_lib_vx
        }, {
          type: expressionTypes.EVENT,
          name: 'onclick',
          evaluate: _scope => () => _scope.props.popup(_scope.school)
        }]
      }, {
        redundantAttribute: 'expr163',
        selector: '[expr163]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.ville_etab
        }]
      }, {
        redundantAttribute: 'expr164',
        selector: '[expr164]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.school.fields.dep
        }]
      }, {
        redundantAttribute: 'expr165',
        selector: '[expr165]',
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
        redundantAttribute: 'expr166',
        selector: '[expr166]'
      }]),
      redundantAttribute: 'expr161',
      selector: '[expr161]',
      itemName: 'school',
      indexName: null,
      evaluate: _scope => _scope.state.filteredSchoolList
    }])
  }]),
  name: 'school'
};

export { school as default };
