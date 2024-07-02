import Abstractview from "./Abstractview.js";

export default class guide extends Abstractview{
    constructor(){
        super();
        this.setTitle('Guide')
    }

    async getHtml(){
        return `
        <div class="guidepage">



        <h1 class="guidetitle">Guide</h1>
        <div>
        <div class="hom">Home</div>
        <p>This page contains introduction about me.</p>
        <div class="hom">Contact</div>
        <p>This page contains my contact information my email id,all of the social media handles links the social media can be accesed by clicking on the icons.Donot forget to hover over headline in this page.</p>
        <div class="hom">Information</div>
        <p>This page contains introduction about me.My skills and some of my best projects those projects can be accessed by clicking on those project names.</p>
        </div>
        

        <div class="time">
        <div>Project started at - 30june 8am</div>
        <div>Project ended at - 1july 1pm</div>

        </div>
        </div>
        `
    }
}