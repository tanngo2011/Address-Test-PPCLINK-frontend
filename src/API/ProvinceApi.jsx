import { api } from "./api"



export let getListProvince = async (request_param) => {
    return await api("GET", "provinces", null, request_param)
}


export let getListProvinceByInput = async (request_param) => {
    return await api("GET", "provinces/input", null, request_param)
}



export let getProvinceByDistrict = async (id) => {
    return await api("GET", `provinces/district/${id}`, null, null)
}


export let getProvinceByWard = async (id) => {
    return await api("GET", `provinces/ward/${id}`, null, null)
}
