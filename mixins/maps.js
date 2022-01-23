const mobLvlElement = document.querySelector('#mob-lvl');
const mobNameElement = document.querySelector('#mob-name');
const killedElement = document.querySelector('#killed');
const bossButtonElement = document.querySelector('#boss-button');
const bossTimerElement = document.querySelector('#boss-timer')
const timeLeftElement = document.querySelector('#time-left')

let currentMapDetails;
let currentMobDetails;

let mobHp;
let gainsLog = [];

let killed = 0;
let requiredKills = 10;

let bossTimer;
let isBoss = false;

let mobAnimationsURLs = {};
/*  type mobAnimationsURLs = {
        'lith-harbor': [
            { 
                id: 123,
                url: blob:null..,
            },
            ...
        ],
        'henesys': [
            {
                ...
            }
            ...
        ],
        ...
    }
*/

async function getMobAnimationsData(map) {
    let allPromises = []
    const mobIds = [mobsData[map].normal, mobsData[map].bosses].flat().map((mob) => mob.id);

    mobIds.forEach((async (mobId) => {
        allPromises.push(
            new Promise(async (resolve, reject) => {
                const res = await Mob.getAnimation(mobId, 'stand');

                if(res.status === 'SUCCESS') {
                    const mobURL = URL.createObjectURL(res.data)
        
                    if(!(map in mobAnimationsURLs)) {
                        mobAnimationsURLs[map] = []
                    }
        
                    resolve(
                        mobAnimationsURLs[map].push({ 
                            id: mobId,
                            url: mobURL
                        })
                    )
                } else {
                    // @todo: Display error
                    console.error('Show user error')
                }
            })
        )
    }))

    return Promise.all(allPromises)
}

function getMobAnimationURL(mobId, mapName) {
    const mapUrls = mobAnimationsURLs[mapName]
    return mapUrls.find((mob) => mob.id === mobId).url
}

// Returns img element with gif using mob ID
function getMobGif(id) {
    const url = getMobAnimationURL(id, currentMapDetails.name);
    return `<ms-mob id="${id}-gif" sprite="${url}" />`
}

async function loadMap(map) {
    loadingState.loading = true;

    setAudio('play', document.querySelector('#bgm'), Map.getBGM(mapsData[map].id))
    document.querySelector('.container').style.backgroundImage = `url("./assets/images/map/${map}-bg.png")`
    document.getElementById('platform').src = `./assets/images/map/${map}-platform.png`

    if(isNextMapLocked(map) && !mapsData[map].unlockedBoss) {
        killedElement.style.display = 'flex';
        killedElement.textContent = `${killed}/${requiredKills}`
        bossButtonElement.style.display = 'none';
    } else {
        killedElement.style.display = 'none';
        bossButtonElement.style.display = 'flex';
    }

    if(!mapsData[map].loaded) {
        await getMobAnimationsData(map);
    }

    mapsData[map].loaded = true;
    loadingState.loading = false;
}

async function gotoMap(map) {
    currentMapDetails = mapsData[map]
    await loadMap(map);
    spawnMob();
}

function spawnMob(currentMob) {
    let mobs = currentMapDetails.mobs.normal

    if(currentMob !== undefined) {
        mobs = currentMapDetails.mobs.normal.filter((mob) => currentMob.name !== mob.name)
    }

    const randMobIndex = getRndInteger(0, mobs.length);
    currentMobDetails = mobs[randMobIndex];
    renderMob();
}

function renderMob() {
    mobHp = currentMobDetails.meta.maxHP;
    updateMobHpBar();
    mobLvlElement.innerText = `Lv.${currentMobDetails.meta.level}`;
    mobNameElement.innerText = currentMobDetails.name;
    render(getMobGif(currentMobDetails.id), document.querySelector('#mob'));
}

function clearMob(mob) {
    handleExp(mob.meta.exp);
    getLoot(mob);
}

function getLoot(mob) {
    const possibleItems = itemsData.filter((weapon) => weapon.droppedBy.includes(mob.name))
    possibleItems.forEach((item) => {
        if(chance(item.dropChance)) {
            playerStats.inventory.push(item)
            updateGainsLog(`Item (${item.displayName})`)
            updateInventorySpace(item)
        }
    })
}

function updateGainsLog(message) {
    if(gainsLog.length >= 10) gainsLog.shift();
    gainsLog.push(`${message}<br/>`)
    render(gainsLog.join(' '), document.querySelector('#gains-text'))
}

// Determines success or fail using dropChance
function chance(dropChance) {
    const chance = (playerStats.dropRate * dropChance) * 100;
    const rng = getRndInteger(1, 100);
    return rng < chance ? true : false
}

function updateKills(action) {
    if(action === 'add') {
        killed++;

        if(killed >= requiredKills) {
            killed = 0;
            killedElement.style.display = 'none';
            bossButtonElement.style.display = 'flex';
            mapsData[currentMapDetails.name].unlockedBoss = true;
        } else {
            killedElement.textContent = `${killed}/${requiredKills}`
        }
    }
}

function spawnBoss(map) {
    isBoss = true;
    currentMobDetails = map.mobs.bosses[0];
    renderMob();
    setBossTimer(30);
}

function despawnBoss() {
    isBoss = false;
    clearInterval(bossTimer);
    bossTimerElement.style.display = "none"
}

function setBossTimer(time) {
    let timeLeft = time;
    timeLeftElement.innerText = Math.trunc(timeLeft)

    bossButtonElement.style.display = "none"
    bossTimerElement.style.display = "flex"

    bossTimer = setInterval(() => {
        timeLeft -= 1;
        timeLeftElement.innerText = Math.trunc(timeLeft)

        // Failed boss
        if(timeLeft <= 0) {
            despawnBoss();
            bossButtonElement.style.display = "flex"
            spawnMob(currentMobDetails);
        }
    }, 1000);
}

function clearBoss(currentBoss) {
    clearMob(currentBoss);
    despawnBoss();

    if(isNextMapLocked(currentMapDetails.name)) {
        mapsData[getNextMap(currentMapDetails.name)].unlocked = true;
        document.querySelector('ms-modal').shadowRoot.querySelector(`#${getNextMap(currentMapDetails.name)}-button`).removeAttribute('disabled');
        gotoMap(getNextMap(currentMapDetails.name));
    } else {
        bossButtonElement.style.display = "flex";
        spawnMob(currentBoss);
    }
}

function getNextMap(currentMap) {
    switch(currentMap) {
        case 'lith-harbor': 
            return 'henesys'
        case 'henesys':
            return 'ellinia'
        case 'ellinia':
            return 'kerning-city'
        case 'kerning-city':
            return 'perion'
        case 'perion':
            return 'sleepywood'
        case 'sleepywood':
            return 'sleepywood'
    }
}

function isNextMapLocked(currentMap) {
    return !mapsData[getNextMap(currentMap)].unlocked
}
