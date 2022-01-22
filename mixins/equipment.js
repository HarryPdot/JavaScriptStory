// whatever equip you wanted to wear
let clickedEquipDetail = ''
let previousEquipDetail;

// example placement, used for when we have inventory
let equipDropIntoInv = {                
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

function wearEquipDetail(equipGroup, equipName) {
    previousEquipDetail = playerStats.equips[equipDropIntoInv.playerEquipType]
    clickedEquipDetail = itemsData[equipGroup].find(equip => equip.name === equipName)
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

//example placement
// wearEquipDetail('weapons', 'maple-sword')
// wearEquipDetail('weapons', 'maple-glory-sword')

// playerStats.equips.weapon = itemsData.weapons['maple-sword']