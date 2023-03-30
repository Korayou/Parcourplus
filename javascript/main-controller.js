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
  static async fetchSpecialites(filiere, specialite) {
    if (localStorage.getItem(`spe.${filiere}.${specialite}`)) return JSON.parse(localStorage.getItem(`spe.${filiere}.${specialite}`));
    let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${specialite}&refine.fili=${filiere}`);
    let result = await request.json();
    let response = result["facet_groups"][0]["facets"];
    localStorage.setItem(`spe.${filiere}.${specialite}`, JSON.stringify(response));
    return response;
  }
  static async fetchEtablissement(filiere, sousfiliere, soussousfiliere) {
    if (localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`)) return JSON.parse(localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`));
    let request = await fetch(`${PAPI.searchURL}&rows=10000&refine.fil_lib_voe_acc=${soussousfiliere}&refine.form_lib_voe_acc=${sousfiliere}&refine.fili=${filiere}`);
    let result = await request.json();
    let response = result["records"];
    localStorage.setItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`, JSON.stringify(response));
    return response;
  }
}

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
var mainController = {
  css: null,
  exports: {
    sortList(sortBy) {
      //Si la liste est déjà triée par la bonne catégorie, on l'inverse
      if (sortBy == this.state.sortBy) {
        this.state.schoolList.reverse();
      }
      //Sinon on l'ordonne par la nouvelle catégorie (ascendant par défaut)
      else {
        this.state.sortBy = sortBy;
        switch (sortBy) {
          case SORT_TABLE[3].id:
          case SORT_TABLE[4].id:
            {
              this.state.schoolList.sort((a, b) => {
                if (a.fields[sortBy] > b.fields[sortBy]) return 1;else return -1;
              });
              break;
            }
          default:
            {
              this.state.schoolList.sort((a, b) => {
                return a.fields[sortBy].localeCompare(b.fields[sortBy]);
              });
              break;
            }
        }
      }
      this.update({
        schoolList: this.state.schoolList
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
          schoolList: response
        });
      });
    },
    updateCourse(course) {
      this.updateList(course);
      this.update({
        course: course,
        sortFields: SORT_TABLE,
        shouldShowInfos: course != null
      });
    },
    onMounted(props, state) {
      this.update({
        course: null,
        sortBy: null,
        schoolList: null,
        sortFields: SORT_TABLE,
        shouldShowInfos: false
      });
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="columns"><div class="column is-one-third"><div class="box p-3 m-2"><img class="mt-1 ml-5 mr-auto" style="margin: auto;" src="../resources/logo-parcoursup.svg"/></div><search expr0="expr0"></search></div><div class="column"><fili-info expr1="expr1"></fili-info><school expr2="expr2"></school></div></div><school-info expr3="expr3"></school-info>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'search',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'updateCourse',
      evaluate: _scope => _scope.updateCourse
    }],
    redundantAttribute: 'expr0',
    selector: '[expr0]'
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
    redundantAttribute: 'expr1',
    selector: '[expr1]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'sortList',
      evaluate: _scope => _scope.sortList
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'schoolList',
      evaluate: _scope => _scope.state.schoolList
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'sortFields',
      evaluate: _scope => _scope.state.sortFields
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'course',
      evaluate: _scope => _scope.state.course
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'shouldShowInfos',
      evaluate: _scope => _scope.state.shouldShowInfos
    }],
    redundantAttribute: 'expr2',
    selector: '[expr2]'
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'school-info',
    slots: [],
    attributes: [],
    redundantAttribute: 'expr3',
    selector: '[expr3]'
  }]),
  name: 'main-controller'
};

export { mainController as default };
