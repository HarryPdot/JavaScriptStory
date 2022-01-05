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


// handle image components
var mob1 = '<ms-mob sprite="./assets/images/snail_stand.png" id="mob"/>'
var mob2 = '<ms-mob sprite="./assets/images/blue_snail_stand.png" id="mob"/>'
var mob3 = '<ms-mob sprite="./assets/images/red_snail_stand.png" id="mob"/>'
var mob4 = '<ms-mob sprite="./assets/images/mano_stand.png" id="mob"/>'
var damage0 = '<damage-line sprite="./assets/images/Damage-skins/normal-0.png" id="normal-0"/>'
var damage1 = '<damage-line sprite="./assets/images/Damage-skins/normal-1.png" id="normal-1"/>'
var damage2 = '<damage-line sprite="./assets/images/Damage-skins/normal-2.png" id="normal-2"/>'
var damage3 = '<damage-line sprite="./assets/images/Damage-skins/normal-3.png" id="normal-3"/>'
var damage4 = '<damage-line sprite="./assets/images/Damage-skins/normal-4.png" id="normal-4"/>'
var damage5 = '<damage-line sprite="./assets/images/Damage-skins/normal-5.png" id="normal-5"/>'
var damage6 = '<damage-line sprite="./assets/images/Damage-skins/normal-6.png" id="normal-6"/>'
var damage7 = '<damage-line sprite="./assets/images/Damage-skins/normal-7.png" id="normal-7"/>'
var damage8 = '<damage-line sprite="./assets/images/Damage-skins/normal-8.png" id="normal-8"/>'
var damage9 = '<damage-line sprite="./assets/images/Damage-skins/normal-9.png" id="normal-9"/>'


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
        partyOne.characterOne.range += 11
    } else if(i <= 29) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.7)
        partyOne.characterOne.range += 50
    } else if(i <= 39) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.5)
        partyOne.characterOne.range += 150
    } else if(i <= 59) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.3)
        partyOne.characterOne.range += 300
    } else if(i <= 79) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.2)
        partyOne.characterOne.range += 750
    } else if(i <= 89) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.2)
        partyOne.characterOne.range += 1100
    } else if(i <= 99) {
        partyOne.characterOne.totalLevelExperience = Math.floor(partyOne.characterOne.totalLevelExperience * 1.1)
        partyOne.characterOne.range += 2000
    }
    partyOne.characterOne.level += 1
    currentLevel.textContent = partyOne.characterOne.level
    partyOne.characterOne.experience = partyOne.characterOne.expRemainder
    currentProgress.style.width = Number((partyOne.characterOne.experience / partyOne.characterOne.totalLevelExperience) * 100) + "%"
    partyOne.characterOne.expRemainder = 0

}

function handleMobExp() {
    for(i=0; i < mobs.length; i++){
        mobs[i].experience = Math.floor(mobs[i].experience * 1.5)
    }
}
var lines = 0
var linesArr = ""
function handleDamageImage() {
    console.log("yes")
    lines = partyOne.characterOne.range
    console.log(lines)
    linesArr = String(lines).split("")
    console.log(linesArr)
    console.log(Number(linesArr[0]))
    for(var i=0; i < linesArr.length; i++){
        if(Number(linesArr[0]) === 0) {
            render(damage0, document.querySelector('.damage-line-1'))
            console.log("0")
        } else if(Number(linesArr[0]) === 1) {
            render(damage1, document.querySelector('.damage-line-1'))
            console.log("1")
        } else if(Number(linesArr[0]) === 2) {
            render(damage2, document.querySelector('.damage-line-1'))
            console.log("2")
        } else if(Number(linesArr[0]) === 3) {
            render(damage3, document.querySelector('.damage-line-1'))
            console.log("3")
        } else if(Number(linesArr[0]) === 4) {
            render(damage4, document.querySelector('.damage-line-1'))
            console.log("4")
        } else if(Number(linesArr[0]) === 5) {
            render(damage5, document.querySelector('.damage-line-1'))
            console.log("5")
        } else if(Number(linesArr[0]) === 6) {
            render(damage6, document.querySelector('.damage-line-1'))
            console.log("6")
        } else if(Number(linesArr[0]) === 7) {
            render(damage7, document.querySelector('.damage-line-1'))
            console.log("7")
        } else if(Number(linesArr[0]) === 8) {
            render(damage8, document.querySelector('.damage-line-1'))
            console.log("8")
        } else if(Number(linesArr[0]) === 9) {
            render(damage9, document.querySelector('.damage-line-1'))
            console.log("9")
        }      
    }
}

// setInterval(handleDamage, 500)
centerGrid.addEventListener("click", handleDamage);