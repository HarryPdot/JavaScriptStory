const currentEquipsContainer = document.querySelector("#inventory-modal").shadowRoot.querySelectorAll("#equip-container")
const itemDetailIconElement = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-detail-icon")
const inventoryLootElement = document.querySelector("#inventory-modal").shadowRoot.querySelectorAll("#items-container")
const itemDescriptionAttack = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-description-attack")
const itemDescriptionName = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-description-name")
const itemDescriptionAttackspeed = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-description-attackspeed")


// whatever equip you wanted to wear
let clickedEquipDetail = ''
let previousEquipDetail;

// example placement, used for when we have inventory
let wantToEquip = {                
    id: 1302020,
    name: "maple-sword",
    displayName: "Maple Sword",
    equipGroup: "weapons",
    playerEquipType: "weapon",
    reqLevel: 35,
    attack: [45, 53],
    attackSpeed: 5,
    dropChance: 0.30,
    droppedBy: [
        "Snail",
        "Blue Snail",
        "Red Snail",
        "Spore",
        "Mano",
    ]
}

function wearEquipDetail(equipName) {
    previousEquipDetail = playerStats.equips[wantToEquip.playerEquipType]
    clickedEquipDetail = itemsData.find(equip => equip.name === equipName)
    checkEquipLvlReq(clickedEquipDetail)
}

function checkEquipLvlReq(equip) {
    if(equip.reqLevel <= playerStats.lvl) {
        handleEquipChange(equip)
    } else {
        console.log('equip too high level')
        clickedEquipDetail = ''
    }
}

function handleEquipChange(equip) {
    console.log('handle change')
    removePreviousEquipStat(equip.playerEquipType)
    Equipped.getEquippedIcon(equip.id, equip.playerEquipType, equip.name)
    playerStats.equips[equip.playerEquipType] = equip
    console.log(playerStats.equips[equip.playerEquipType])
    handleEquipStatGain(equip)
}

function removePreviousEquipStat(equipType) {
    if(playerStats.equips[equipType] == '') {
        return
    } else {
        playerStats.minRange -= previousEquipDetail.attack[0]
        playerStats.maxRange -= previousEquipDetail.attack[1]
        playerStats.attackSpeed -= previousEquipDetail.attackSpeed
        // change player attack speed
        attacking = setInterval(attack, 300/playerStats.attackSpeed)
    }
}

function handleEquipStatGain(equip) {
    playerStats.minRange += equip.attack[0]
    playerStats.maxRange += equip.attack[1]
    playerStats.attackSpeed += equip.attackSpeed
    // change player attack speed
    attacking = setInterval(attack, 300/playerStats.attackSpeed)
}

function handleEquipDetails(event) {
    console.log(event.target)
    if(event.target.getAttribute('id') === undefined || event.target.getAttribute('id') === 'equip-container' || event.target.getAttribute('id') === 'equip-player-stand' || event.target.className === '') {
        return
    } else {
        let equippedSrc = event.target.getAttribute('src')
        itemDetailIconElement.src = equippedSrc
        const currentLootDetail = itemsData.find(item => item.name === event.target.getAttribute('class'))
        console.log(currentLootDetail)
        giveItemDetails(currentLootDetail)
        // const currentLootDetail = playerStats.inventory.find(item => item.)
    }
}

function handleLootItems(event) {
    console.log(event.target)
    if(event.target.getAttribute('id') === 'items-container') {
        return
    } else {
        let itemSrc = event.target.getAttribute('src')
        itemDetailIconElement.src = itemSrc
        const currentLootDetail = playerStats.inventory.find(item => item.name === event.target.getAttribute('class'))
        giveItemDetails(currentLootDetail)
    }
}

function giveItemDetails(item) {
    console.log(item)
    itemDescriptionName.textContent = `Name: ${item.displayName}`
    itemDescriptionAttack.textContent = `Attack: ${item.attack[0]} - ${item.attack[0]}`
    itemDescriptionAttackspeed.textContent = `Attack Speed: ${item.attackSpeed}`
}

currentEquipsContainer.forEach(equip => {
    equip.addEventListener("click", handleEquipDetails)
})

inventoryLootElement.forEach(item => {
    item.addEventListener('click', handleLootItems)
})

//example placement
// wearEquipDetail('maple-sword')
// wearEquipDetail('zakum-helmet')

// playerStats.equips.weapon = itemsData['maple-sword']

// https://maplestory.io/api/GMS/229/item/1302030/icon?resize=1
// fetch(url.toString()
