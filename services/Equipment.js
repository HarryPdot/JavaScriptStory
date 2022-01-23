class Equipped {
    static getEquippedIcon(equipId, equipType, name) {
        const url = new URL(`${API_BASE_URL}/${REGION}/${VERSION}/item/${equipId}/icon?resize=1`)

        fetch(url)
        .then(res => {
            document.querySelector("#inventory-modal").shadowRoot.querySelector(`#${equipType}`).src = res.url
            document.querySelector("#inventory-modal").shadowRoot.querySelector(`#${equipType}`).className = name
        })
    }
}
// https://maplestory.io/api/GMS/229/item/1302030/icon?resize=1

