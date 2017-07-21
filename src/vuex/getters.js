import {generateurHTML, generateurCodeHTML, generateurCodeJS} from './generateHTML';

export const meta_title 				=	state => state.article.meta_title;
export const meta_description 			= 	state => state.article.meta_description;
export const title 						=	state => state.article.title;
export const slug 						= 	state => state.article.slug;
export const description 				= 	state => state.article.description;
export const categorie 					= 	state => state.article.categorie;
export const auteur 					= 	state => state.article.auteur;
export const tags 						= 	state => state.article.tags;
export const img_catego 				= 	state => state.article.img_catego;
export const fa_image 					= 	state => state.article.fa_image;
export const fa_title 					= 	state => state.article.fa_title;
export const fa_description 			= 	state => state.article.fa_description;
export const contenu					= 	state => state.article.contenu;
export const contenuByIndex 			= 	state => index => state.article.contenu[index];
export const count 						= 	state => state.count;
export const categories 				= 	state => state.categories;
export const auteurs 					= 	state => state.auteurs;
export const jsonArticle 				= 	state => JSON.stringify(state.article);
export const erreur_meta_title 			= 	state => state.erreurs.meta_title;
export const erreur_meta_description 	= 	state => state.erreurs.meta_description;
export const erreur_title 				= 	state => state.erreurs.title;
export const erreur_slug 				= 	state => state.erreurs.slug;
export const erreur_description 		= 	state => state.erreurs.description;
export const erreur_categorie 			= 	state => state.erreurs.categorie;
export const erreur_auteur 				= 	state => state.erreurs.auteur;
export const erreur_tags 				= 	state => state.erreurs.tags;
export const erreur_img_catego 			= 	state => state.erreurs.img_catego;
export const erreur_fa_image 			= 	state => state.erreurs.fa_image;
export const erreur_fa_title 			= 	state => state.erreurs.fa_title;
export const erreur_fa_description 		= 	state => state.erreurs.fa_description;
export const erreur_contenu 			= 	state => state.erreurs.contenu;
export const load_img_catego 			= 	state => state.load.img_catego;
export const load_fa_image 				= 	state => state.load.fa_image;
export const output_html                =   state => generateurHTML(state.article.contenu);
export const output_src                 =   state => generateurCodeHTML(state.article.contenu);
export const output_jsonArticle         =   state => generateurCodeJS(JSON.stringify(state.article));




