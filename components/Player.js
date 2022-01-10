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

const lvlElement = document.querySelector("#lvl")
const currentExpElement = document.querySelector("#current-exp")

let playerStats = {
    minRange: 5,
    maxRange: 8,
    attackSpeed: 0.25,
    critChance: 5,
    lvl: 1,
    exp: 0,
    expToLvl: 100,
    expRemaining: 0,
}

// Render initial states
lvlElement.textContent = `Lv. ${playerStats.lvl}`;
updateExpElement();

function updateExpElement() {
    currentExpElement.style.transform = `translateY(0) rotate(${90 - ((playerStats.exp/playerStats.expToLvl) * 90)}deg)`;
}

function handleLevel() {
    playSound("assets/sounds/lvlup.wav")

    let expRemaining = playerStats.exp - playerStats.expToLvl;

    playerStats.lvl++;
    playerStats.exp = 0;
    
    if(expRemaining >= playerStats.expToLvl) {
        handleExp(expRemaining)
    } else {
        playerStats.exp = expRemaining
    }

    // Update HTML
    lvlElement.textContent = `Lv. ${playerStats.lvl}`
    updateExpElement();
}

function handleExp(exp) {
    playerStats.exp += exp;
    updateExpElement();
    if (playerStats.exp >= playerStats.expToLvl) {
        handleLevel();
    }
}
