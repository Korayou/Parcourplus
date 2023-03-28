/*
    Charge tous les fichiers riot compilés.
*/

import SchoolInfo from './javascript/school-info.js'
import LineGraph from './javascript/line-graph.js'
import Search from './javascript/search.js'
import School from './javascript/school.js'

riot.register("school-info", SchoolInfo)
riot.register("line-graph", LineGraph)
riot.register("search", Search)
riot.register("school", School)

riot.mount("school-info")
riot.mount("line-graph")
riot.mount("search")
riot.mount("school")