import {generateurCodeJS} from '../../../lib/generateHTML';

export default {
	idCategorie				:	state => state.idCategorie,
	meta_title 				:	state => state.categorie.meta_title,
	meta_description 		:	state => state.categorie.meta_description,
	title 					:	state => state.categorie.title,
	slug 					:	state => state.categorie.slug,
	description 			:	state => state.categorie.description,
	jsonCategorie 			:	state => JSON.stringify(state.categorie),
	erreur_meta_title 		:	state => state.erreurs.meta_title,
	erreur_meta_description :	state => state.erreurs.meta_description,
	erreur_title 			:	state => state.erreurs.title,
	erreur_slug 			:	state => state.erreurs.slug,
	erreur_description 		:	state => state.erreurs.description,
	output_json      		:   (state, getters, rootState) => generateurCodeJS(JSON.stringify(state)),
}