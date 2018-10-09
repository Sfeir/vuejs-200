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
    },
    delete(id){
        return axios.delete(`${BACKEND_URL}/${id}`)
        .then(response =>response.data)    
    },
    create(person){
        return axios.post(BACKEND_URL,person)
        .then(response =>response.data)    
    },
    update(person){
        return axios.put(`${BACKEND_URL}/${person.id}`,person)
        .then(response =>response.data)    
    },
    fetchOne(id){
        return axios.get(`${BACKEND_URL}/${id}`)
        .then(response =>response.data)    
    }
}