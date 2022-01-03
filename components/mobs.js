const mobTemplate = document.createElement("mobTemplate");

template.innerHTML = `
    <style>
        .mob {
            border: 5px solid blue;
        }
    </style>

    <div class="mob">
        <img/>
    </div>
`
class mob extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        shadow.appendChild(template.content.cloneNode(true));

        shadow.querySelector("img").src = this.getAttribute("sprite");
    }
}

window.customElements.define("ms-mob", mob)
