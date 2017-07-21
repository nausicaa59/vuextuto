import {validation} from '../Validations';
import * as tools from '../tools';

export const mutations = {
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
	test(state, response) {
		console.log("test !!", response);
	},
	categories(state, vals) {
		state.categories = vals;
	},
	auteurs(state, vals) {
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
	statusFaImage : (state, vals) => {
	    state.erreurs.fa_image.valide = vals.valide;
	    state.erreurs.fa_image.erreurs = vals.erreurs;
	},
	statusImgCatego : (state, vals) => {
	    state.erreurs.img_catego.valide = vals.valide;
	    state.erreurs.img_catego.erreurs = vals.erreurs;
	},		
	article(state, vals) {
		state.article.meta_title			=	vals.meta_title,
		state.article.meta_description		=	vals.meta_description,
		state.article.title 				=	vals.title,
		state.article.slug 					=	vals.slug,	            
		state.article.description 			=	vals.description,
		state.article.categorie 			=	vals.categorie,
		state.article.auteur 				=	vals.auteur,
		state.article.tags 					=	vals.tags,
		state.article.img_catego	  		=	vals.img_catego,
		state.article.fa_image 				=	vals.fa_image,
		state.article.fa_title 				=	vals.fa_title,
		state.article.fa_description		=	vals.fa_description  
		state.article.contenu				=	vals.contenu  
	},
	load_img_catego(state, vals) {
		state.load.img_catego.start = vals.start;
		state.load.img_catego.pourc = vals.pourc;
	},
	load_fa_image(state, vals) {
		state.load.fa_image.start = vals.start;
		state.load.fa_image.pourc = vals.pourc;
	},
	contenuAddImageBlock(state, vals) {
		state.article.contenu.splice(vals,0,{
        	type:"image",
        	src:"",
        	auteur:"",
        	auteurUrl:"",
        	label:"",
        	start : false, 
        	pourc : 0,
        	valide:false,
        	erreurs:[]
        });
	},
	contenuAddTextBlock(state,vals) {
		state.article.contenu.splice(vals,0,{
        	type:"text",
        	src:"",
        });
	},
	contenuDeleteBlock(state, vals) {
		state.article.contenu.splice(vals, 1);
	},
	contenuEditTextBlock(state,vals) {
		state.article.contenu[vals.index].src = vals.value;
	},
	contenuEditImageBlockSrc(state,vals) {
		state.article.contenu[vals.index].src = vals.src;
	},
	contenuEditImageBlockAuteur(state,vals) {
		state.article.contenu[vals.index].auteur = vals.auteur;
	},
	contenuEditImageBlockAuteurUrl(state,vals) {
		state.article.contenu[vals.index].auteurUrl = vals.auteurUrl;
	},
	contenuEditImageBlockLabel(state,vals) {
		state.article.contenu[vals.index].label = vals.label;
	},
	contenuEditImageBlockLoadStatus(state,vals) {
		state.article.contenu[vals.index].start = vals.start;
		state.article.contenu[vals.index].pourc = vals.pourc;
	},
	contenuEditImageBlockLoadError(state,vals) {
		state.article.contenu[vals.index].valide = vals.valide;
		state.article.contenu[vals.index].erreurs = vals.erreurs;
	},
	composerAvailableAction(state,vals) {
		state.composer.availableAction = vals;
	},
}
