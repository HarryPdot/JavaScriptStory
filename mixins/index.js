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

    new Audio("assets/sounds/click.wav").play();
    const bgm = document.querySelector('audio');
    bgm.play();
};
