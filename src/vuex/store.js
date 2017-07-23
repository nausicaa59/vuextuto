import Vue from 'vue';
import Vuex from 'vuex';

import article from './modules/article/article';

const state = {
	monargument:[],
}

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	modules : {
		article
	}
})

export default store
