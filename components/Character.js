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

const currentLevelElement = document.querySelector("#current-lvl")
const currentExpElement = document.querySelector("#current-exp")

let characterStats = {
    range: 5,
    attackSpeed: 0.25,
    critChance: 5,
    lvl: 1,
    exp: 0,
    expToLvl: 100,
    expRemaining: 0,
}

// Render initial states
currentLevelElement.textContent = characterStats.lvl;
updateExpElement();

function updateExpElement() {
    currentExpElement.style.width = Number((characterStats.exp / characterStats.expToLvl) * 100) + "%";
}

function handleLevel() {
    new Audio("assets/sounds/lvlup.wav").play();

    let expRemaining = characterStats.exp - characterStats.expToLvl;

    characterStats.lvl++;
    characterStats.exp = 0;
    
    if(expRemaining >= characterStats.expToLvl) {
        handleExp(expRemaining)
    } else {
        characterStats.exp = expRemaining
    }

    // Update HTML
    currentLevelElement.textContent = characterStats.lvl
    updateExpElement();
}

function handleExp(exp) {
    characterStats.exp += exp;
    updateExpElement();
    if (characterStats.exp >= characterStats.expToLvl) {
        handleLevel();
    }
}
