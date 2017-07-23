import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import * as actions from './actions';
import {mutations} from './mutations';


const state = {
	search : {
		id : "",
		title : "",
		description : ""
	},
	articles:[]
}

export default {
	namespace: 'listArticles/',
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
