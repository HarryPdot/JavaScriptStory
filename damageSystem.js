var hpBar = document.querySelector(".health-bar")
// var characterOne = document.querySelector(".character-one")
// var characterTwo = document.querySelector(".character-two")
var bossImage = document.querySelector(".boss")
var mobImage = document.getElementById("mob")
var mobNameText = document.querySelector(".mobNameText")

// character stats
let partyOne = {
    characterOne: {
        level: 1,
        range: 5,
        experience: 0
    }
}
let partyTwo = {
    characterOne: {
        level: 1,
        range: 5,
        experience: 0
    }
}

// current mob
let mobOrder = ["mob1", "mob2", "mob3", "boss"]
let mobs = [
        mob1= {
            name: "mob1",
            hp: 30
        },
        mob2= {
            name: "mob2",
            hp: 80
        },
        mob3= {
            name: "mob3",
            hp: 150
        },
        boss= {
            name: "boss",
            hp: 400
        }
]

let counter = 1
let mobHp = ""
let waveLevel = 1

// handles current mob
function currentMob() {
    if (counter % 4 == 1) {
        mobNameText.textContent = "mob1"
        mobHp = Number(mobs[0].hp * waveLevel)
    } else if ( counter % 4 == 2) {
        mobNameText.textContent = "mob2"
        mobHp = Number(mobs[1].hp * waveLevel)
    } else if ( counter % 4 == 3) {
        mobNameText.textContent = "mob3"
        mobHp = Number(mobs[2].hp * waveLevel)
    } else if ( counter % 4 == 0) {
        mobNameText.textContent = "boss"
        mobHp = Number(mobs[3].hp * waveLevel)
    }
}

currentMob()

// current mob hp bar
let mobHpText = mobHp
// let bossHpText = bossHp

hpBar.textContent = Number(mobHp * waveLevel)

//handles the damage to the mob
function handleDamage() {
    mobHp = mobHp - (partyOne.characterOne.range + partyTwo.characterOne.range)
    console.log("mobHp", mobHp)
    hpBar.textContent = mobHp

    if (mobHp === 0) {
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
    console.log("counter", counter)
}

// handle character level experience
function handleExperience(){

    console.log("character one exp", partyOne.characterOne.experience)
    if (counter % 4 == 1) {
      partyOne.characterOne.experience += 5
		} else if ( counter % 4 == 2) {
			partyOne.characterOne.experience += 5
		} else if ( counter % 4 == 3) {
			partyOne.characterOne.experience += 5
		} else if ( counter % 4 == 0) {
			partyOne.characterOne.experience += 5
    }
    console.log("characterOne",partyOne.characterOne.experience)
    console.log("characterTwo",partyTwo.characterOne.experience)

}



setInterval(handleDamage, 500)
mobImage.addEventListener("click", handleDamage);
