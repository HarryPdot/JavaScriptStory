function getDamage(rndInteger) {
    return rndInteger <= stats.critChance ? Math.floor(stats.range * 1.5) : Math.floor(stats.range)
}

function attack() {
    new Audio("../assets/sounds/attack.wav").play();

    mobHp -= getDamage(getRndInteger(1, 100));
    hpBar.textContent = mobHp

    if (mobHp <= 0) {
        handleNewMob()
        handleExperience()
    }
}

let attackSpeed = 300/stats.attackSpeed