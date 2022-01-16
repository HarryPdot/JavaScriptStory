class Mob {
    static async getAnimation(mobId, animation) {
        const url = new URL(`${API_BASE_URL}/${REGION}/${VERSION}/mob/${mobId}/render/${animation}?bgColor=`)
        
        try {
            const response = await fetch(url.toString(), {
                method: 'GET',
            })
            if(response.status === 200) {
                return {
                    status: 'SUCCESS',
                    data: await response.blob()
                }
            } else if(response.status === 404) {
                return {
                    status: 'ERROR',
                    errorCode: '404',
                    errorTitle: 'We experienced some issues loading the animation',
                    errorMessage: 'You can try refreshing the page or if the problem persists, try again later.'
                }
            } else {
                console.error('Unexpected Mob API error', response)
                return {
                    status: 'ERROR',
                    errorCode: `${response.status}`,
                    errorTitle: 'We experienced some issues loading the animation',
                    errorMessage: 'You can try refreshing the page or if the problem persists, try again later.'
                }
            }
        } catch (error) {
            console.error(error)
            return {
                status: 'ERROR',
                errorTitle: 'We experienced some issues loading the animation',
                errorMessage: 'You can try refreshing the page or if the problem persists, try again later.'
            }
        }
    }
}
