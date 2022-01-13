let currentMapDetails;

function loadMap(map) {
    setAudio('play', document.querySelector('#bgm'), Map.getBGM(mapsData[map].id))
    document.querySelector('.container').style.backgroundImage = `url("./assets/images/map/${map}-bg.png")`
    document.getElementById('platform').src = `./assets/images/map/${map}-platform.png`
}

function gotoMap(map) {
    loadMap(map);
    currentMapDetails = mapsData[map]
    getNewMob();
}
