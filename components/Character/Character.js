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

var currentLevel = document.querySelector("#current-level")
var currentProgress = document.querySelector("#current-progress")
var expGained = document.querySelector("#exp-gained")

let damageDealt = 0

let stats = {
    // Damage
    range: 5,
    attackSpeed: 1,
    critChance: 5,
    // Level
    level: 1,
    experience: 0,
    totalLevelExperience: 50,
    expRemainder: 0,
}

function handleExperience(){
    if (counter % 4 == 2) {
        stats.experience += mobs[0].experience
        expGained.textContent = `+${mobs[0].experience} exp`
		} else if ( counter % 4 == 3) {
			stats.experience += mobs[1].experience
            expGained.textContent = `+${mobs[1].experience} exp`
		} else if ( counter % 4 == 0) {
			stats.experience += mobs[2].experience
            expGained.textContent = `+${mobs[2].experience} exp`
		} else if ( counter % 4 == 1) {
			stats.experience += mobs[3].experience
            expGained.textContent = `+${mobs[3].experience} exp`
    }

    if(stats.experience >= stats.totalLevelExperience) {
        stats.expRemainder = stats.experience % stats.totalLevelExperience
        handleLevelUp()
    }

    currentProgress.style.width = Number((stats.experience / stats.totalLevelExperience) * 100) + "%"
}

function handleLevelUp() {
    let i = stats.level
    if(i <= 9) {
        stats.totalLevelExperience = Math.floor(stats.totalLevelExperience * 1.8)
        stats.range += 5
    } else if(i <= 29) {
        stats.totalLevelExperience = Math.floor(stats.totalLevelExperience * 1.7)
        stats.range += 7
    } else if(i <= 39) {
        stats.totalLevelExperience = Math.floor(stats.totalLevelExperience * 1.5)
        stats.range += 10
    } else if(i <= 59) {
        stats.totalLevelExperience = Math.floor(stats.totalLevelExperience * 1.3)
        stats.range += 15
    } else if(i <= 79) {
        stats.totalLevelExperience = Math.floor(stats.totalLevelExperience * 1.2)
        stats.range += 20
    } else if(i <= 89) {
        stats.totalLevelExperience = Math.floor(stats.totalLevelExperience * 1.2)
        stats.range += 30
    } else if(i <= 99) {
        stats.totalLevelExperience = Math.floor(stats.totalLevelExperience * 1.1)
        stats.range += 40
    }

    new Audio("../assets/sounds/lvlup.wav").play();
    stats.level += 1
    currentLevel.textContent = stats.level
    stats.experience = stats.expRemainder
    currentProgress.style.width = Number((stats.experience / stats.totalLevelExperience) * 100) + "%"
    stats.expRemainder = 0
}

currentLevel.textContent = stats.level
currentProgress.style.width = Number((stats.experience / stats.totalLevelExperience) * 100) + "%"

// Define the new element
window.customElements.define('ms-character', Character)