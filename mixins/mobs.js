var hpBar = document.querySelector(".health-bar")
var mobImage = document.getElementById("mob")
var mobNameText = document.querySelector(".mobNameText")

let mobHp = ""
let mobHpText = mobHp

let mobOrder = ["mob1", "mob2", "mob3", "mob4"]
let mobs = [
    mob1= {
        name: "snail",
        hp: 30,
        experience: 5,
        imgElement: '<ms-mob sprite="./assets/images/mob/snail_stand_0.png" id="mob"/>'
    },
    mob2= {
        name: "blue snail",
        hp: 80,
        experience: 10,
        imgElement: '<ms-mob sprite="./assets/images/mob/blue_snail_stand_0.png" id="mob"/>'
    },
    mob3= {
        name: "red snail",
        hp: 150,
        experience: 20,
        imgElement: '<ms-mob sprite="./assets/images/mob/red_snail_stand_0.png" id="mob"/>'
    },
    mob4= {
        name: "mano",
        hp: 400,
        experience: 50,
        imgElement: '<ms-mob sprite="./assets/images/mob/mano_stand_0.png" id="mob"/>'
    }
]

let counter = 1
let waveLevel = 1

function currentMob() {
    if (counter % 4 == 1) {
        mobNameText.textContent = mobs[0].name
        mobHp = Number(mobs[0].hp * waveLevel)
    } else if ( counter % 4 == 2) {
        mobNameText.textContent = mobs[1].name
        mobHp = Number(mobs[1].hp * waveLevel)
    } else if ( counter % 4 == 3) {
        mobNameText.textContent = mobs[2].name
        mobHp = Number(mobs[2].hp * waveLevel)
    } else if ( counter % 4 == 0) {
        mobNameText.textContent = mobs[3].name
        mobHp = Number(mobs[3].hp * waveLevel)
    }
}

function handleNewMob() {
    if(counter % 4 == 0){
        waveLevel = waveLevel + 1
        // console.log("waveLevel", waveLevel)
        handleMobExp()
    }

    counter ++
    currentMob()
    handleMobImages()
    hpBar.textContent = mobHp
}

function handleMobImages() {
    if(counter % 4 == 1){
        render(mob1.imgElement, document.querySelector('.mob-grid'))
    } else if (counter % 4 == 2) {
        render(mob2.imgElement, document.querySelector('.mob-grid'))
    } else if (counter % 4 == 3) {
        render(mob3.imgElement, document.querySelector('.mob-grid'))
    } else if (counter % 4 == 0) {
        render(mob4.imgElement, document.querySelector('.mob-grid'))
    }
}

function handleMobExp() {
    for(i=0; i < mobs.length; i++) {
        mobs[i].experience = Math.floor(mobs[i].experience * 1.2)
    }
}

handleMobImages();
currentMob();

hpBar.textContent = Number(mobHp * waveLevel)

