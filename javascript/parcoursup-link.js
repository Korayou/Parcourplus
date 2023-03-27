/*
    Parcoursup API (PAPI)
    Comprend un set de wrapper afin d'accéder plus aisément aux informations de l'API parcoursup
*/

class PAPI {
    
    static dataset   = "fr-esr-parcoursup"
    static timezone  = "Europe%2FBerlin"
    static searchURL = `https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=${PAPI.dataset}&timezone=${PAPI.timezone}`

    static async fetchFilieres() {
        let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=fili`)
        let result  = await request.json()

        return result["facet_groups"][0]["facets"]
    }

    static async fetchFiliere(filiere) {
        let request = await fetch(`${PAPI.searchURL}&rows=0&sort=tri&facet=form_lib_voe_acc&refine.fili=${filiere}`)
        let result  = await request.json()

        return result["facet_groups"][0]["facets"]
    }
}

export default PAPI