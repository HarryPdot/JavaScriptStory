template.innerHTML = `
    <style>
        .mob {
        }

        img {
            display: block;
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


var render = function (template, node) {
    node.innerHTML = template;
};

var mob1 = '<ms-mob sprite="./assets/images/snail_stand.png" id="mob"/>'
var mob2 = '<ms-mob sprite="./assets/images/blue_snail_stand.png" id="mob"/>'
var mob3 = '<ms-mob sprite="./assets/images/red_snail_stand.png" id="mob"/>'
var mob4 = '<ms-mob sprite="./assets/images/mano_stand.png" id="mob"/>'

counter = 1
if(counter % 4 == 1){
    render(mob1, document.querySelector('.mob-grid'))
} else if (counter % 4 == 2) {
    render(mob2, document.querySelector('.mob-grid'))
} else if (counter % 4 == 3) {
    render(mob3, document.querySelector('.mob-grid'))
} else if (counter % 4 == 0) {
    render(mob4, document.querySelector('.mob-grid'))
}