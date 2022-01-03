console.log("yes")

var hpBar = document.querySelector(".health-bar")
// var characterOne = document.querySelector(".character-one")
// var characterTwo = document.querySelector(".character-two")
var boss = document.querySelector(".boss")

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

// boss hp
let bossHp = 100
let bossHpText = bossHp
let bossLevel = 1
hpBar.textContent = Number(bossHp * bossLevel)
// character damage range
var range = 5

function handleDamage() {
    console.log(bossHpText)
    bossHpText = bossHpText - (partyOne.characterOne.range + partyTwo.characterOne.range)
    console.log("bossHpText", bossHpText)
    hpBar.textContent = bossHpText

    if (bossHpText === 0) {
        handleNewBoss()
    }
}

// new boss when current defeated
function handleNewBoss() {
    bossLevel = bossLevel + 1
    console.log("bossLevel", bossLevel)
    bossHpText = bossHp * bossLevel
    hpBar.textContent = bossHpText
}


setInterval(handleDamage, 1000)
boss.addEventListener("click", handleDamage);