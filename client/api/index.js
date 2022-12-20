import axios from 'axios'; //To make APi calls

const api = axios.create({
    baseURL: 'https://api.thingspeak.com/channels/1976530/fields/1.json?results=20'
})

export const getTempData = () => api.get(`/`);
const apis = {
    getTempData
}
