import _ from 'lodash';

export default {
	search : state => state.search,
	searchId :	state => state.search.id,
	searchTitle :	state => state.search.title,
	searchDescription :	state => state.search.description,
	articles :	state => {
		var ligne = [];

		for(var i in state.articles)
		{
			let clone = _.cloneDeep(state.articles[i]);
			clone.id = String(clone.id);

			if(state.search.title != ""){
				clone.title = clone.title.replace(state.search.title, "<span class='souligner'>" + state.search.title + "</span>");
			}

			if(state.search.description != ""){
				clone.description = clone.description.replace(state.search.description, "<span class='souligner'>" + state.search.description + "</span>");
			}

			if(state.search.id != ""){
				clone.id = clone.id.replace(state.search.id, "<span class='souligner'>" + state.search.id + "</span>");
			}

			ligne.push(clone);
		}

		return ligne;
	},
}