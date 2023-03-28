/*
    Charge tous les fichiers riot compilés.
*/

import MainController from './javascript/main-controller.js'
import SchoolInfo from './javascript/school-info.js'
import LineGraph from './javascript/line-graph.js'
import FiliInfo from './javascript/fili-info.js'
import Search from './javascript/search.js'
import School from './javascript/school.js'

riot.register("main-controller", MainController)
riot.register("school-info", SchoolInfo)
riot.register("line-graph", LineGraph)
riot.register("fili-info", FiliInfo)
riot.register("search", Search)
riot.register("school", School)

riot.mount("main-controller")
riot.mount("school-info")
riot.mount("line-graph")
riot.mount("fili-info")
riot.mount("search")
riot.mount("school")