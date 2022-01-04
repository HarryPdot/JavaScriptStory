var hpBar = document.querySelector(".health-bar")
// var characterOne = document.querySelector(".character-one")
// var characterTwo = document.querySelector(".character-two")
var bossImage = document.querySelector(".boss")
var mobImage = document.getElementById("mob")
var centerGrid = document.querySelector(".center-grid")
var mobNameText = document.querySelector(".mobNameText")
var currentExperience = document.querySelector(".experience")
var totalExperience = document.querySelector(".total-experience")

// character stats
let partyOne = {
    characterOne: {
        level: 1,
        range: 5,
        experience: 0,
        totalLevelExperience: 50,
        expRemainder: 0
    }
}

let partyTwo = {
    characterOne: {
        level: 1,
        range: 5,
        experience: 0,
        totalLevelExperience: 50,
        expRemainder: 0
    }
}


// current mob
let mobOrder = ["mob1", "mob2", "mob3", "boss"]
let mobs = [
        mob1= {
            name: "snail",
            hp: 30,
            experience: 5
        },
        mob2= {
            name: "blue snail",
            hp: 80,
            experience: 10

        },
        mob3= {
            name: "red snail",
            hp: 150,
            experience: 20
        },
        boss= {
            name: "mano",
            hp: 400,
            experience: 50
        }
]

let counter = 1
let mobHp = ""
let waveLevel = 1
currentExperience.textContent = partyOne.characterOne.experience
totalExperience.textContent = partyOne.characterOne.totalLevelExperience

// handleMobImages
var mob1 = '<ms-mob sprite="./assets/images/snail_stand.png" id="mob"/>'
var mob2 = '<ms-mob sprite="./assets/images/blue_snail_stand.png" id="mob"/>'
var mob3 = '<ms-mob sprite="./assets/images/red_snail_stand.png" id="mob"/>'
var mob4 = '<ms-mob sprite="./assets/images/mano_stand.png" id="mob"/>'

var render = function (template, node) {
    node.innerHTML = template;
};
function currentMob() {
    if (counter % 4 == 1) {
        mobNameText.textContent = mobs[0].name
        mobHp = Number(mobs[0].hp * waveLevel)
    } else if ( counter % 4 == 2) {
        mobNameText.textContent = mobs[1].name
        mobHp = Number(mobs[1].hp * waveLevel)
    } else if ( counter % 4 == 3) {
        mobNameText.textContent = mobs[2].name
        mobHp = Number(mobs[2].hp * waveLevel)
    } else if ( counter % 4 == 0) {
        mobNameText.textContent = mobs[3].name
        mobHp = Number(mobs[3].hp * waveLevel)
    }
}
handleMobImages()
currentMob()

// current mob hp bar
let mobHpText = mobHp
hpBar.textContent = Number(mobHp * waveLevel)

//handles the damage to the mob
function handleDamage() {
    mobHp = mobHp - (partyOne.characterOne.range + partyTwo.characterOne.range)
    hpBar.textContent = mobHp

    if (mobHp <= 0) {
        handleNewMob()
        handleExperience()
    }
}

// new boss when current defeated
function handleNewMob() {
    if(counter % 4 == 0){
        waveLevel = waveLevel + 1
        console.log("waveLevel", waveLevel)
    }
    counter ++
    currentMob()
    handleMobImages()
    hpBar.textContent = mobHp
    console.log("counter", counter)
}

// new mob appears
function handleMobImages() {
    if(counter % 4 == 1){
        render(mob1, document.querySelector('.mob-grid'))
    } else if (counter % 4 == 2) {
        render(mob2, document.querySelector('.mob-grid'))
    } else if (counter % 4 == 3) {
        render(mob3, document.querySelector('.mob-grid'))
    } else if (counter % 4 == 0) {
        render(mob4, document.querySelector('.mob-grid'))
    }
}

// handle character level experience
function handleExperience(){

    if (counter % 4 == 2) {
      partyOne.characterOne.experience += mobs[0].experience
		} else if ( counter % 4 == 3) {
			partyOne.characterOne.experience += mobs[1].experience
		} else if ( counter % 4 == 0) {
			partyOne.characterOne.experience += mobs[2].experience
		} else if ( counter % 4 == 1) {
			partyOne.characterOne.experience += mobs[3].experience
    }
    console.log("character exp", partyOne.characterOne.experience)
    if(partyOne.characterOne.experience >= partyOne.characterOne.totalLevelExperience) {
        console.log("level up")
        handleLevelUp()
        partyOne.characterOne.experience = partyOne.characterOne.experience % partyOne.characterOne.totalLevelExperience
        console.log("character exp", partyOne.characterOne.experience)
    }
    currentExperience.textContent = partyOne.characterOne.experience
    totalExperience.textContent = partyOne.characterOne.totalLevelExperience
}

function handleLevelUp() {
    let i = partyOne.characterOne.level
    if(i <= 9) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.8)
        partyOne.characterOne.range += 5
    } else if(i <= 29) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.7)
    } else if(i <= 39) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.5)
    } else if(i <= 59) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.3)
    } else if(i <= 79) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.2)
    } else if(i <= 89) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.2)
    } else if(i <= 99) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.1)
    }
    console.log("playerOneTotalExp", partyOne.characterOne.totalLevelExperience)
    partyOne.characterOne.level += 1
    console.log("level", partyOne.characterOne.level)

}

setInterval(handleDamage, 500)
centerGrid.addEventListener("click", handleDamage);