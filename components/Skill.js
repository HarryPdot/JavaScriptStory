const skillArray = document.querySelectorAll('.ms-skills')
const skillTemplate = document.createElement('template')
skillTemplate.innerHTML = `
    <style>
    img {
        cursor: pointer;
    }
    </style>
    <img draggable="false"/>
`
class Skill extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(skillTemplate.content.cloneNode(true));
        shadow.querySelector("img").src = this.getAttribute('skillSrc')
    }
}

window.customElements.define("ms-skill", Skill)