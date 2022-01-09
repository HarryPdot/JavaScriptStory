template.innerHTML = `
    <style>
        .mob {
        }

        img {
            display: block;
            -webkit-user-drag: none;
        }
    </style>

    <div class="mob">
        <img/>
    </div>
`
class Mob extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));
        shadow.querySelector("img").src = this.getAttribute("sprite");
    }
}

window.customElements.define("ms-mob", Mob)