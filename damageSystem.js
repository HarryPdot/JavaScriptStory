var hpBar = document.querySelector(".health-bar")
// var characterOne = document.querySelector(".character-one")
// var characterTwo = document.querySelector(".character-two")
var bossImage = document.querySelector(".boss")
var mobImage = document.querySelector(".mob")
var monsterNameText = document.querySelector(".monsterNameText")



// character stats
let partyOne = {
    characterOne: {
        range: 5,
    }
}
let partyTwo = {
    characterOne: {
        range: 5,
    }
}

// current monster
let monstersOrder = ["snail", "slime", "mushroom", "boss"]
let monsters = [
        snail= {
            name: "snail",
            hp: 30
        },
        slime= {
            name: "slime",
            hp: 80
        },
        mushroom= {
            name: "mushroom",
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

// handles current monster
function currentMonster() {
    if (counter % 4 == 1) {
        monsterNameText.textContent = "snail"
        mobHp = Number(monsters[0].hp * waveLevel)
    } else if ( counter % 4 == 2) {
        monsterNameText.textContent = "slime"
        mobHp = Number(monsters[1].hp * waveLevel)
    } else if ( counter % 4 == 3) {
        monsterNameText.textContent = "mushroom"
        mobHp = Number(monsters[2].hp * waveLevel)
    } else if ( counter % 4 == 0) {
        monsterNameText.textContent = "boss"
        mobHp = Number(monsters[3].hp * waveLevel)
    }
}

currentMonster()

// current monster hp bar
let mobHpText = mobHp
// let bossHpText = bossHp

hpBar.textContent = Number(mobHp * waveLevel)

//handles the damage to the monster
function handleDamage() {
    mobHp = mobHp - (partyOne.characterOne.range + partyTwo.characterOne.range)
    console.log("mobHp", mobHp)
    hpBar.textContent = mobHp

    if (mobHp === 0) {
        handleNewMonster()
    }
}

// new boss when current defeated
function handleNewMonster() {
    if(counter % 4 == 0){
        waveLevel = waveLevel + 1
        console.log("waveLevel", waveLevel)
    }
    counter ++
    currentMonster()
    console.log("counter", counter)
}


setInterval(handleDamage, 500)
bossImage.addEventListener("click", handleDamage);
mobImage.addEventListener("click", handleDamage);
