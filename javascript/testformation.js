async function formation() {
  let result = await fetch("https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-parcoursup&q=&sort=tri&facet=fili&timezone=Europe%2FBerlin");
  let resultats = await result.json();
  console.log(result);
  console.log(resultats);
  let table = resultats["facet_groups"][0]["facets"];
  console.log(table);
  const tableBody = document.querySelector("tbody1");
  for (tes of table) {
    const tableRow = document.createElement("tr");
    const formationCell = document.createElement("td");
    let texteformation = document.createTextNode(tes.name);
    formationCell.appendChild(texteformation);
    tableRow.appendChild(formationCell);
    const nombredeplaceCell = document.createElement("td");
    const nombredeplace = document.createTextNode(tes.count);
    nombredeplaceCell.appendChild(nombredeplace);
    tableRow.appendChild(nombredeplaceCell);
    tableBody.appendChild(tableRow);
  }
}
var testformation = {
  css: null,
  exports: {
    onMounted() {
      formation();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"/><table class="table is-fullwidth is-hoverable"><tbody1 expr4="expr4"></tbody1></table>', [{
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'tbody1',
    slots: [{
      id: 'default',
      html: '<tr><th></th><th></th></tr>',
      bindings: []
    }],
    attributes: [],
    redundantAttribute: 'expr4',
    selector: '[expr4]'
  }]),
  name: 'formation'
};

export { testformation as default };
