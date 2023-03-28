var school = {
  css: null,
  exports: {
    onMounted() {
      console.log("Test!");
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<main class="container"><div class="block control has-icons-left is-inline-block is-pulled-right"><input class="input" type="search" placeholder="Établissement"/><span class="icon is-small is-left"><i class="fas fa-search"></i></span></div><table class="table is-fullwidth is-hoverable"><thead><tr><th><abbr title="name">Nom</abbr></th><th><abbr title="city">Ville</abbr></th><th><abbr title="dept">Dpt</abbr></th><th><abbr title="moyenne">Moyenne</abbr></th><th><abbr title="selectivite">Sélectivité</abbr></th></tr></thead></table></main>', []),
  name: 'school'
};

export { school as default };
