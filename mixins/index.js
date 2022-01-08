const template = document.createElement('template');
    
var render = function (template, node) {
    node.innerHTML = template;
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

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
