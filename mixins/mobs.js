const mobHpElement = document.querySelector('#mob-hp');
const mobNameElement = document.querySelector('#mob-name');
const killedElement = document.querySelector('#killed');
// const requiredKillsElement = document.querySelector('#required-kills');
const bossTimerElement = document.querySelector('#boss-timer')


// @todo: Add stages
// let currentStage = 1;
let mobHp;
let currentMobDetails;
let killed = 1;

// Last mob in array is boss
const stage1 = {
    mobs: [
        'Snail', 
        'Blue Snail', 
        'Red Snail', 
        'Spore',
        'Mano'
    ],
    requiredKills: 5,
}

// Render initial states
// killedElement.textContent = killed;
// requiredKillsElement.textContent = stage1.requiredKills;
killCounter(killed, stage1.requiredKills);

// Initial load
getNewMob();

// Get mob data using mob NAME
function getMobDetails(mobName) {
    return mobsData.filter((mob) => mobName === mob.name)[0]
}

// Returns img element with gif using mob ID
function getMobGif(id) {
    return `<ms-mob id="${id}-gif" sprite="https://maplestory.io/api/GMS/210.1.1/mob/${id}/render/stand?bgColor=" />`
}

function killCounter(killed, requiredKills) {
    killedElement.textContent = `${killed}/${requiredKills}`
}

function updateKills(action) {
    if(action === 'add') {
        killed++;
        killCounter(killed, stage1.requiredKills);
    } else if (action === 'reset') {
        killed = 0;
        killedElement.textContent = "BOSS";
        // bossHpBarElement1.style.display="block"
    }
}

function getNewMob(currentMob) {
    let upcomingMobs = stage1.mobs

    // Prevent current mob from being chosen next
    if(currentMob !== undefined) {
        upcomingMobs = stage1.mobs.filter((mobName) => currentMob.name !== mobName)
    }

    // Spawn boss
    if(killed > stage1.requiredKills) {
        upcomingMobs = [stage1.mobs[stage1.mobs.length - 1]];
        updateKills('reset');
        //add bossTimer
        bossTimer()
    }

    // Choose a random mob EXCLUDING boss
    let randMobIndex = getRndInteger(0, upcomingMobs.length - 1);

    // Get details
    currentMobDetails = getMobDetails(upcomingMobs[randMobIndex]);
    
    // Update HTML
    mobHp = currentMobDetails.meta.maxHP;
    mobHpElement.textContent = mobHp;
    mobNameElement.textContent = currentMobDetails.name;
    render(getMobGif(currentMobDetails.id), document.querySelector('#mob'));
}

function resetMob() {
    updateKills('add');
    getNewMob(currentMobDetails); 
}

function bossTimer() {
    var timeleft = 60.99;
    bossTimerElement.style.visibility = "visible"
    var downloadTimer = setInterval(function(){
    if(timeleft <= 1){
        clearInterval(downloadTimer);
        bossTimerElement.style.visibility = "hidden"
        resetMob()
    } else if(killed !== 0){
        bossTimerElement.style.visibility = "hidden"
        clearInterval(downloadTimer);
    }
    bossTimerElement.textContent = Math.trunc(timeleft)
    timeleft -= 0.1;
    }, 100);
    bossTimerElement.textContent = Math.trunc(60.99)
}