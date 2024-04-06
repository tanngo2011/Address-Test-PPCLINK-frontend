import { api } from "./api"




export let getListWardByDistrict = async (id) => {
    return await api("GET", `wards/${id}`, null)
}