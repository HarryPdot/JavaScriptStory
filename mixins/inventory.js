const itemContainerElement = document.querySelector("#inventory-modal").shadowRoot.querySelector("#items-container")
const inventoryLootElement = document.querySelector("#inventory-modal").shadowRoot.querySelectorAll("#items-container")
const itemEquip = document.querySelector("#inventory-modal").shadowRoot.querySelector("#item-detail-equip")

function updateInventorySpace(item) {
    const itemElement = document.createElement('img')
    itemElement.src = `https://maplestory.io/api/GMS/229/item/${item.id}/icon?resize=1`
    itemElement.className= item.name
    itemContainerElement.appendChild(itemElement)
}

function handleLootItems(event) {
    if(event.target.getAttribute('id') === 'items-container') {
        return
    } else {
        itemDetailIconElement.style.display="block"
        let itemSrc = event.target.getAttribute('src')
        itemDetailIconElement.src = itemSrc
        const currentLootDetail = playerStats.inventory.find(item => item.name === event.target.getAttribute('class'))
        itemDetails = currentLootDetail
        itemUnequip.style.display = 'none'
        itemEquip.style.display = 'flex'
        giveItemDetails(currentLootDetail)
    }
}

function handleEquipping() {
    let indexEquip = playerStats.inventory.indexOf(playerStats.inventory.find(item => item.name === itemDetails.name))
    playerStats.inventory.splice(indexEquip, 1)
    itemEquip.style.display='none'
    //need to remove equip from inventory)
    wearEquipDetail(itemDetails.name)
}


inventoryLootElement.forEach(item => {
    item.addEventListener('click', handleLootItems)
})

itemEquip.addEventListener('click', handleEquipping)

