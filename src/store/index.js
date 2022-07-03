import Vue from "vue"
import Vuex from "vuex"
import axiosHelper from "./axiosHelper"
import apiConfig from "@/api-config"
import utils from "@/utils"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		postsList: [],
		isLoading: 0,
	},
	getters: {
		getPostsList: (state) => state.postsList,
		getLoader: (state) => state.isLoading,
	},
	mutations: {
		setPostsList: (state, value) => (state.postsList = value),
		setLoader: (state, value) => (state.isLoading += value),
	},
	actions: {
		loaderAction({ commit }, value) {
			commit("setLoader", value)
		},
		async getPostsFromAPI({ commit, dispatch }) {
			dispatch("loaderAction", 1)
			axiosHelper.makeGetRequest(
				apiConfig.getPosts,
				(response) => {
					commit("setPostsList", response.data.items)
					dispatch("loaderAction", -1)
				},
				utils.errorHandler
			)
		},
	},
})
