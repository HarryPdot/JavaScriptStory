let currentMapDetails;

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

async function loadMap(map) {
    loadingState.loading = true;

    setAudio('play', document.querySelector('#bgm'), Map.getBGM(mapsData[map].id))
    document.querySelector('.container').style.backgroundImage = `url("./assets/images/map/${map}-bg.png")`
    document.getElementById('platform').src = `./assets/images/map/${map}-platform.png`

    if(!mapsData[map].loaded) {
        await getMobAnimationsData(map);
    }

    mapsData[map].loaded = true;
    loadingState.loading = false;
}

async function gotoMap(map) {
    currentMapDetails = mapsData[map]
    await loadMap(map);
    getNewMob();
}
