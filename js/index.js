import { Router } from "./router.js"


const router = new Router()
router.add("/logo", "/pages/logo.html")
router.add("/home", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()
  
// atualiza o conteudo da pagina quando você volta para a pagina anterior.
window.onpopstate = () => router.handle()
// colocando na window a function route
window.route = () => router.route()

