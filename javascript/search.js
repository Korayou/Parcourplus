let model = {
  getFormations(search) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "/api/records/1.0/search/?dataset=fr-esr-parcoursup&q=&sort=tri&facet=fili&timezone=Europe%2FBerlin");
      xhr.responseType = "json";
      xhr.onload = ev => {
        if (xhr.status == 200) resolve(xhr.response);
      };
      xhr.onerror = () => {
        reject("error");
      };
      xhr.send();
    });
  }
};

class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.loading = false;
    this.lastSearch = null;
    this.error = null;
    this.results = [];
    this.view.setLoading(false);
    this.view.bindSearch(this.search.bind(this));
  }
  reset() {
    this.loading = false;
    this.error = null;
    this.results = [];
  }
  async search(formation) {
    this.model.getFormations(formation).then(response => {
      let table = response["facet groups"][0]["facets"];
      this.view.renderList(table);
    }).catch(error => {
      this.view.renderMessage(error);
    });
  }
}

function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}
class View {
  constructor() {
    this.listFormations = document.querySelector("#list-formations");
    this.inputSearch = document.querySelector("input");
    this.message = document.querySelector("p.error");
  }
  _getInput() {
    return this.inputSearch.value;
  }
  renderMessage(error) {
    this.message.style.display = "block";
    this.message.textContent = error;
  }
  renderList(formations) {
    let ul = document.createElement("ul");
    formations.forEach(formation => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      let span = document.createElement("span");
      //a.href = `test`
      a.target = "_blank";
      a.textContent = formation.name;
      span.textContent = formation.name;
      li.appendChild(a);
      li.appendChild(span);
      ul.appendChild(li);
    });
    this.listFormations.replaceChildren(ul);
  }
  bindSearch(handler) {
    this.inputSearch.addEventListener("input", debounce(e => {
      handler(this._getInput());
    }, 500));
  }
}

var search = {
  css: null,
  exports: function search() {
    return {
      onBeforeMount(props, state) {
        // initial state
        this.state = {
          formation: props.formation
        };
      },
      search() {
        console.log("test1");
        const view = new View();
        new Controller(view, model);
      }
    };
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<label><input expr1="expr1" type="input"/><p class="error"></p><div id="list-formations"></div></label>', [{
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'oninput',
      evaluate: _scope => _scope.search
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.state.formation
    }]
  }]),
  name: 'search'
};

export { search as default };
