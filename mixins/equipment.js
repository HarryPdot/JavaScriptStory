const currentEquipsContainer = document.querySelector("#inventory-modal").shadowRoot.querySelectorAll("#equip-container")
const itemDetailIconElement = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-detail-icon")
const itemDescriptionAttack = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-description-attack")
const itemDescriptionName = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-description-name")
const itemDescriptionAttackspeed = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-description-attackspeed")
const itemUnequip = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-detail-unequip")

// whatever equip you wanted to wear
let clickedEquipDetail = ''
let previousEquipDetail;
let itemDetails;

function wearEquipDetail(equipName) {
    previousEquipDetail = playerStats.equips[clickedEquipDetail.playerEquipType]
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

    removePreviousEquipStat(equip.playerEquipType)
    Equipped.getEquippedIcon(equip.id, equip.playerEquipType, equip.name)
    document.querySelector("#inventory-modal").shadowRoot.querySelector(`#${equip.playerEquipType}`).style.display='block'
    playerStats.equips[equip.playerEquipType] = equip
    handleEquipStatGain(equip)
}

function removePreviousEquipStat(equipType) {
    if(playerStats.equips[equipType] == '') {
        return
    } else {
        playerStats.minRange -= previousEquipDetail.attack[0]
        playerStats.maxRange -= previousEquipDetail.attack[1]
        playerStats.attackSpeed -= previousEquipDetail.attackSpeed
    }
}

function handleEquipStatGain(equip) {
    clearInterval(attacking);
    playerStats.minRange += equip.attack[0]
    playerStats.maxRange += equip.attack[1]
    playerStats.attackSpeed += equip.attackSpeed
    // change player attack speed
    attacking = setInterval(attack, 300/playerStats.attackSpeed)
}

function handleEquipDetails(event) {
    if(event.target.getAttribute('id') === undefined || event.target.getAttribute('id') === 'equip-container' || event.target.getAttribute('id') === 'equip-player-stand' || event.target.className === '') {
        return
    } else {
        itemDetailIconElement.style.display="block"
        let equippedSrc = event.target.getAttribute('src')
        itemDetailIconElement.src = equippedSrc
        const currentLootDetail = itemsData.find(item => item.name === event.target.getAttribute('class'))
        itemDetails = currentLootDetail
        itemEquip.style.display = 'none'
        itemUnequip.style.display = 'flex' 
        giveItemDetails(currentLootDetail)
    }
}

function handleUnequip() {
    document.querySelector("#inventory-modal").shadowRoot.querySelector(`#${itemDetails.playerEquipType}`).style.display='none'
    playerStats.equips[itemDetails.playerEquipType] = ''
    itemUnequip.style.display = "none"
    updateInventorySpace(itemDetails)
    //need to make removePreviousStat reusable 
    clearInterval(attacking);
    playerStats.minRange -= itemDetails.attack[0]
    playerStats.maxRange -= itemDetails.attack[1]
    playerStats.attackSpeed -= itemDetails.attackSpeed
    // change player attack speed
    attacking = setInterval(attack, 300/playerStats.attackSpeed)
}

function giveItemDetails(item) {
    itemDescriptionName.textContent = `Name: ${item.displayName}`
    itemDescriptionAttack.textContent = `Attack: ${item.attack[0]} - ${item.attack[0]}`
    itemDescriptionAttackspeed.textContent = `Attack Speed: ${item.attackSpeed}`
}

currentEquipsContainer.forEach(equip => {
    equip.addEventListener("click", handleEquipDetails)
})

itemUnequip.addEventListener('click', handleUnequip)

//example placement
// wearEquipDetail('maple-sword')
// wearEquipDetail('zakum-helmet')