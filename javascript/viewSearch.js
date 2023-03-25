function debounce(fn, wait) {
	let timeout

	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => fn(...args), wait)
	}
}

class View {
	constructor(){
		this.listFormations = document.querySelector("#list-formations")
		this.inputSearch = document.querySelector("input")
		this.message = document.querySelector("p.error")
	}

	_getInput(){
		return this.inputSearch.value
	}
	renderMessage(error){
		this.message.style.display = "block"
		this.message.textContent = error
	}

	renderList(formations){
		let ul = document.createElement("ul")
		formations.forEach((formation)=>{
			let li = document.createElement("li")
			let a = document.createElement("a")
			let span = document.createElement("span")
			//a.href = `test`
			a.target="_blank"
			a.textContent = formation.name
			span.textContent = formation.name

			li.appendChild(a)
			li.appendChild(span)
			ul.appendChild(li)
		})

		this.listFormations.replaceChildren(ul)
	}

	bindSearch(handler){
		this.inputSearch.addEventListener("input",debounce((e)=>{
			handler(this._getInput())	
		},500))
	}
}

export default View
