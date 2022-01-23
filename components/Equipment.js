template.innerHTML = `
    <style>

    </style>

    <img draggable= "false"/>

`
class EquipComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));
        shadow.querySelector('img').src = this.getAttribute('equipSrc')
    }
}

window.customElements.define('ms-equip', EquipComponent)

let testing = document.querySelector("#inventory-modal").shadowRoot.querySelector(".equip1")

// testing.parentNode.removeChild(testing)