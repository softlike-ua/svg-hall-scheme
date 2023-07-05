class API33 {
    headers = {
        "Content-Type": 'application/json'
    }


    async get(url) {
        let result = await fetch(url, {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: this.headers
        })
        return await result.json()
    }

    async post(url, data) {
        let result = await fetch(url, {})
    }
}


export default new API();