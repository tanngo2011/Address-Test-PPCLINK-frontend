import { api } from "./api"




export let getListWardByDistrict = async (id) => {
    return await api("GET", `wards/district/${id}`, null, null)
}


export let getListWardByProvince = async (id) => {
    return await api("GET", `wards/province/${id}`, null, null)
}


export let getListWardByInput = async (request_param) => {
    return await api("GET", "wards/input", null, request_param)
}


export let getListWard = async (request_param) => {
    return await api("GET", "wards", null, request_param)
}