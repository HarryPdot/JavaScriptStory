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
let bossHp = 1000
hpBar.textContent = bossHp

// character damage range
var range = 5

function handleDamage() {
    bossHp = bossHp - (partyOne.characterOne.range + partyTwo.characterOne.range)
    console.log("bossHp", bossHp)
    hpBar.textContent = bossHp
}

setInterval(handleDamage, 1000)



boss.addEventListener("click", handleDamage);