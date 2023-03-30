/*
    Parcoursup API (PAPI)
    Comprend un set de wrapper afin d'accéder plus aisément aux informations de l'API parcoursup
*/

class PAPI {
  static dataset = "fr-esr-parcoursup";
  static timezone = "Europe%2FBerlin";
  static searchURL = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=${PAPI.dataset}&timezone=${PAPI.timezone}`;
  static async fetchFilieres() {
    if (localStorage.getItem("filis")) return JSON.parse(localStorage.getItem("filis"));
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fili`);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem("filis", JSON.stringify(response));
    return response;
  }
  static async fetchFiliere(filiere) {
    if (localStorage.getItem("fili." + filiere)) return JSON.parse(localStorage.getItem("fili." + filiere));
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${filiere}`);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem("fili." + filiere, JSON.stringify(response));
    return response;
  }
  static async fetchSpecialites(specialite) {
    if (localStorage.getItem("spe." + specialite)) return JSON.parse(localStorage.getItem("spe." + specialite));
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${specialite}`);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem("spe." + specialite, JSON.stringify(response));
    return response;
  }
  static async fetchEtablissement(filiere, sousfiliere, soussousfiliere) {
    if (localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`)) return JSON.parse(localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`));
    let request = await fetch(`${PAPI.searchURL}&refine.fil_lib_voe_acc=${soussousfiliere}&refine.form_lib_voe_acc=${sousfiliere}&refine.fili=${filiere}`);
    let result = await request.json();
    let response = result["records"];
    localStorage.setItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`, JSON.stringify(response));
    return response;
  }
}

const PLACEHOLDERS = ["Formation", "Filière", "Spécialité"];
var search = {
  css: null,
  exports: {
    updateList() {
      let promise;
      switch (this.state.currentStep) {
        case 0:
          promise = PAPI.fetchFilieres();
          break;
        case 1:
          promise = PAPI.fetchFiliere(this.state.course.fili);
          break;
        case 2:
          promise = PAPI.fetchSpecialites(this.state.course.sousfili);
          break;
        default:
          return;
      }
      this.update({
        updating: true
      });
      promise.then(response => {
        this.state.allItems = response;
        this.filterSearch();
        this.update({
          updating: false
        });
      }, () => {
        if (!this.state.currentStep) {
          this.cruiseBack();
        }
        this.update({
          updating: false
        });
      });
    },
    clearSearch() {
      this.$("input").value = "";
    },
    filterSearch() {
      let input = this.$("input");
      if (!input) return;
      let finalArray = [];

      //On évite de trier avant d'avoir plus de 1 lettres.
      if (input.value.length > 1) {
        finalArray = this.state.allItems.filter(item => {
          return item.name.toLowerCase().includes(input.value.toLowerCase());
        });
      } else {
        finalArray = this.state.allItems;
      }
      this.update({
        items: finalArray
      });
    },
    cruiseForward(selection) {
      switch (this.state.currentStep) {
        case 0:
          this.state.course.fili = selection;
          break;
        case 1:
          this.state.course.sousfili = selection;
          break;
        case 2:
          this.state.course.soussousfili = selection;
          this.props.updateCourse(this.state.course);
          return;
        default:
          return;
      }
      this.state.currentStep++;
      this.updateList();
      this.clearSearch();
      this.update({
        placeholder: PLACEHOLDERS[this.state.currentStep]
      });
    },
    cruiseBack() {
      if (!this.state.currentStep) return;
      this.state.currentStep--;
      this.updateList();
      this.clearSearch();
      this.update({
        placeholder: PLACEHOLDERS[this.state.currentStep]
      });
    },
    onBeforeMount(props, state) {
      //Initial state
      this.state = {
        placeholder: PLACEHOLDERS[0],
        currentStep: 0,
        allItems: null,
        items: null,
        course: {},
        updating: false
      };
    },
    onMounted(props, state) {
      this.updateList();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="box p-1 m-2"><div class="columns m-1"><input expr626="expr626" class="input" type="input"/><button expr627="expr627" class="button ml-1">&lt;</button></div><div id="list-formations"><ul><li expr628="expr628" class="m-1"></li></ul></div></div>', [{
    redundantAttribute: 'expr626',
    selector: '[expr626]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onkeyup',
      evaluate: _scope => _scope.filterSearch
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.state.placeholder
    }]
  }, {
    redundantAttribute: 'expr627',
    selector: '[expr627]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'disabled',
      evaluate: _scope => !_scope.state.currentStep || _scope.state.updating
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.cruiseBack
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<button expr629="expr629" class="button is-fullwidth p-2"><span style="font-size: .75em; max-size: 90%"><strong expr630="expr630"> </strong></span><div style="margin-left: auto;"></div><span expr631="expr631" class="tag is-primary"> </span></button>', [{
      redundantAttribute: 'expr629',
      selector: '[expr629]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'disabled',
        evaluate: _scope => _scope.state.updating
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => () => _scope.cruiseForward(_scope.item.name)
      }]
    }, {
      redundantAttribute: 'expr630',
      selector: '[expr630]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.name
      }]
    }, {
      redundantAttribute: 'expr631',
      selector: '[expr631]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.count
      }]
    }]),
    redundantAttribute: 'expr628',
    selector: '[expr628]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }]),
  name: 'search'
};

export { search as default };
