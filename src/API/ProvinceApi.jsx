import { api } from "./api"



export let getListProvince = async () => {
    return await api("GET", "provinces", null)
}

