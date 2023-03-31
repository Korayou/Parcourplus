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
    let url = `${PAPI.searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${filiere}`;
    url = url.replace("+", "%2B");
    let request = await fetch(url);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem("fili." + filiere, JSON.stringify(response));
    return response;
  }
  static async fetchSpecialites(filiere, specialite) {
    if (localStorage.getItem(`spe.${filiere}.${specialite}`)) return JSON.parse(localStorage.getItem(`spe.${filiere}.${specialite}`));
    let url = `${PAPI.searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${specialite}&refine.fili=${filiere}`;
    url = url.replace("+", "%2B");
    let request = await fetch(url);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem(`spe.${filiere}.${specialite}`, JSON.stringify(response));
    return response;
  }
  static async fetchEtablissement(filiere, sousfiliere, soussousfiliere) {
    if (localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`)) return JSON.parse(localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`));
    let url = `${PAPI.searchURL}&rows=10000&refine.fil_lib_voe_acc=${soussousfiliere}&refine.form_lib_voe_acc=${sousfiliere}&refine.fili=${filiere}`;
    url = url.replace("+", "%2B");
    let request = await fetch(url);
    let result = await request.json();
    let response = result["records"];
    localStorage.setItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`, JSON.stringify(response));
    return response;
  }
}

var mainController = {
  css: null,
  exports: {
    updateCourse(course) {
      this.updateList(course);
      this.update({
        course: course,
        shouldShowInfos: course != null
      });
    },
    updateList(course) {
      course = course || this.state.course;
      PAPI.fetchEtablissement(course.fili, course.sousfili, course.soussousfili).then(response => {
        response.forEach(etablissement => {
          // calcul la moyenne
          let pct_sansmention = etablissement.fields.pct_sansmention;
          let pct_AB = etablissement.fields.pct_ab;
          let pct_B = etablissement.fields.pct_b;
          let pct_TB = etablissement.fields.pct_tb;
          let pct_TBF = etablissement.fields.pct_tbf;

          // On prend la moyenne des moyennes comprises dans la mention
          // Exemple : Assez bien est entre 12 et 14 donc 13.
          etablissement.fields.moyenne = (pct_TBF * 19 + pct_TB * 17 + pct_B * 15 + pct_AB * 13 + pct_sansmention * 11) / 100;
        });
        this.update({
          schoolListUpdating: true,
          schoolList: response
        });
        this.update({
          schoolListUpdating: false
        });
      });
    },
    onMounted(props, state) {
      this.update({
        course: null,
        schoolList: [],
        shouldShowInfos: false
      });
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-3 m-2" style="display: flex"><img class="m-auto" src="./resources/logo-parcoursup.svg"/></div><search expr643="expr643"></search></div><div class="column"><fili-info expr644="expr644"></fili-info><school expr645="expr645"></school></div></div><school-info expr646="expr646"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'updateCourse',
      evaluate: _scope => _scope.updateCourse
    }],
    redundantAttribute: 'expr643',
    selector: '[expr643]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'fili-info',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'schoolList',
      evaluate: _scope => _scope.state.schoolList
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'course',
      evaluate: _scope => _scope.state.course
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'shouldShowInfos',
      evaluate: _scope => _scope.state.shouldShowInfos
    }],
    redundantAttribute: 'expr644',
    selector: '[expr644]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'schoolList',
      evaluate: _scope => _scope.state.schoolList
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'schoolListUpdating',
      evaluate: _scope => _scope.state.schoolListUpdating
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'course',
      evaluate: _scope => _scope.state.course
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'shouldShowInfos',
      evaluate: _scope => _scope.state.shouldShowInfos
    }],
    redundantAttribute: 'expr645',
    selector: '[expr645]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr646',
    selector: '[expr646]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
