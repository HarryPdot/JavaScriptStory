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
// Custom modifiers for balancing
const customExpRate = 10;
const customAtkRate = 1.05;

let playerStats = {
    job: 'beginner',
    minRange: 5,
    maxRange: 8,
    attackSpeed: 0.25,
    critChance: 5,
    lvl: 1,
    exp: 0,
    expRate: 1,
    expToLvl: 15,
    expRemaining: 0,
    dropRate: 1,
    equips: {
        weapon: '',
        helmet: ''
    },
    inventory: []
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

    playerStats.minRange *= customAtkRate;
    playerStats.maxRange *= customAtkRate;

    playerStats.lvl++;
    playerStats.exp = 0;
    playerStats.expToLvl = getExpRequired(playerStats.lvl);

    if(expRemaining >= playerStats.expToLvl) {
        handleRemainingExp(expRemaining)
    } else {
        playerStats.exp = expRemaining
    }

    // Update HTML
    lvlElement.textContent = `Lv. ${playerStats.lvl}`
    updateExpElement();
}

function handleExp(exp) {
    const expGain = Math.floor(exp * playerStats.expRate * customExpRate);
    playerStats.exp += expGain;
    updateGainsLog(`EXP (+${expGain})`)
    updateExpElement();
    if (playerStats.exp >= playerStats.expToLvl) {
        handleLevel();
    }
}

function handleRemainingExp(exp) {
    playerStats.exp += Math.floor(exp);
    updateExpElement();
    if (playerStats.exp >= playerStats.expToLvl) {
        handleLevel();
    }
}

// See: https://strategywiki.org/wiki/MapleStory/EXP_and_Pet_Closeness#EXP_Chart_History
function getExpRequired(currentLvl) {
    if(currentLvl === 2) return Math.floor(playerStats.expToLvl * 2.2667)
    if(currentLvl === 3) return Math.floor(playerStats.expToLvl * 1.6765)
    if(currentLvl === 4) return Math.floor(playerStats.expToLvl * 1.6140)
    if(currentLvl === 5) return Math.floor(playerStats.expToLvl * 1.4674)
    if(currentLvl === 6) return Math.floor(playerStats.expToLvl * 2.7556)
    if(currentLvl === 7) return Math.floor(playerStats.expToLvl * 1.5054)
    if(currentLvl === 8) return Math.floor(playerStats.expToLvl * 1.5)
    if(currentLvl === 9) return Math.floor(playerStats.expToLvl * 1.4786)
    if(currentLvl >= 10 && currentLvl <= 14) return Math.floor(playerStats.expToLvl * 1)
    if(currentLvl >= 15 && currentLvl <= 29) return Math.floor(playerStats.expToLvl * 1.2)
    if(currentLvl >= 30 && currentLvl <= 34) return Math.floor(playerStats.expToLvl * 1)
    if(currentLvl >= 34 && currentLvl <= 39) return Math.floor(playerStats.expToLvl * 1.2)
    if(currentLvl >= 40 && currentLvl <= 59) return Math.floor(playerStats.expToLvl * 1.08)
    if(currentLvl >= 60 && currentLvl <= 64) return Math.floor(playerStats.expToLvl * 1)
    if(currentLvl >= 65 && currentLvl <= 74) return Math.floor(playerStats.expToLvl * 1.075)
    if(currentLvl >= 75 && currentLvl <= 89) return Math.floor(playerStats.expToLvl * 1.07)
    if(currentLvl >= 90 && currentLvl <= 99) return Math.floor(playerStats.expToLvl * 1.065)
    if(currentLvl >= 100 && currentLvl <= 104) return Math.floor(playerStats.expToLvl * 1)
    if(currentLvl >= 105 && currentLvl <= 139) return Math.floor(playerStats.expToLvl * 1.065)
    if(currentLvl >= 140 && currentLvl <= 169) return Math.floor(playerStats.expToLvl * 1.0625)
    if(currentLvl >= 170 && currentLvl <= 199) return Math.floor(playerStats.expToLvl * 1.05)
    if(currentLvl >= 200) return Math.floor(playerStats.expToLvl * 3.8644)
}