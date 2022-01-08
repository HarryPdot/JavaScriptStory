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
    attackSpeed: 0.25,
    critChance: 5,
    // Level
    level: 1,
    experience: 0,
    totalLevelExperience: 50,
    expRemainder: 0,
}
// Level up
// range gain
// exp gain




// Progress bar
currentLevel.textContent = stats.level
currentProgress.style.width = Number((stats.experience / stats.totalLevelExperience) * 100) + "%"

// Define the new element
window.customElements.define('ms-character', Character)

// @todo: Fix experience bar
// parameter exp - defines where the exp will be coming from. Will be easier to add new ways to gain exp for example - quests.
function handleExp(exp) {
    // currentMobDetails.meta.exp gives you the exp of mob that just died
    stats.experience += exp
    handleProgressBar()
    // when level up, call handleLevel
    if (stats.experience >= stats.totalLevelExperience) {
        handleLevel()
    }
}

function handleLevel() {
    let expRemainder = stats.experience - stats.totalLevelExperience
    stats.level += 1
    stats.experience = 0
    new Audio("assets/sounds/lvlup.wav").play()
    handleProgressBar()
    handleRemainderExp(expRemainder)
    handleStats()
    currentLevel.textContent = stats.level
}

function handleRemainderExp(expRemainder) {
    if(expRemainder >= stats.totalLevelExperience) {
        handleExp(expRemainder)
    } else {
        stats.experience = expRemainder
    }
}

function handleStats() {

}

function handleProgressBar() {
    currentProgress.style.width = Number((stats.experience / stats.totalLevelExperience) * 100) + "%"
}