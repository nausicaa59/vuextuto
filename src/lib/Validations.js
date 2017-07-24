import approve from 'approvejs';

function formatReponse(test) {
	return {
		valide : test.approved,
		erreurs : test.errors
	};
}

export var validationArticle = {
	elements:function(a){
		return {
			valide : true,
			erreurs : []
		};
	},
	meta_title:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'La meta title est trop courte'
			}
		});

		return formatReponse(test);
	},
	meta_description:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'La meta description est trop courte'
			}
		});

		return formatReponse(test);
	},
	title:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'Le titre est trop courte'
			},
			max: {
				max:150,
				message: 'Le titre est trop long'
			},
		});

		return formatReponse(test);
	},
	slug:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'Le slug est trop court'
			}
		});

		return formatReponse(test);
	},	            
	description:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'La description est trop courte'
			}
		});

		return formatReponse(test);
	},
	categorie:function(a){
		let test = approve.value(a, {
			required: {
				required: true,
				message: "Aucune catgorie sélectionnée"
			}
		});

		return formatReponse(test);
	},
	auteur:function(a){
		let test = approve.value(a, {
			required: {
				required: true,
				message: "Aucun auteur sélectionné"
			}
		});

		return formatReponse(test);
	},
	tags:function(a){
		return {
			valide : true,
			erreurs : []
		};
	},
	img_catego:function(a){
		let test = approve.value(a, {
			url: {
				url: true,
				message: "L'image categorie n'est pas valide"
			}
		});

		return formatReponse(test);
	},
	fa_image:function(a){
		let test = approve.value(a, {
			url: {
				url: true,
				message: "L'image facebook n'est pas valide"
			}
		});

		return formatReponse(test);
	},
	fa_title:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'Le titre facebook est trop courte'
			}
		});

		return formatReponse(test);
	},
	fa_description:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'La descrition facebook est trop courte'
			}
		});

		return formatReponse(test);
	}
};


export var validationCategorie = {
	meta_title:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'La meta title est trop courte'
			}
		});

		return formatReponse(test);
	},
	meta_description:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'La meta description est trop courte'
			}
		});

		return formatReponse(test);
	},
	title:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'Le titre est trop courte'
			},
			max: {
				max:150,
				message: 'Le titre est trop long'
			},
		});

		return formatReponse(test);
	},
	slug:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'Le slug est trop court'
			}
		});

		return formatReponse(test);
	},	            
	description:function(a){
		let test = approve.value(a, {
			min: {
				min:4,
				message: 'La description est trop courte'
			}
		});

		return formatReponse(test);
	},
}

