import { api } from "./api"



export let getListDistrictByProvince = async (id) => {
    return await api("GET", `districts/${id}`, null)
}