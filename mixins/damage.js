var centerGrid = document.querySelector(".center-grid")

// handle image components
var damage0 = '<damage-line sprite="./assets/images/DamageSkin/normal-0.png" id="normal-0"/>'

//handles the damage to the mob
function attack() {
    critRandomIndex = Math.floor(Math.random()*100)

    if(critRandomIndex <= stats.critChance){
        // console.log("crit")
        damageDealt = Math.floor(stats.range * 1.5)
        mobHp = mobHp - damageDealt
    } else {
        damageDealt = Math.floor(stats.range)
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
        damage0 = `<damage-line sprite='./assets/images/DamageSkin/normal-${num1}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-1'))
    }
    if(Number(linesArr[1]) === num2) {
        damage0 = `<damage-line sprite='./assets/images/DamageSkin/normal-${num2}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-2'))
    }
    if(Number(linesArr[2]) === num3) {
        damage0 = `<damage-line sprite='./assets/images/DamageSkin/normal-${num3}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-3'))
    }
    if(Number(linesArr[3]) === num4) {
        damage0 = `<damage-line sprite='./assets/images/DamageSkin/normal-${num4}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-4'))
    }
    if(Number(linesArr[4]) === num5) {
        damage0 = `<damage-line sprite='./assets/images/DamageSkin/normal-${num5}.png' id='normal-0'/>`
        render(damage0, document.querySelector('.damage-line-5'))
    }
    if(Number(linesArr[5]) === num6) {
        damage0 = `<damage-line sprite='./assets/images/DamageSkin/normal-${num6}.png' id='normal-0'/>`
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

setInterval(attack, 300)
centerGrid.addEventListener("click", attack);