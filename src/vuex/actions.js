import {api} from '../configs'
import axios from 'axios';
import * as tools from '../tools';

export const init = ({ dispatch, commit, state }) => {
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
}

export const initData = ({ commit, state }) => {
	return axios.get(api.article.get)
		.then(function (response) {
			commit('article',response.data);				
		})
		.catch(function (error) {	
			commit('test',"data erreur");	
		});
}

export const initCategories = ({ commit, state }) => {
	return axios.get(api.categorie.get)
		.then(function (response) {
			commit('categories',response.data);				
		})
		.catch(function (error) {	
			commit('test',"catego erreur");	
		});
}

export const initAuteurs = ({ commit, state }) => {
	return axios.get(api.auteur.get)
		.then(function (response) {
			commit('auteurs',response.data);				
		})
		.catch(function (error) {	
			commit('test',"personne erreur");	
		});
}

export const uploadFaImage = ({ commit, state }, val) => {
	commit('load_fa_image',{start:true, pour:0});
	
    axios.post(api.image.post, val)
    .then(function (response) {
        commit('fa_image',response.data.src);
        commit('load_fa_image',{start:false, pour:100});
        commit('statusFaImage', {valide:true,erreurs:[]});
    })
    .catch(function (error) {
    	commit('load_fa_image',{start:false, pour:100});
        commit('statusFaImage', {
        	valide:false, 
        	erreurs:["Erreur ajax, impossible d'accéder à l'api"]
        })
    });	
}

export const uploadImgCatego = ({ commit, state }, val) => {
	commit('load_img_catego',{start:true, pour:0});

    axios.post(api.image.post, val)
    .then(function (response) {
    	commit('img_catego',response.data.src);
        commit('load_img_catego',{start:false, pour:100});
        commit('statusImgCatego', {valide:true,erreurs:[]});
    })
    .catch(function (error) {
    	commit('load_img_catego',{start:false, pour:100});
        commit('statusImgCatego', {valide:false, erreurs:["Erreur ajax, impossible d'accéder à l'api"]})
    });	
}


export const uploadImgContenu = ({ commit, state }, val) => {
	commit('contenuEditImageBlockLoadStatus', {
		index: val.index, 
		start:true, 
		pour:0
	});

    commit('contenuEditImageBlockLoadError', {
    	index: val.index,
    	valide:true, 
    	erreurs:[]
    });

    axios.post(api.image.post, val.data)
    .then(function (response) {
    	console.log("reponse reçu11...");
        commit('contenuEditImageBlockSrc', {
        	index: val.index, 
        	src:response.data.src
        });
    })
    .catch(function (error) {
        commit('contenuEditImageBlockLoadError', {
        	index: val.index,
        	valide:false, 
        	erreurs:["Erreur ajax, impossible d'accéder à l'api"]
        });
    })
    .then(function () {
    	console.log("En tout état de cause...");
    	commit('contenuEditImageBlockLoadStatus',{
    		index: val.index, 
    		start:false, 
    		pour:100
    	});
    });	
}
