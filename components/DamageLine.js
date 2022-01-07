template.innerHTML = `
    <style>
        .damage {
        }

        img {
            display: block;

        }
    </style>

    <div class="damage">
        <img/>
    </div>
`
class DamageLine extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));
        shadow.querySelector("img").src = this.getAttribute("sprite");
    }
}

window.customElements.define("damage-line", DamageLine)


// var damage0 = '<damage-line sprite="./assets/images/damageSkin/normal-0.png" id="normal-0"/>'
// var damage1 = '<damage-line sprite="./assets/images/damageSkin/normal-1.png" id="normal-0"/>'
// var damage2 = '<damage-line sprite="./assets/images/damageSkin/normal-2.png" id="normal-0"/>'
// var damage3 = '<damage-line sprite="./assets/images/damageSkin/normal-3.png" id="normal-0"/>'
// var damage4 = '<damage-line sprite="./assets/images/damageSkin/normal-4.png" id="normal-0"/>'
// var damage5 = '<damage-line sprite="./assets/images/damageSkin/normal-5.png" id="normal-0"/>'
// var damage6 = '<damage-line sprite="./assets/images/damageSkin/normal-6.png" id="normal-0"/>'
// var damage7 = '<damage-line sprite="./assets/images/damageSkin/normal-7.png" id="normal-0"/>'
// var damage8 = '<damage-line sprite="./assets/images/damageSkin/normal-8.png" id="normal-0"/>'
// var damage9 = '<damage-line sprite="./assets/images/damageSkin/normal-9.png" id="normal-0"/>'

// render(damage0, document.querySelector('.damage-skin'))
// render(damage1, document.querySelector('.damage-skin'))
// render(damage2, document.querySelector('.damage-skin'))
// render(damage3, document.querySelector('.damage-skin'))
// render(damage4, document.querySelector('.damage-skin'))
// render(damage5, document.querySelector('.damage-skin'))
// render(damage6, document.querySelector('.damage-skin'))
// render(damage7, document.querySelector('.damage-skin'))
// render(damage8, document.querySelector('.damage-skin'))
// render(damage9, document.querySelector('.damage-skin'))
