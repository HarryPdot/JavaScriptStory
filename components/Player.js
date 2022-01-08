template.innerHTML = `
    <style>
        .player {
        }

        img {
            display: block;
        }
    </style>

    <div class="player">
        <img/>
    </div>
`

// Create a class for the element
class Player extends HTMLElement {
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
window.customElements.define('ms-player', Player)

const currentLevelElement = document.querySelector("#current-lvl")
const currentExpElement = document.querySelector("#current-exp")

let playerStats = {
    range: 5,
    attackSpeed: 0.25,
    critChance: 5,
    lvl: 1,
    exp: 0,
    expToLvl: 100,
    expRemaining: 0,
}

// Render initial states
currentLevelElement.textContent = playerStats.lvl;
updateExpElement();

function updateExpElement() {
    currentExpElement.style.width = Number((playerStats.exp / playerStats.expToLvl) * 100) + "%";
}

function handleLevel() {
    new Audio("assets/sounds/lvlup.wav").play();

    let expRemaining = playerStats.exp - playerStats.expToLvl;

    playerStats.lvl++;
    playerStats.exp = 0;
    
    if(expRemaining >= playerStats.expToLvl) {
        handleExp(expRemaining)
    } else {
        playerStats.exp = expRemaining
    }

    // Update HTML
    currentLevelElement.textContent = playerStats.lvl
    updateExpElement();
}

function handleExp(exp) {
    playerStats.exp += exp;
    updateExpElement();
    if (playerStats.exp >= playerStats.expToLvl) {
        handleLevel();
    }
}
