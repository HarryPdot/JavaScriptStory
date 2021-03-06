template.innerHTML = `
    <style>
        .mob {
        }

        img {
            display: block;
        }
    </style>

    <div class="mob">
        <img draggable="false"/>
    </div>
`
class MobComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));
        shadow.querySelector("img").src = this.getAttribute("sprite");
    }
}

window.customElements.define("ms-mob", MobComponent)
