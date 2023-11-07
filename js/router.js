export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  //esta conferindo se tem o evento, caso não tiver pegue o evento do window
  route(event) {
    event = event || window.event
    event.preventDefault()
    //está pegando o historico empurrando o estado
    window.history.pushState({}, "", event.target.href)
    console.log(event.target)
    this.handle()
  }

  handle() {
    //desestruturando o objeto para tornar menos verboso o codigo
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes["/logo"]
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })

    if(pathname == "/home") { 
      document.body.style.backgroundImage = "url(../assets/mountains-universe-home.png)"
    } else if (pathname == "/universe") {
      document.body.style.backgroundImage = "url(../assets/mountains-universe-universe.png)"
    } else if (pathname == "/exploration") {
      document.body.style.backgroundImage = "url(../assets/mountains-universe-exploration.png)"
    } else {
      document.body.style.backgroundImage = "url(../assets/mountains-universe-logo.png)"
    }

    
  }
}