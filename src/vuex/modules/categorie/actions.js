import {api} from '../../../lib/api-cms'
import axios from 'axios';
import * as tools from '../../../lib/tools';

export const init = ({ dispatch, commit, getters }) => {
    if(getters.idCategorie)
    {
        axios.get(api.categorie.get)
            .then(function (response) {
                commit('categorie',JSON.parse(response.data));
                dispatch('controllerAll');
            })
            .catch(function (error) {   
                console.log(error);  
            });        
    }
}


export const controllerAll = ({ commit }) => {
    commit('controllerMetaTitle',[]);
    commit('controllerMetaDescription',[]);
    commit('controllerTitle',[]);
    commit('controllerSlug',[]);
    commit('controllerDescription',[]);
}



export const create = ({ commit, getters }) => {
    var params = new URLSearchParams();
    params.append('contenu', JSON.stringify(getters.jsonCategorie));

    axios.post(api.categorie.post, params)
    .then(function (response) {
        console.log("create", response);
    })
    .catch(function (error) {

    }); 
}


export const update = ({ commit, getters }) => {
    var params = new URLSearchParams();
    params.append('contenu', JSON.stringify(getters.jsonCategorie));
    params.append('id', JSON.stringify(getters.idCategorie));

    axios.post(api.categorie.update, params)
    .then(function (response) {
        console.log("update", response);
    })
    .catch(function (error) {

    }); 
}