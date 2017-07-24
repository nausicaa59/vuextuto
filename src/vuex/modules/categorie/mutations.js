import {validationCategorie} from '../../../lib/Validations';
import * as tools from '../../../lib/tools';

export const mutations = {
	editIdCategorie: (state, vals) => {
	    state.idCategorie = vals;
	},
	meta_title: (state, vals) => {
	    state.categorie.meta_title = vals;
	},
	meta_description: (state, vals) => {
	    state.categorie.meta_description = vals;
	},
	title: (state, vals) => {
	    state.categorie.title = vals;
	    state.categorie.slug = tools.slug(state.categorie.title);
	},
	slug: (state, vals) => {
	    state.categorie.slug = vals;
	},
	description: (state, vals) => {
	    state.categorie.description = vals;
	},
	controllerMetaTitle : (state, vals) => {
		let test = validationCategorie.meta_title(state.categorie.meta_title);
	    state.erreurs.meta_title.valide = test.valide;
	    state.erreurs.meta_title.erreurs = test.erreurs;
	},
	controllerMetaDescription : (state, vals) => {
		let test = validationCategorie.meta_description(state.categorie.meta_description);
	    state.erreurs.meta_description.valide = test.valide;
	    state.erreurs.meta_description.erreurs = test.erreurs;
	},
	controllerTitle : (state, vals) => {
		let test = validationCategorie.title(state.categorie.title);
	    state.erreurs.title.valide = test.valide;
	    state.erreurs.title.erreurs = test.erreurs;
	},
	controllerSlug : (state, vals) => {
		let test = validationCategorie.slug(state.categorie.slug);
	    state.erreurs.slug.valide = test.valide;
	    state.erreurs.slug.erreurs = test.erreurs;
	},
	controllerDescription : (state, vals) => {
		let test = validationCategorie.description(state.categorie.description);
	    state.erreurs.description.valide = test.valide;
	    state.erreurs.description.erreurs = test.erreurs;
	},	
	categorie(state, vals) {
		state.categorie.meta_title				=	vals.meta_title;
		state.categorie.meta_description		=	vals.meta_description;
		state.categorie.title 					=	vals.title;
		state.categorie.slug 					=	vals.slug;	            
		state.categorie.description 			=	vals.description;
	}
}
