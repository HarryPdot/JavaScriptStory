const template = document.createElement('template');
    
var render = function (template, node) {
    node.innerHTML = template;
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

// onLoad
window.addEventListener('load', (e) => {
    document.querySelector('ms-loader').remove();
    document.querySelector('#start-screen').style.backgroundColor = 'rgba(0,0,0,0.75)';
    document.querySelector('#start-modal').style.display = 'flex';
})

const loadingState = new Proxy({ loading: true }, {
    set(target, prop, val) {
        target[prop] = val;
        // On change
        setInterval(attack, attackSpeed)
    }
})

function startGame() {
    loadingState.loading = false

    const startMenu = document.getElementById("start-screen")
    startMenu.remove()

    playSound("assets/sounds/click.wav")
    setAudio('play', document.querySelector('#bgm'), Map.getBGM(LITH_HARBOR))
};
