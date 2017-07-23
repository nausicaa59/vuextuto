export const mutations = {
	changeSearchId: (state, vals) => {
	    state.search.id = vals;
	},
	changeSearchTitle: (state, vals) => {
	    state.search.title = vals;
	},
	changeSearchDescription: (state, vals) => {
	    state.search.description = vals;
	},
	changeArticles: (state, vals) => {
	    state.articles = vals;
	}
}
