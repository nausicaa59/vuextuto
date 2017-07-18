import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as tools from '../tools';
import {validation} from '../Validations';

Vue.use(Vuex)

const state = {
	categories:[],
  	auteurs:[],
  	count: 0,
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
		img_catego : 		{ valide:false, erreurs:[] },
		fa_image : 			{ valide:false, erreurs:[] },
		fa_title : 			{ valide:false, erreurs:[] },
		fa_description : 	{ valide:false, erreurs:[] },
		contenu	 : 			{ valide:false, erreurs:[] },	
  	}
}

const store = new Vuex.Store({
	state,
	getters:{
		meta_title: 		state => state.article.meta_title,
		meta_description: 	state => state.article.meta_description,
		title: 				state => state.article.title,
		slug: 				state => state.article.slug,
		description: 		state => state.article.description,
		categorie: 			state => state.article.categorie,
		auteur: 			state => state.article.auteur,
		tags: 				state => state.article.tags,
		img_catego: 		state => state.article.img_catego,
		fa_image: 			state => state.article.fa_image,
		fa_title: 			state => state.article.fa_title,
		fa_description: 	state => state.article.fa_description,
		contenu	: 			state => state.article.contenu,
		count: 				state => state.count,
		categories: 		state => state.categories,
		auteurs: 			state => state.auteurs,
		jsonArticle: 		state => JSON.stringify(state.article),
		erreur_meta_title : 		state => state.erreurs.meta_title,
		erreur_meta_description : 	state => state.erreurs.meta_description,
		erreur_title : 				state => state.erreurs.title,
		erreur_slug : 				state => state.erreurs.slug,
		erreur_description : 		state => state.erreurs.description,
		erreur_categorie : 			state => state.erreurs.categorie,
		erreur_auteur : 			state => state.erreurs.auteur,
		erreur_tags : 				state => state.erreurs.tags,
		erreur_img_catego : 		state => state.erreurs.img_catego,
		erreur_fa_image : 			state => state.erreurs.fa_image,
		erreur_fa_title : 			state => state.erreurs.fa_title,
		erreur_fa_description : 	state => state.erreurs.fa_description,
		erreur_contenu : 			state => state.erreurs.contenu,
	},
	mutations: {
		meta_title: (state, vals) => {
		    state.article.meta_title = vals;
		},
		meta_description: (state, vals) => {
		    state.article.meta_description = vals;
		},
		title: (state, vals) => {
		    state.article.title = vals;
		    state.article.slug = tools.slug(state.article.title);
		},
		slug: (state, vals) => {
		    state.article.slug = vals;
		},
		description: (state, vals) => {
		    state.article.description = vals;
		},
		categorie: (state, vals) => {
		    state.article.categorie = vals;
		},
		auteur: (state, vals) => {
		    state.article.auteur = vals;
		},
		tags: (state, vals) => {
		    state.article.tags = vals;
		},
		img_catego: (state, vals) => {
		    state.article.img_catego = vals;
		},
		fa_image: (state, vals) => {
		    state.article.fa_image = vals;
		},
		fa_title: (state, vals) => {
		    state.article.fa_title = vals;
		},
		fa_description: (state, vals) => {
		    state.article.fa_description = vals;
		},
		contenu : (state, vals) => {
		    state.article.contenu  = vals;
		},
		increment (state) {
			state.count += 1
		},
		test(state, response) {
			console.log("test !!", response);
		},
		categories(state, vals) {
			console.log("changement categos :",vals);
			state.categories = vals;
		},
		auteurs(state, vals) {
			console.log("changement auteurs :",vals);
			state.auteurs = vals;
		},
		controllerMetaTitle : (state, vals) => {
			let test = validation.meta_title(state.article.meta_title);
		    state.erreurs.meta_title.valide = test.valide;
		    state.erreurs.meta_title.erreurs = test.erreurs;
		},
		controllerMetaDescription : (state, vals) => {
			let test = validation.meta_description(state.article.meta_description);
		    state.erreurs.meta_description.valide = test.valide;
		    state.erreurs.meta_description.erreurs = test.erreurs;
		},
		controllerTitle : (state, vals) => {
			let test = validation.title(state.article.title);
		    state.erreurs.title.valide = test.valide;
		    state.erreurs.title.erreurs = test.erreurs;
		},
		controllerSlug : (state, vals) => {
			let test = validation.slug(state.article.slug);
		    state.erreurs.slug.valide = test.valide;
		    state.erreurs.slug.erreurs = test.erreurs;
		},
		controllerDescription : (state, vals) => {
			let test = validation.description(state.article.description);
		    state.erreurs.description.valide = test.valide;
		    state.erreurs.description.erreurs = test.erreurs;
		},
		controllerCategorie : (state, vals) => {
			let test = validation.categorie(state.article.categorie);
		    state.erreurs.categorie.valide = test.valide;
		    state.erreurs.categorie.erreurs = test.erreurs;
		},
		controllerAuteur : (state, vals) => {
			let test = validation.auteur(state.article.auteur);
		    state.erreurs.auteur.valide = test.valide;
		    state.erreurs.auteur.erreurs = test.erreurs;
		},
		controllerTags : (state, vals) => {
			let test = validation.tags(state.article.tags);
		    state.erreurs.tags.valide = test.valide;
		    state.erreurs.tags.erreurs = test.erreurs;
		},
		controllerImgCatego : (state, vals) => {
			let test = validation.img_catego(state.article.img_catego);
		    state.erreurs.img_catego.valide = test.valide;
		    state.erreurs.img_catego.erreurs = test.erreurs;
		},
		controllerFaImage : (state, vals) => {
			let test = validation.fa_image(state.article.fa_image);
		    state.erreurs.fa_image.valide = test.valide;
		    state.erreurs.fa_image.erreurs = test.erreurs;
		},
		controllerFaTitle : (state, vals) => {
			let test = validation.fa_title(state.article.fa_title);
		    state.erreurs.fa_title.valide = test.valide;
		    state.erreurs.fa_title.erreurs = test.erreurs;
		},
		controllerFaDescription : (state, vals) => {
			let test = validation.fa_description(state.article.fa_description);
		    state.erreurs.fa_description.valide = test.valide;
		    state.erreurs.fa_description.erreurs = test.erreurs;
		},
		controllerContenu : (state, vals) => {
			let test = validation.contenu(state.article.contenu);
		    state.erreurs.contenu.valide = test.valide;
		    state.erreurs.contenu.erreurs = test.erreurs;
		},
		article(state, vals) {
			console.log("changement articles :",vals);
			state.article.meta_title			=	"",
			state.article.meta_description		=	"",
			state.article.title 				=	"",
			state.article.slug 					=	"",	            
			state.article.description 			=	"",
			state.article.categorie 			=	"cat3",
			state.article.auteur 				=	"",
			state.article.tags 					=	[],
			state.article.img_catego	  		=	"",
			state.article.fa_image 				=	"",
			state.article.fa_title 				=	"",
			state.article.fa_description		=	""  
		},
	},
	actions:{
		init({ dispatch, commit, state }){
	    	var self = this;
	    	let promises = [
	    		dispatch('initCategories'),
				dispatch('initAuteurs')
	    	];

			axios.all(promises)
		    .then(function () {
		    	dispatch('initData'); 
		    })
			.catch(function (error) {
				console.log("erreur !");
			});
		},
		initData({ commit, state }){
			return axios.get('https://jsonplaceholder.typicode.com/posts')
				.then(function (response) {
					commit('article',"data ok");				
				})
				.catch(function (error) {	
					commit('test',"data erreur");	
				});
		},
		initCategories({ commit, state }){
			return axios.get('https://jsonplaceholder.typicode.com/posts')
				.then(function (response) {
					commit('categories',["cat1", "cat2", "cat3"]);				
				})
				.catch(function (error) {	
					commit('test',"catego erreur");	
				});
		},
		initAuteurs({ commit, state }){
			return axios.get('https://jsonplaceholder.typicode.com/posts')
				.then(function (response) {
					commit('auteurs',["personneA", "personneB"]);				
				})
				.catch(function (error) {	
					commit('test',"personne erreur");	
				});
		}
	}
})

export default store
