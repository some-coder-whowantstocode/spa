import dashboard from "./views/dashboard.js";
import contact from "./views/contact.js";
import information from "./views/information.js";
import guide from "./views/guide.js";

// Router for the page for navigation from one component to another on click

const router = async()=>{
    const routes = [
        {path:'/',view:dashboard},
        {path:'/contact',view:contact},
        {path:'/information',view:information},
        {path:'/guide',view:guide}
    ];

    const potentialmatches = routes.map(route=>{
        return {
            route:route,
            ismatch:route.path === location.pathname
        };
    })

    let match = potentialmatches.find(potentialMatch => potentialMatch.ismatch);
    if(!match){
        match = {
            route:routes[0],
            ismatch:true
        }
    }


    const view = new match.route.view();

    
    document.querySelector('#app').innerHTML = await view.getHtml();
    if(typeof view.eventlistioners === "function"){
        view.eventlistioners()
     }
     
     if(typeof view.progressbar === "function"){
        view.progressbar()
     }
  
}

// Add active class to the page user currently in

const links = Array.from(document.querySelectorAll('.navlink'));

links.forEach((link)=>{
    link.addEventListener('click',function(){
        links.forEach((e)=>{
            e.classList.remove('active')
        })
        link.classList.add('active')
    })
})

// onreload goes to home page

window.addEventListener('load',()=>{
    navigateTo('/')
    router()
})

// when using back or next key of browser it reloads the page user navigate to 
window.addEventListener('popstate',router);


// Takes user to the page user clicked on


const navigateTo = url => {
    history.pushState(null,null,url);
    router();
}


document.addEventListener('DOMContentLoaded',()=>{
    document.body.addEventListener('click',e=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})



// for navbar control
const nav = document.querySelector('.nav');
const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    nav.classList.toggle('visible')
})