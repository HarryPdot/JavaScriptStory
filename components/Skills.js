var render = function (template, node) {
    if (!node) return;
    node.innerHTML = (typeof template === 'function' ? template() : template);
};

template.innerHTML = `
    <style>
        .skill-grid {
            display:grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            position: absolute;
            right: 20px;
            bottom: 20px;
            gap: 10px;
        }

        img {
            border: 1px solid blue;
            cursor: pointer;
        }

    </style>
    <div class="skill-grid"> 
        <img id="skill-1">
        <img id="skill-2">
        <img id="skill-3">
        <img id="skill-4">
    </div>
`
class Skill extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('ms-skills', Skill)

const firstSkill = document.querySelector("ms-skills").shadowRoot.querySelector("#skill-1")
const secondSkill = document.querySelector("ms-skills").shadowRoot.querySelector("#skill-2")
const thirdSkill = document.querySelector("ms-skills").shadowRoot.querySelector("#skill-3")
const fourthSkill = document.querySelector("ms-skills").shadowRoot.querySelector("#skill-4")

//testing
firstSkill.src = playerSkills.beginner[0].image
secondSkill.src = './assets/images/skills/beginner-2.png'
