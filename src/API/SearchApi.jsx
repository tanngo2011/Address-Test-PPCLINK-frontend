import { api } from "./api"



export let search = async (request_param) => {
    return await api("GET", "search", null, request_param)
}