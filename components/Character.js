template.innerHTML = `
    <style>
        .character {
        }

        img {
            display: block;
        }
    </style>

    <div class="character">
        <img/>
    </div>
`

// Create a class for the element
class Character extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});

        // Attach the created template element to the shadow dom
        shadow.appendChild(template.content.cloneNode(true));

        // Props
        shadow.querySelector('img').src = this.getAttribute('sprite');   
    }
}

// Define the new element
window.customElements.define('ms-character', Character)