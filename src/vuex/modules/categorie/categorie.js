import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import * as actions from './actions';
import {mutations} from './mutations';


const state = {
	idCategorie:false,
  	categorie : {
		meta_title: "",
		meta_description: "",
		title: "",
		slug: "",
		description: "",
  	},
  	erreurs : {
		meta_title : 		{ valide:false, erreurs:[] },
		meta_description : 	{ valide:false, erreurs:[] },
		title : 			{ valide:false, erreurs:[] },
		slug : 				{ valide:false, erreurs:[] },
		description : 		{ valide:false, erreurs:[] },
  	},
}

export default {
	namespace: 'categorie/',
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
