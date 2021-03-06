import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import * as actions from './actions';
import {mutations} from './mutations';


const state = {
	idArticle:false,
	categories:[],
  	auteurs:[],
  	article : {
		meta_title: "",
		meta_description: "",
		title: "",
		slug: "",
		description: "",
		categorie: "",
		auteur: "",
		tags: [],
		img_catego: "",
		fa_image: "",
		fa_title: "",
		fa_description: "",
		contenu: [],		
  	},
  	erreurs : {
		meta_title : 		{ valide:false, erreurs:[] },
		meta_description : 	{ valide:false, erreurs:[] },
		title : 			{ valide:false, erreurs:[] },
		slug : 				{ valide:false, erreurs:[] },
		description : 		{ valide:false, erreurs:[] },
		categorie : 		{ valide:false, erreurs:[] },
		auteur : 			{ valide:false, erreurs:[] },
		tags : 				{ valide:false, erreurs:[] },
		img_catego : 		{ valide:true, erreurs:[] },
		fa_image : 			{ valide:true, erreurs:[] },
		fa_title : 			{ valide:false, erreurs:[] },
		fa_description : 	{ valide:false, erreurs:[] },
		contenu	 : 			{ valide:false, erreurs:[] },	
  	},
  	load : {
  		img_catego : { start : false, pourc : 0	},
  		fa_image : { start : false, pourc : 0 }
  	},
}

export default {
	namespace: 'article/',
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
