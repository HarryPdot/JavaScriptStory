class Map {
    static getBGM(mapId) {
        const url = new URL(`${API_BASE_URL}/${REGION}/${VERSION}/map/${mapId}/bgm`)
        return url.href
    }
}
