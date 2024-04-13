import { api } from "./api"



export let getListDistrictByProvince = async (id) => {
    return await api("GET", `districts/province/${id}`, null, null)
}


export let getDistrictByWard = async (id) => {
    return await api("GET", `districts/ward/${id}`, null, null)
}



export let getListDistrictByInput = async (request_param) => {
    return await api("GET", "districts/input", null, request_param)
}


export let getListDistrict = async (request_param) => {
    return await api("GET", "districts", null, request_param)
}