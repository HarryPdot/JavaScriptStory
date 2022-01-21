const skillOneShadowElement = document.querySelector('#skill-1').shadowRoot.querySelector('img')
const skillTwoShadowElement = document.querySelector('#skill-2').shadowRoot.querySelector('img')
const skillThreeShadowElement = document.querySelector('#skill-3').shadowRoot.querySelector('img')
// Used for later updates
// const skillOneElement = document.querySelector('#skill-1')
// const skillTwoElement = document.querySelector('#skill-2')
// const skillThreeElement = document.querySelector('#skill-3')
const skillGrid = document.querySelectorAll('#skills-container > ms-skill')

// used for skill tab
let currentJobSkillsName;
let currentJobSkillsIcon;

function currentJob() {
    currentJobSkillsName = playerSkills[playerStats.job].map(skill => skill.name)
    currentJobSkillsIcon = playerSkills[playerStats.job].map(skill => skill.image)
    inputSkills()
}

function inputSkills() {
    skillOneShadowElement.src = `./assets/images/skills/${playerStats.job}-1.png`
    skillTwoShadowElement.src = `./assets/images/skills/${playerStats.job}-2.png`
    skillThreeShadowElement.src = `./assets/images/skills/${playerStats.job}-3.png`
}

function handleSkill(skill) {
    let skillClicked = playerSkills[playerStats.job][currentJobSkillsIcon.indexOf(skill.getAttribute('skillsrc'))]
    if(skillClicked.isBuff === true) {
        console.log(skill)
        buffDuration(skill)
        skillBuff(skillClicked)
    } else {
        // later updates once there is new jobs and skills
    }
}

function buffDuration(buff) {
    buff.style.pointerEvents='none'
    setTimeout(() => {
        buff.style.pointerEvents='auto'
    }, 30000)
}

function skillBuff(buff) {
    console.log(buff.name)
    buff.skillEffect()
}

function handleSkillButton(event) {
    skillPressed = event.target
    handleSkill(event.target)
}

skillGrid.forEach(skill => {
    skill.addEventListener('click', handleSkillButton)
})

currentJob()


// .style.pointerEvents='none'