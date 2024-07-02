import Abstractview from "./Abstractview.js";

export default class contact extends Abstractview {
    constructor(){
        super();
        this.setTitle('Contact')
    }

    async getHtml(){
        return `
        <div class="contactbox">
         <div class="title4">
          <div>
            <span class="t4">L</span><span class="t4">e</span><span class="t4">t</span><span class="t4">'</span><span class="t4">s</span>
          </div>
          <div>
            <span class="t4">M</span><span class="t4">a</span><span class="t4">k</span><span class="t4">e</span>
          </div>
          <div class="shr">
            <span class="t4">S</span><span class="t4">o</span><span class="t4">m</span><span class="t4">e</span><span class="t4">t</span><span class="t4">h</span><span class="t4">i</span><span class="t4">n</span><span class="t4">g</span>
          </div>
        
      </div>
      <div class="des">
      <p >I am looking for people, organisations and startups to work with, to try new things and create some exciting stuff along with earning experience . Creating something is a very exciting thing if you ask me that is why I am currently looking for people to work with. Here are my contact info.</p>
      </div>
      <div class="emailbox">
      <p class="email">rohit19003@gmail.com</p>
      <span class="copy" title="add to clipboard">copy</span>
      </div>
      <div class="links">
      <a href="https://www.facebook.com/vicky.ky.739978" target="_blank" class="link facebook"><i class="fa-brands fa-facebook"></i></a>
      <a href="https://www.instagram.com/rb1542044/" target="_blank" class="link insta"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/rohit-bal-8a352b236/" target="_blank ln" class="link"><i class="fa-brands fa-linkedin"></i></a>
      <a href="https://github.com/some-coder-whowantstocode" target="_blank ln" class="link github" ><i class="fa-brands fa-github"></i></a>
      </div>
      </div>
        `
    }

    async eventlistioners(){
        const email = document.querySelector('.email');
        const copy = document.querySelector('.copy');
        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(email.innerHTML)
            .then(()=>{
                const div = document.createElement('div');
                div.innerHTML = "copied to clipboard";
                div.classList.add('success');
                document.body.appendChild(div);
                setTimeout(() => {
                    document.body.removeChild(div)
                }, 2000);
            })
        });
    }
}
