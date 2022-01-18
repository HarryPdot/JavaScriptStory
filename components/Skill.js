const skillArray = document.querySelectorAll('.ms-skills')
const skillTemplate = document.createElement('template')
skillTemplate.innerHTML = `
    <style>
    img {
        cursor: pointer;
    }
    </style>
    <img draggable="false" class="skill-icons"/>
`
class Skill extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(skillTemplate.content.cloneNode(true));
        document.querySelector('ms-skill').shadowRoot.querySelector("img").src = this.getAttribute('skill')

    }
}

window.customElements.define('ms-skill', Skill)

class Skill1 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(skillTemplate.content.cloneNode(true));
        document.querySelector('ms-skill1').shadowRoot.querySelector("img").src = this.getAttribute('skill')
    }
}

window.customElements.define('ms-skill1', Skill1)

class Skill2 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(skillTemplate.content.cloneNode(true));
        document.querySelector('ms-skill2').shadowRoot.querySelector("img").src = this.getAttribute('skill')
    }
}

window.customElements.define('ms-skill2', Skill2)