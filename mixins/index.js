const template = document.createElement('template');
    
var render = function (template, node) {
    node.innerHTML = template;
};

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// onLoad
window.addEventListener('load', (e) => {
    document.querySelector('#start-loader').remove();
    document.querySelector('#start-modal').style.display = 'flex';
})

const loadingState = new Proxy({ loading: false }, {
    set(target, prop, val) {
        target[prop] = val;

        if(val === true) {
            document.querySelector('#loading-screen').style.display = 'flex';
            clearInterval(attacking);
        } else {
            document.querySelector('#loading-screen').style.display = 'none';
            attacking = setInterval(attack, attackSpeed);
        }
    }
})

const interactedState = new Proxy({ interacted: true }, {
    set(target, prop, val) {
        target[prop] = val;
        // On change
        // setInterval(attack, attackSpeed)
    }
})

function startGame() {
    playSound("assets/sounds/click.wav")
    interactedState.interacted = false
    document.getElementById("start-screen").remove()
    gotoMap('lith-harbor');
};
