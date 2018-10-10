import axios from 'axios'

const BACKEND_URL= process.env.VUE_APP_BACKEND_URL

export default {
    fetch(){
        return axios.get(BACKEND_URL)
        .then(response =>response.data)
    },
    fetchRandom(){
        return axios.get(`${BACKEND_URL}/random`)
        .then(response =>response.data)    
    }
}