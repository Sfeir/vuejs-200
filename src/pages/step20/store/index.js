import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations-types'
import peopleService from '../services/PeopleService'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {    
    people: [],
    search: ''
}

// getters
const getters = {    
    filteredPeople: (state)=>{
       return state.people.filter(item => {
            return item.firstname.toLowerCase().indexOf(state.search) != -1 || item.lastname.toLowerCase().indexOf(state.search) != -1;
        }); 
    }
}

// actions
const actions = {
    fetch({ commit, state }) {
        peopleService.fetch().then((people) => {
            commit(types.FETCH_ALL, { people });
        })
    }
}

// mutations
const mutations = {
    [types.FETCH_ALL](state, { people }) {
        state.people = people;
    },
    [types.FILTER](state, search = '') {
        state.search = search.toLowerCase();        
    }
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    strict: debug
})