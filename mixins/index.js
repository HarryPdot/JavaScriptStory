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
    playSound("assets/sounds/click.wav")
    loadingState.loading = false
    document.getElementById("start-screen").remove()
    gotoMap('lith-harbor');
};
