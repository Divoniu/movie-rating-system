import {AUTH_TOKEN} from "./constants";

export const get = async (endpoint, options = {})=>{
    fetch(`${endpoint}`, {
        method: "GET",
        // credentials:'include',
        ...options,
        headers:{
            accept:'application/json',
            'Content-Type':'application/json',
            Authorization: AUTH_TOKEN
        }
    })
        .then(handleHttpErrors)
        .then(resp=>resp.json());
}

export const post = async (endpoint, data, options = {})=>{
    return fetch("$")
}