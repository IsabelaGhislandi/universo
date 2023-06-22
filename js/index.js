import { Router } from './routes.js'


const router = new Router()
router.add("/logo", "/pages/home.html")
router.add("/", "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const menu = document.querySelector("#hamburger")
const allNav = document.querySelectorAll(".allNav")
const menuSVG = document.querySelector("span > svg path")

let active = true

const universe = document.querySelector("#universo")

const exploration = document.querySelector("#exploracao")

universe.addEventListener("click", function() {
    router.route()
    document.querySelector("body").classList.add("universe")
    document.querySelector("body").classList.remove("exploration")
    universe.classList.add("bold")
    exploration.classList.remove("bold")
})


exploration.addEventListener("click", function() {
    router.route()
    document.querySelector("body").classList.add("exploration")
    document.querySelector("body").classList.remove("universe")
    exploration.classList.add("bold")
    universe.classList.remove("bold")
})




menu.addEventListener("click", function() {
    menuSVG.classList.add('clicked');
    
    setTimeout(function() {
       menuSVG.classList.remove('clicked');
      }, 1000);

    if (active) {
        showMenu()
      
        active = false
     
    } else {
        hideMenu()
      
        active = true
    }
   
})

function showMenu() {
    
    menuSVG.setAttribute('d', 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' )
    
    allNav.forEach(element => {
        element.style.opacity= "1";
        element.style.display = "flex";
       
    });
}

function hideMenu() {
    menuSVG.setAttribute('d', 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' )
   
    allNav.forEach(element => {
        element.style.opacity= "0";
        element.style.display = "none";
        
    });
}

