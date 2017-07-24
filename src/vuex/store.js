import Vue from 'vue';
import Vuex from 'vuex';

import article from './modules/article/article';
import categorie from './modules/categorie/categorie';
import listArticles from './modules/listArticles/listArticles';

const state = {
	monargument:[],
}

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	modules : {
		article,
		categorie,
		listArticles,
	}
})

export default store
