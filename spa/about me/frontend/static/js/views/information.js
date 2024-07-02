import Abstractview from "./Abstractview.js";

export default class information extends Abstractview{
    constructor(){
        super();
        this.setTitle('Information')
    }

    async getHtml(){
        return `
        <div class="infopage">
         <div class="about">About me</div>
         <div>
          <p>
            I am Rohit Bal . A full stack,web developer, currently in search of opportunity of working with experienced people to have some taste of the field I am aspiring to join. I love to create new things and would love to work with peoples, organisations, teams, starts ups. Currently I am looking for people to work with as to hone my skills and experiencing new things as the field I am aspiring to join is vast and growing at an tremendous speed.
          </p>
         </div>
         <div class="skills">
         <pro-ress class="skill" name="HTML5" data-circle ></pro-ress>
         <pro-ress class="skill" name="css" data-circle ></pro-ress>
         <pro-ress class="skill" name="js" data-circle ></pro-ress>
         <pro-ress class="skill" name="Nodejs" data-circle ></pro-ress>
         <pro-ress class="skill" name="Reactjs" data-circle ></pro-ress>
         <pro-ress class="skill" name="Expressjs" data-circle ></pro-ress>
         <pro-ress class="skill" name="Bootstrap" data-circle ></pro-ress>
         <pro-ress class="skill" name="MongoDB" data-circle ></pro-ress>
         <pro-ress class="skill" name="Mongoose" data-circle ></pro-ress>
         <pro-ress class="skill" name="Git" data-circle ></pro-ress>

         </div>

         <div class="special">
         <p  class="specialtitle">Some of my best projects.</p>
         <a href="https://some-coder-whowantstocode.github.io/byapar/" target="_blank" class="byapar">Byapar</a>
         <p>A full stack e-commerce site with features.It has user register and login and many more.</p>
         <a href="https://some-coder-whowantstocode.github.io/tmdbclone/#/" target="_blank" class="tmdbclone" >tmdb</a>
         <p>A frontend app replica of tmdb with various of features.</p>
         </div>
        
        </div>
        `
    }

    progressbar(){

        const template = document.createElement('template');
template.innerHTML = `
<style>
.outer{
  
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -5px -4px 2px 0px rgba(183,168,168,0.75),
    5px -4px 3px 0px rgba(183,168,168,0.75),
    -4px 6px 3px 0px rgba(183,168,168,0.75),
   5px 5px 3px 0px rgba(183,168,168,0.75);
}
.inner{
    background-color: white;
    height: 76px;
    width: 76px;
    border-radius: 50%;
    box-shadow:2px 1px 4px 0px rgba(58, 57, 57, 0.75) inset, inset 2px -3px 4px 0px rgba(183,168,168,0.75), inset -5px 1px 5px 0px rgba(183,168,168,0.75), inset 5px 5px 5px 0px rgba(183,168,168,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
}
.number{
    font-size: 0.7rem;
    font-weight: 700;
}
circle{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 6px;
    stroke-dasharray: calc(120);
}
svg{
    position: absolute;
    top: -10.1px;
    left: -30px;
    transform: scale(2);
}
</style>
<div class="progress">
<div class="outer">
 <div class="inner">
     <div class="number">100%</div>
 </div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
 <defs>
    <linearGradient id="GradientColor">
       <stop offset="0%" stop-color="#e91e63" />
       <stop offset="100%" stop-color="#673ab7" />
    </linearGradient>
 </defs>
 <circle class="circle" cx="80" cy="70" r="22"  stroke-linecap="round" />
</svg>
</div>
</div>
`
        class progress extends HTMLElement {
            constructor(){
                super();
                this.attachShadow({mode:'open'});
                this.shadowRoot.appendChild(template.content.cloneNode(true));
                this.shadowRoot.querySelector('.number').innerText = this.getAttribute('name');
                
            }
        }
        if (!customElements.get('pro-ress')) {
            customElements.define('pro-ress', progress);
        }
        
    }
}


// 137/100*perc