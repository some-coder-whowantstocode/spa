import Abstractview from "./Abstractview.js";

export default class extends Abstractview {
    constructor() {
        super();
        this.setTitle('Home');
    }

    async getHtml(){
        return `
       <div class="home">
       <div class="titlebox"><p class="hometitle" >Hi,I am Rohit Bal.</p></div>
       <div class="homedes"><p>As a full stack developer, I am currently seeking new opportunities to apply my expertise in web development. With experience in both front-end and back-end technologies, I am well-equipped to take on challenging projects and deliver high-quality results. I am eager to join a dynamic team where I can contribute my skills and continue to grow as a developer.</p></div>
       </div>
        `
    }
}