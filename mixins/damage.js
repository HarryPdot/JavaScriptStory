function isCritical(rndInteger) {
    return rndInteger <= characterStats.critChance
}

function getDamage(isCrit) {
    return isCrit ? Math.floor(characterStats.range * 1.5) : Math.floor(characterStats.range)
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
    new Audio("assets/sounds/attack.wav").play();

    let isCrit = isCritical(getRndInteger(1, 100))
    let damageDealt = getDamage(isCrit)

    render(getDamageLine(damageDealt, isCrit), document.querySelector("#damageLine"));

    mobHp -= damageDealt;
    mobHpElement.textContent = mobHp

    if (mobHp <= 0) {
        resetMob()
        handleExp(currentMobDetails.meta.exp)
    }
}

// Idle attack
let attackSpeed = 300/characterStats.attackSpeed

// Active attack
const grid = document.querySelector(".grid");
grid.addEventListener("click", () => attack());
