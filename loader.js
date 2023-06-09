/*
    Charge tous les fichiers riot compilés.
*/

import MainController from './javascript/main-controller.js'
import TitleProgress from './javascript/title-progress.js'
import SchoolInfo from './javascript/school-info.js'
import LineGraph from './javascript/line-graph.js'
import FiliInfo from './javascript/fili-info.js'
import Search from './javascript/search.js'
import School from './javascript/school.js'

riot.register("main-controller", MainController)
riot.register("title-progress", TitleProgress)
riot.register("school-info", SchoolInfo)
riot.register("line-graph", LineGraph)
riot.register("fili-info", FiliInfo)
riot.register("search", Search)
riot.register("school", School)


riot.mount("title-progress")
riot.mount("line-graph")
riot.mount("search")
riot.mount("school-info")
riot.mount("fili-info")
riot.mount("school")
riot.mount("main-controller")