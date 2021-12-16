import { createStore } from 'vuex'
import ListService from '@/services/ListService.js'

export default createStore({
  state: {
    user: 'Harri',
    lists: [],
    list: {},
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list
    },
    SET_LISTS(state, lists) {
      state.lists = lists
    },
  },
  actions: {
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
