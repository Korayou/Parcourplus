class   Controller  {
	constructor(view,model){
		this.view = view
		this.model = model

		this.loading = false
		this.lastSearch = null
		this.error = null
		this.results = []

		this.view.setLoading(false)
		this.view.bindSearch(this.search.bind(this))
	}
	reset() {
		this.loading = false
		this.error = null
		this.results = []
	}

	async search(formation) {
        this.model.getFormations(formation).then((response) => {
			let table = response["facet groups"][0]["facets"]
            this.view.renderList(table)
        }).catch((error) => {
        this.view.renderMessage(error)
        })
    }
} 

export default Controller

