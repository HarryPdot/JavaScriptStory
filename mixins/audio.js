let muted = false;

// Toggle mute on singular element
function toggleMute(element) {
    if(!element.muted) element.pause();
    if(element.muted) element.play();
    element.muted = !element.muted;
}

// Toggle mute on all video & audio
function muteAll() {
    // @todo: Update design
    if(muted) {
        document.querySelector('#toggle-mute').textContent = 'Sound ON'
        document.querySelector('#toggle-mute').style.color = 'rgb(0, 255, 42)'
    }

    if(!muted) {
        document.querySelector('#toggle-mute').textContent = 'Sound OFF'
        document.querySelector('#toggle-mute').style.color = 'rgb(250, 25, 25)'
    }
    
    muted = !muted;
    const soundElements = document.querySelectorAll("video, audio");
    soundElements.forEach((e) => toggleMute(e))
}

// Play/Pause existing element (Optional: Replace src)
function setAudio(action, element, src) {
    if(src) element.src = src;
    if(action === 'play') element.play();
    if(action === 'pause') element.pause();
}

// Play audio with src (Element not required)
function playSound(src) {
    // Play only when unmuted
    if(!muted) new Audio(src).play();
}