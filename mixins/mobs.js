const mobHpElement = document.querySelector('#mob-hp');
const mobNameElement = document.querySelector('#mob-name');
const killedElement = document.querySelector('#killed');
// const requiredKillsElement = document.querySelector('#required-kills');
const bossTimerElement = document.querySelector('#boss-timer')
const bossHpBarElement = document.querySelector('#boss-details')
const mobHpBarElement = document.querySelector('#progress-mob-hpbar')


// @todo: Add stages
// let currentStage = 1;
let mobHp;
let currentMobDetails;
let killed = 1;
let isBoss = false;
let requiredKills = 5

// Render initial states
killCounter(killed, requiredKills);

// Initial load



// Get mob data using mob NAME
function getMobDetails(mobName) {
    if(isBoss) {
        isBoss = false;
        return currentMapDetails.mobs.bosses[0]
    }
    else {
        return currentMapDetails.mobs.normal.filter((mob) => mobName.name === mob.name)[0]
    }
}

// Returns img element with gif using mob ID
function getMobGif(id) {
    const url = getMobAnimationURL(id, currentMapDetails.name);
    return `<ms-mob id="${id}-gif" sprite="${url}" />`
}

function killCounter(killed, requiredKills) {
    killedElement.textContent = `${killed}/${requiredKills}`
}

function updateKills(action) {
    if(action === 'add') {
        killed++;
        killCounter(killed, requiredKills);
    } else if (action === 'reset') {
        killed = 0;
        killedElement.textContent = "BOSS";
    }
}

function getNewMob(currentMob) {
    let mobsExcCurrent = currentMapDetails.mobs.normal

    if(currentMob !== undefined) {
        mobsExcCurrent = currentMapDetails.mobs.normal.filter((mobName) => currentMob.name !== mobName.name)
    }

    spawnBoss()

    let randMobIndex = getRndInteger(0, mobsExcCurrent.length);
    currentMobDetails = getMobDetails(mobsExcCurrent[randMobIndex])

    // update HTML 
    mobHp = currentMobDetails.meta.maxHP;
    mobHpElement.textContent = mobHp;
    mobNameElement.textContent = currentMobDetails.name;
    render(getMobGif(currentMobDetails.id), document.querySelector('#mob'));
}

function resetMob() {
    updateKills('add');
    getNewMob(currentMobDetails); 
}

function spawnBoss() {
    if(killed > requiredKills) {
        let randBossIndex = getRndInteger(0, currentMapDetails.mobs.bosses.length)
        upcomingMobs = currentMapDetails.mobs.bosses[randBossIndex];
        updateKills('reset');
        bossTimer()
        isBoss = true;
    } else return
}

function hpBarSwitch(boolean) {
    if (boolean === true) {
        bossHpBarElement.style.display="block"
        mobHpBarElement.style.display="none"
    } else if (boolean === false) {
        bossHpBarElement.style.display="none"
        mobHpBarElement.style.display="block"
    }
}

function bossTimer() {
    var timeleft = 60.99;
    bossTimerElement.style.visibility = "visible"
    hpBarSwitch(true)
    var downloadTimer = setInterval(function(){
    if(timeleft <= 1){
        clearInterval(downloadTimer);
        bossTimerElement.style.visibility = "hidden"
        resetMob()
        hpBarSwitch(false)
    } else if(killed !== 0){
        bossTimerElement.style.visibility = "hidden"
        clearInterval(downloadTimer);
        hpBarSwitch(false)
    }
    bossTimerElement.textContent = Math.trunc(timeleft)
    timeleft -= 0.1;
    }, 100);
    bossTimerElement.textContent = Math.trunc(60.99)
}