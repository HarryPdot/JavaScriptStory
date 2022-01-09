let mobHpProgressBarElement = document.querySelector("#current-mob-hp-progress")

function playerRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function isCritical(rndInteger) {
    return rndInteger <= playerStats.critChance
}

function getDamage(isCrit) {
    let playerRanges = playerRange(playerStats.minRange, playerStats.maxRange)
    return isCrit ? Math.floor(playerRanges * 1.5) : Math.floor(playerRanges)
}

function mobHpProgressBar() {
    mobHpProgressBarElement.style.width = (Number(mobHp/currentMobDetails.meta.maxHP) * 100) + "%"
}

function getDamageLine(damageDealt, isCrit) {
    var digits = damageDealt.toString().split('');

    // @todo: Create elements using JS & loops
    switch(digits.length) {
        case 1:
            return `<img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>`
        case 2:
            return `
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[1]}.png"/>
            `
        case 3:
            return `
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[1]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[2]}.png"/>
            `
        case 4:
            return `
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[1]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[2]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[3]}.png"/>
            `
        case 5:
            return `
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[1]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[2]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[3]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[4]}.png"/>
            `
    }
}

function attack() {
    playSound("assets/sounds/attack.wav")

    let isCrit = isCritical(getRndInteger(1, 100))
    let damageDealt = getDamage(isCrit)

    render(getDamageLine(damageDealt, isCrit), document.querySelector("#damageLine"));

    mobHp -= damageDealt;
    mobHpElement.textContent = mobHp

    mobHpProgressBar()

    if (mobHp <= 0) {
        resetMob()
        handleExp(currentMobDetails.meta.exp)
        mobHpProgressBar()
    }
}

// Idle attack
let attackSpeed = 300/playerStats.attackSpeed

// Active attack
const grid = document.querySelector(".grid");
grid.addEventListener("click", () => attack());




