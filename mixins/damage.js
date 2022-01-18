const mobHpProgressBarElement = document.querySelector("#current-mob-hp-progress")
const bossHpProgressBarElement = document.querySelector("#current-boss-hp-progress")
const uiClickableElement = document.getElementById("ui-clickable");

function isCritical(rndInteger) {
    return rndInteger <= playerStats.critChance
}

function getDamage(isCrit) {
    const baseDamage = getRndInteger(playerStats.minRange, playerStats.maxRange);
    return isCrit ? Math.floor(baseDamage * 1.5) : Math.floor(baseDamage);
}

function mobHpProgressBar() {
    mobHpProgressBarElement.style.width = (Number(mobHp/currentMobDetails.meta.maxHP) * 100) + "%"
    bossHpProgressBarElement.style.width = (Number(mobHp/currentMobDetails.meta.maxHP) * 100) + "%"
}

function getDamageLine(damageDealt, isCrit) {
    var digits = damageDealt.toString().split('');

    // @todo: Create elements using JS & loops
    switch(digits.length) {
        case 1:
            return `
                ${isCrit ? '<img src="./assets/images/DamageSkin/crit-effect.png"/>' : ''}
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>
            `
        case 2:
            return `
                ${isCrit ? '<img src="./assets/images/DamageSkin/crit-effect.png"/>' : ''}
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[1]}.png"/>
            `
        case 3:
            return `
                ${isCrit ? '<img src="./assets/images/DamageSkin/crit-effect.png"/>' : ''}
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[1]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[2]}.png"/>
            `
        case 4:
            return `
                ${isCrit ? '<img src="./assets/images/DamageSkin/crit-effect.png"/>' : ''}
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[0]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[1]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[2]}.png"/>
                <img src="./assets/images/DamageSkin/${isCrit ? 'crit' : 'normal'}-${digits[3]}.png"/>
            `
        case 5:
            return `
                ${isCrit ? '<img src="./assets/images/DamageSkin/crit-effect.png"/>' : ''}
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

// Idle attack - setInterval variable
let attacking; 
let attackSpeed = 300/playerStats.attackSpeed
