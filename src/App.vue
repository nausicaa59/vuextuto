<template>
    <div id="app">
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
                        <div class="form-group" v-bind:class="classObject(erreur_title.valide)">                    
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
                        <div class="form-group" v-bind:class="classObject(erreur_categorie.valide)">                    
                            <label>Catégorie</label>
                            <select class="form-control"  v-model="categorie">
                                <option :value="catego" v-for="catego in categories">{{catego}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="classObject(erreur_auteur.valide)">                    
                            <label>Auteur</label>
                            <select class="form-control"  v-model="auteur">
                                <option :value="item_auteur" v-for="item_auteur in auteurs">{{item_auteur}}</option>
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
                        <div class="form-group" v-bind:class="classObject(erreur_description.valide)">                  
                            <label>Description</label>
                            <textarea class="form-control" v-model="description"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
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
                        <div class="form-group" v-bind:class="classObject(erreur_meta_title.valide)">                
                            <label>Méta Title</label>
                            <input type="text" class="form-control"  v-model="meta_title">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group" v-bind:class="classObject(erreur_meta_description.valide)">             
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
                        <div class="form-group" v-bind:class="classObject(erreur_fa_title.valide)">                 
                            <label>Title</label>
                            <input type="text" class="form-control" v-model="fa_title">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group" v-bind:class="classObject(erreur_fa_description.valide)">          
                            <label>Description</label>
                            <textarea class="form-control" v-model="fa_description"></textarea>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input-upload-file :chemin="fa_image" type="mavaleur" @toggle="updateImgCatego($event)"></input-upload-file>
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
name: 'app',
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
                return this.$store.getters.meta_title;
            },
            set (value) {
                this.$store.commit('meta_title', value);
                this.$store.commit('controllerMetaTitle', value);
            }
        },
        meta_description: {
            get () {
                return this.$store.getters.meta_description;
            },
            set (value) {
                this.$store.commit('meta_description', value);
                this.$store.commit('controllerMetaDescription', value);
            }
        },
        title: {
            get () {
                return this.$store.getters.title;
            },
            set (value) {
                this.$store.commit('title', value);
                this.$store.commit('controllerTitle', value);
            }
        },
        slug: {
            get () {
                return this.$store.getters.slug;
            },
            set (value) {
                
            }
        },
        description: {
            get () {
                return this.$store.getters.description;
            },
            set (value) {
                this.$store.commit('description', value);
                this.$store.commit('controllerDescription', value);
            }
        },
        categorie: {
            get () {
                return this.$store.getters.categorie;
            },
            set (value) {
                this.$store.commit('categorie', value);
                this.$store.commit('controllerCategorie', value);
            }
        },
        auteur: {
            get () {
                return this.$store.getters.auteur;
            },
            set (value) {
                this.$store.commit('auteur', value);
                this.$store.commit('controllerAuteur', value);
            }
        },
        tags: {
            get () {
                return this.$store.getters.tags;
            },
            set (value) {
                this.$store.commit('tags', value);
                this.$store.commit('controllerTags', value);
            }
        },
        img_catego: {
            get () {
                return this.$store.getters.img_catego;
            },
            set (value) {
                this.$store.commit('img_catego', value);
                this.$store.commit('controllerImgCatego', value);
            }
        },
        fa_title: {
            get () {
                return this.$store.getters.fa_title;
            },
            set (value) {
                this.$store.commit('fa_title', value);
                this.$store.commit('controllerFaTitle', value);
            }
        },
        fa_description: {
            get () {
                return this.$store.getters.fa_description;
            },
            set (value) {
                this.$store.commit('fa_description', value);
                this.$store.commit('controllerFaDescription', value);
            }
        },
        contenu: {
            get () {
                return this.$store.getters.contenu;
            },
            set (value) {
                this.$store.commit('contenu', value)
            }
        },
        ...mapGetters([
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
            "erreur_contenu",
            "fa_image"
        ])
    },
    created() {
        console.log("initialisation !");
        this.$store.dispatch('init');
    },
    methods : {
        btCliquer : function(){
            this.afficher = !this.afficher;
        },
        test : function(val){
            return "ok";
        },
        classObject: function (isValide) {
            return {
                'valide': isValide,
                'err': !isValide,
            }
        },
        updateImgCatego: function(a) {
            console.log(a);
            this.$store.commit('fa_image', a);
            this.$store.commit('controllerFaImage', a);
        },
    }
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;

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
