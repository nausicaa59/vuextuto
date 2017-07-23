import {api} from '../../../lib/api-cms'
import axios from 'axios';


export const search = ({ commit, getters }) => {
    var params = new URLSearchParams();
    params.append('search', JSON.stringify(getters.search));

    axios.post(api.article.search, params)
	.then(function (response) {
		commit('changeArticles',response.data);
	})
	.catch(function (error) {	
		console.log("erreur !");
	});
}
