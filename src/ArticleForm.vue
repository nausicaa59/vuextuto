<template>
    <div id="articleForm">
        <div class="container">
            <div class="row sectionSeparateur">
                <div class="col-md-12">
                    <h2>infos Général de l'article</h2>
                </div>
            </div>
            <!-- Formulaire infos -->
            <div class="infos_formulaire">
                <!-- infos Générale -->
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="classInError(erreur_title.valide)">                    
                            <label>Titre</label>
                            <input type="text" class="form-control" v-model="title">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">                    
                            <label>Slug</label>
                            <input type="text" class="form-control" v-model="slug" disabled>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="classInError(erreur_categorie.valide)">                    
                            <label>Catégorie</label>
                            <select class="form-control"  v-model="categorie">
                                <option :value="catego.slug" v-for="catego in categories">{{catego.nom}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="classInError(erreur_auteur.valide)">                    
                            <label>Auteur</label>
                            <select class="form-control"  v-model="auteur">
                                <option :value="item_auteur.slug" v-for="item_auteur in auteurs">{{item_auteur.nom}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">                    
                            <label>Tags</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="classInError(erreur_description.valide)">                  
                            <label>Description</label>
                            <textarea class="form-control" v-model="description"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input-upload-file
                            :preview="true"
                            :statusLoad="load_img_catego" 
                            :source="img_catego" 
                            :errSource="erreur_img_catego" 
                            :uploader="UploadCategoImage">
                        </input-upload-file>
                    </div>
                </div>
                <!-- SEO - Général -->
                <div class="row sectionSeparateur">
                    <div class="col-md-12">
                        <h2>Seo - Général</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group" v-bind:class="classInError(erreur_meta_title.valide)">                
                            <label>Méta Title</label>
                            <input type="text" class="form-control"  v-model="meta_title">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group" v-bind:class="classInError(erreur_meta_description.valide)">             
                            <label>Méta-Description</label>
                            <textarea class="form-control" v-model="meta_description"></textarea>
                        </div>
                    </div>
                </div>
                <!-- SEO - Facebook -->
                <div class="row sectionSeparateur">
                    <div class="col-md-12">
                        <h2>Seo - Facebook</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group" v-bind:class="classInError(erreur_fa_title.valide)">                 
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="fa_title">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="classInError(erreur_fa_description.valide)">          
                            <label>Description</label>
                            <textarea class="form-control" v-model="fa_description"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input-upload-file
                            :preview="true" 
                            :source="fa_image" 
                            :statusLoad="load_fa_image"
                            :errSource="erreur_fa_image" 
                            :uploader="UploadfaImage">
                        </input-upload-file>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputUploadFile from './components/InputUploadFile.vue';


export default {
name: 'ArticleForm',
    data () {
        return {
            afficher:false
        }
    },
    components: {
        InputUploadFile
    },
    computed : {
        meta_title: {
            get () {
                return this.$store.getters['article/meta_title'];
            },
            set (value) {
                this.$store.commit('article/meta_title', value);
                this.$store.commit('article/controllerMetaTitle', value);
            }
        },
        meta_description: {
            get () {
                return this.$store.getters['article/meta_description'];
            },
            set (value) {
                this.$store.commit('article/meta_description', value);
                this.$store.commit('article/controllerMetaDescription', value);
            }
        },
        title: {
            get () {
                return this.$store.getters['article/title'];
            },
            set (value) {
                this.$store.commit('article/title', value);
                this.$store.commit('article/controllerTitle', value);
            }
        },
        slug: {
            get () {
                return this.$store.getters['article/slug'];
            },
            set (value) {
                
            }
        },
        description: {
            get () {
                console.log("ok");
                return this.$store.getters['article/description'];
            },
            set (value) {
                this.$store.commit('article/description', value);
                this.$store.commit('article/controllerDescription', value);
            }
        },
        categorie: {
            get () {
                return this.$store.getters['article/categorie'];
            },
            set (value) {
                this.$store.commit('article/categorie', value);
                this.$store.commit('article/controllerCategorie', value);
            }
        },
        auteur: {
            get () {
                return this.$store.getters['article/auteur'];
            },
            set (value) {
                this.$store.commit('article/auteur', value);
                this.$store.commit('article/controllerAuteur', value);
            }
        },
        tags: {
            get () {
                return this.$store.getters['article/tags'];
            },
            set (value) {
                this.$store.commit('article/tags', value);
                this.$store.commit('article/controllerTags', value);
            }
        },
        img_catego: {
            get () {
                return this.$store.getters['article/img_catego'];
            },
            set (value) {
                this.$store.commit('article/img_catego', value);
                this.$store.commit('article/controllerImgCatego', value);
            }
        },
        fa_title: {
            get () {
                return this.$store.getters['article/fa_title'];
            },
            set (value) {
                this.$store.commit('article/fa_title', value);
                this.$store.commit('article/controllerFaTitle', value);
            }
        },
        fa_description: {
            get () {
                return this.$store.getters['article/fa_description'];
            },
            set (value) {
                this.$store.commit('article/fa_description', value);
                this.$store.commit('article/controllerFaDescription', value);
            }
        },
        ...mapGetters("article",[
            "categories",
            "auteurs",
            "erreur_meta_title",
            "erreur_meta_description",
            "erreur_title",
            "erreur_slug",
            "erreur_description",
            "erreur_categorie",
            "erreur_auteur",
            "erreur_tags",
            "erreur_img_catego",
            "erreur_fa_image",
            "erreur_fa_title",
            "erreur_fa_description",
            "fa_image",
            "img_catego",
            "load_img_catego",
            "load_fa_image"
        ])
    },
    beforeCreate() {
        console.log("initialisation1 form...");        
    },
    created() {
        console.log("initialisation2 form...");        
    },
    destroyed() {
        console.log("destruction form...");        
    },
    methods : {
        btCliquer : function(){
            this.afficher = !this.afficher;
        },
        UploadfaImage : function(val){
            this.$store.dispatch('article/uploadFaImage', val);
        },
        UploadCategoImage : function(val){
            this.$store.dispatch('article/uploadImgCatego', val);
        },
        classInError: function (isValide) {
            return {
                'valide': isValide,
                'err': !isValide,
            }
        },
    }
}
</script>

<style lang="less" scoped>
#articleForm {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;

    .sectionSeparateur
    {
        h2
        {
            margin-top:60px;
            margin-bottom: 50px;
            padding-bottom:10px;
            border-bottom:4px solid #d1d1d1;
        }

        &:first-child
        {
            h2
            {
                margin-top: 0px;
            }
        }
    }

    .infos_formulaire
    {
        .form-group
        {
            margin-bottom:30px;

            textarea
            {
                height: 200px;
            }

            &.err
            {
                input,textarea,select {
                    border: 1px solid red;
                }
            }

            &.valide
            {
                input,textarea,select {
                    /*border: 1px solid green;*/
                }                
            }
        }
    }
}
</style>
