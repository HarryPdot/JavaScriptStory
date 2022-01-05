var hpBar = document.querySelector(".health-bar")
// var characterOne = document.querySelector(".character-one")
// var characterTwo = document.querySelector(".character-two")
var bossImage = document.querySelector(".boss")
var mobImage = document.getElementById("mob")
var centerGrid = document.querySelector(".center-grid")
var mobNameText = document.querySelector(".mobNameText")
var currentProgress = document.querySelector("#current-progress")
var currentLevel = document.querySelector("#current-level")
var expGained = document.querySelector("#exp-gained")



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

currentProgress.style.width = Number((partyOne.characterOne.experience / partyOne.characterOne.totalLevelExperience) * 100) + "%"
currentLevel.textContent = partyOne.characterOne.level

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
let critChance;
let damageDealt = 0


// handle image components
var mob1 = '<ms-mob sprite="./assets/images/snail_stand.png" id="mob"/>'
var mob2 = '<ms-mob sprite="./assets/images/blue_snail_stand.png" id="mob"/>'
var mob3 = '<ms-mob sprite="./assets/images/red_snail_stand.png" id="mob"/>'
var mob4 = '<ms-mob sprite="./assets/images/mano_stand.png" id="mob"/>'
var damage0 = '<damage-line sprite="./assets/images/Damage-skins/normal-0.png" id="normal-0"/>'


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
    critChance = Math.floor(Math.random()*100)
    if(critChance <= 10){
        damageDealt = partyOne.characterOne.range * 2
        mobHp = mobHp - damageDealt
    } else {
        damageDealt = damageDealt = partyOne.characterOne.range
        mobHp = mobHp - damageDealt
    }
    resetDamageImage()
    handleDamageImage()
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
        handleMobExp()
    }
    counter ++
    currentMob()
    handleMobImages()
    hpBar.textContent = mobHp
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
      expGained.textContent = `+${mobs[0].experience} exp`
		} else if ( counter % 4 == 3) {
			partyOne.characterOne.experience += mobs[1].experience
            expGained.textContent = `+${mobs[1].experience} exp`
		} else if ( counter % 4 == 0) {
			partyOne.characterOne.experience += mobs[2].experience
            expGained.textContent = `+${mobs[2].experience} exp`
		} else if ( counter % 4 == 1) {
			partyOne.characterOne.experience += mobs[3].experience
            expGained.textContent = `+${mobs[3].experience} exp`
    }
    if(partyOne.characterOne.experience >= partyOne.characterOne.totalLevelExperience) {
        partyOne.characterOne.expRemainder = partyOne.characterOne.experience % partyOne.characterOne.totalLevelExperience
        handleLevelUp()
    }
    currentProgress.style.width = Number((partyOne.characterOne.experience / partyOne.characterOne.totalLevelExperience) * 100) + "%"
}

function handleLevelUp() {
    let i = partyOne.characterOne.level
    if(i <= 9) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.8)
        partyOne.characterOne.range += 5
    } else if(i <= 29) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.7)
        partyOne.characterOne.range += 7
    } else if(i <= 39) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.5)
        partyOne.characterOne.range += 10
    } else if(i <= 59) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.3)
        partyOne.characterOne.range += 15
    } else if(i <= 79) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.2)
        partyOne.characterOne.range += 20
    } else if(i <= 89) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.2)
        partyOne.characterOne.range += 30
    } else if(i <= 99) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.1)
        partyOne.characterOne.range += 40
    }
    partyOne.characterOne.level += 1
    currentLevel.textContent = partyOne.characterOne.level
    partyOne.characterOne.experience = partyOne.characterOne.expRemainder
    currentProgress.style.width = Number((partyOne.characterOne.experience / partyOne.characterOne.totalLevelExperience) * 100) + "%"
    partyOne.characterOne.expRemainder = 0

}

function handleMobExp() {
    for(i=0; i < mobs.length; i++){
        mobs[i].experience = Math.floor(mobs[i].experience * 1.2)
    }
}

var lines = 0
var linesArr = ""
let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0
let num5 = 0
let num6 = 0
function handleDamageImage() {
    lines = damageDealt
    linesArr = String(lines).split("")
    num1 = Number(linesArr[0])
    num2 = Number(linesArr[1])
    num3 = Number(linesArr[2])
    num4 = Number(linesArr[3])
    num5 = Number(linesArr[4])
    num6 = Number(linesArr[5])
    if(Number(linesArr[0]) === num1) {
        damage0 = `<damage-line sprite='./assets/images/Damage-skins/normal-${num1}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-1'))
    }
    if(Number(linesArr[1]) === num2) {
        damage0 = `<damage-line sprite='./assets/images/Damage-skins/normal-${num2}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-2'))
    }
    if(Number(linesArr[2]) === num3) {
        damage0 = `<damage-line sprite='./assets/images/Damage-skins/normal-${num3}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-3'))
    }
    if(Number(linesArr[3]) === num4) {
        damage0 = `<damage-line sprite='./assets/images/Damage-skins/normal-${num4}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-4'))
    }
    if(Number(linesArr[4]) === num5) {
        damage0 = `<damage-line sprite='./assets/images/Damage-skins/normal-${num5}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-5'))
    }
    if(Number(linesArr[5]) === num6) {
        damage0 = `<damage-line sprite='./assets/images/Damage-skins/normal-${num6}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-6'))
    }
}
removeDamage = ``
function resetDamageImage() {
    render(removeDamage, document.querySelector('.damage-line-1'))
    render(removeDamage, document.querySelector('.damage-line-2'))
    render(removeDamage, document.querySelector('.damage-line-3'))
    render(removeDamage, document.querySelector('.damage-line-4'))
    render(removeDamage, document.querySelector('.damage-line-5'))
    render(removeDamage, document.querySelector('.damage-line-6'))
}

setInterval(handleDamage, 300)
centerGrid.addEventListener("click", handleDamage);