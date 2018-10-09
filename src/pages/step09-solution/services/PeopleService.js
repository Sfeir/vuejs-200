import axios from 'axios'

const BACKEND_URL='http://localhost:9000/api/peoples'

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