import { createStore } from 'vuex'
import ListService from '@/services/ListService.js'

export default createStore({
  state: {
    user: 'Harri',
    lists: [],
    list: {},
  },
  mutations: {
    ADD_LIST(state, list) {
      state.lists.push(list)
    },
    REMOVE_LIST(state, id) {
      const index = state.lists.findIndex((list) => list.id == id)
      console.log(index)
      state.lists.splice(index, 1)
      console.log('success')
    },
    SET_LIST(state, list) {
      state.list = list
    },
    SET_LISTS(state, lists) {
      state.lists = lists
    },
  },
  actions: {
    createList({ commit }, list) {
      return ListService.postList(list)
        .then(() => {
          commit('ADD_LIST', list)
        })
        .catch((error) => {
          throw error
        })
    },
    deleteList({ commit }, id) {
      return ListService.deleteList(id)
        .then((response) => {
          commit('REMOVE_LIST', response.data)
          console.log('yippee')
        })
        .catch((error) => {
          throw error
        })
    },
    fetchLists({ commit }) {
      return ListService.getLists()
        .then((response) => {
          commit('SET_LISTS', response.data)
        })
        .catch((error) => {
          throw error
        })
    },
    fetchList({ commit, state }, id) {
      const existingList = state.lists.find((list) => list.id === id)
      if (existingList) {
        commit('SET_LIST', existingList)
      } else {
        return ListService.getList(id)
          .then((response) => {
            commit('SET_LIST', response.data)
          })
          .catch((error) => {
            throw error
          })
      }
    },
  },
  modules: {},
})
