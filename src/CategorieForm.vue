<template>
    <div id="categorieForm">
        <div class="container">
            <div class="row sectionSeparateur">
                <div class="col-md-12">
                    <h2>Catégorie</h2>
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
                        <div class="form-group" v-bind:class="classInError(erreur_slug.valide)">                    
                            <label>Slug</label>
                            <input type="text" class="form-control" v-model="slug" disabled>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group" v-bind:class="classInError(erreur_description.valide)">                  
                            <label>Description</label>
                            <textarea class="form-control" v-model="description"></textarea>
                        </div>
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
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
name: 'CategorieForm',
    data () {
        return {
            
        }
    },
    components: {
        
    },
    computed : {
        meta_title: {
            get () {
                return this.$store.getters['categorie/meta_title'];
            },
            set (value) {
                this.$store.commit('categorie/meta_title', value);
                this.$store.commit('categorie/controllerMetaTitle', value);
            }
        },
        meta_description: {
            get () {
                return this.$store.getters['categorie/meta_description'];
            },
            set (value) {
                this.$store.commit('categorie/meta_description', value);
                this.$store.commit('categorie/controllerMetaDescription', value);
            }
        },
        title: {
            get () {
                return this.$store.getters['categorie/title'];
            },
            set (value) {
                this.$store.commit('categorie/title', value);
                this.$store.commit('categorie/controllerTitle', value);
                this.$store.commit('categorie/controllerSlug', value);
            }
        },
        slug: {
            get () {
                return this.$store.getters['categorie/slug'];
            },
            set (value) {
                
            }
        },
        description: {
            get () {
                console.log("ok");
                return this.$store.getters['categorie/description'];
            },
            set (value) {
                this.$store.commit('categorie/description', value);
                this.$store.commit('categorie/controllerDescription', value);
            }
        },
        ...mapGetters("categorie",[
            "erreur_meta_title",
            "erreur_meta_description",
            "erreur_title",
            "erreur_slug",
            "erreur_description",
        ])
    },
    methods : {
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
#categorieForm {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    padding-bottom:200px;

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
