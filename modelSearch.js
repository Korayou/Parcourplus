let model = {
	getFormations(search) {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest()
			xhr.open("GET", "/api/records/1.0/search/?dataset=fr-esr-parcoursup&q=&sort=tri&facet=fili&timezone=Europe%2FBerlin")
			xhr.responseType = "json"

			xhr.onload = (ev) => {
				if (xhr.status == 200)
					resolve(xhr.response)
			}
			xhr.onerror = () => {
				reject("error")
			}
			xhr.send()
		})

	}
}

export default model