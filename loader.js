/*
    Charge tous les fichiers riot compilés.
*/

import SchoolInfo from './javascript/school-info.js'
import Search from './javascript/search.js'

riot.register("school-info", SchoolInfo)
riot.register("search", Search)

riot.mount("school-info")
riot.mount("search")