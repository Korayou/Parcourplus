/*
    Parcoursup API (PAPI)
    Comprend un set de wrapper afin d'accéder plus aisément aux informations de l'API parcoursup
*/

class PAPI {
    
    static dataset   = "fr-esr-parcoursup"
    static timezone  = "Europe%2FBerlin"
    static searchURL = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=${PAPI.dataset}&timezone=${PAPI.timezone}`

    static async fetchFilieres() {

        if (localStorage.getItem("filis")) return JSON.parse(localStorage.getItem("filis"))

        let request  = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fili`)
        let result   = await request.json()
        let response = result["facet_groups"][0]["facets"]

        localStorage.setItem("filis", JSON.stringify(response))

        return response
    }

    static async fetchFiliere(filiere) {

        if (localStorage.getItem("fili." + filiere)) return JSON.parse(localStorage.getItem("fili." + filiere))

        let request  = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${filiere}`)
        let result   = await request.json()
        let response = result["facet_groups"][0]["facets"]

        localStorage.setItem("fili." + filiere, JSON.stringify(response))

        return response
    }

    static async fetchSpecialites(filiere, specialite) {

        if (localStorage.getItem(`spe.${filiere}.${specialite}`)) return JSON.parse(localStorage.getItem(`spe.${filiere}.${specialite}`))

        let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fil_lib_voe_acc&refine.form_lib_voe_acc=${specialite}&refine.fili=${filiere}`)
        let result  = await request.json()
        let response = result["facet_groups"][0]["facets"]

        localStorage.setItem(`spe.${filiere}.${specialite}`, JSON.stringify(response))

        return response
    }

    static async fetchEtablissement(filiere, sousfiliere, soussousfiliere) {

        if (localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`)) return JSON.parse(localStorage.getItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`))

        let request = await fetch(`${PAPI.searchURL}&rows=10000&refine.fil_lib_voe_acc=${soussousfiliere}&refine.form_lib_voe_acc=${sousfiliere}&refine.fili=${filiere}`)
        let result  = await request.json()
        let response = result["records"]

        localStorage.setItem(`eta.${filiere}.${sousfiliere}.${soussousfiliere}`, JSON.stringify(response))

        return response
    }
}

export default PAPI