const itemContainerElement = document.querySelector("#inventory-modal").shadowRoot.querySelector("#items-container")

function updateInventorySpace(item) {
    const itemElement = document.createElement('img')
    itemElement.src = `https://maplestory.io/api/GMS/229/item/${item.id}/icon?resize=1`
    itemElement.className= item.name
    console.log(itemElement.className)
    itemContainerElement.appendChild(itemElement)
}