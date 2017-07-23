<template>
    <div id="listArticles">
        <div id="data_table">
            <div class="container">
                Nb de resultats trouvé : {{ articles.length }}
                <table id="data_table">
                    <thead>
                        <th>ID</th>
                        <th>Titre</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text"  v-model="searchId">
                            </td>
                            <td>
                                <input type="text" placeholder="Recherche dans les titres" v-model="searchTitle">
                            </td>
                            <td>
                                <input type="text" placeholder="Recherche dans les body" v-model="searchBody">
                            </td>
                            <td></td>
                        </tr>
                        <tr class="item" v-for="(post, index) in articles">
                            <td v-on:click="goArticle(post.id)" v-html="post.id"></td>
                            <td v-on:click="goArticle(post.id)" v-html="post.title"></td>
                            <td v-on:click="goArticle(post.id)" v-html="post.description"></td>
                            <td>
                                <a class="btn btn-primary btn-sm">Editer</a>
                                <a v-on:click="supprimer(post.id)" class="btn btn-danger btn-sm">Supprimer</a>
                            </td>
                        </tr>
                        <tr class="nullResult" v-if="articles.length == 0">
                            <td colspan="4">
                                Aucun résulats...
                            </td>
                        </tr>                    
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'listArticles',
    data () {
        return {

        }
    },
    components: {
    },
    computed : {
        ...mapGetters("listArticles", [
            "articles"
        ]),
        searchTitle : {
            get () {
                return this.$store.getters['listArticles/searchTitle'];
            },
            set (value) {
                this.$store.commit('listArticles/changeSearchTitle', value);
                this.search();
            }            
        },
        searchBody : {
            get () {
                return this.$store.getters['listArticles/searchDescription'];
            },
            set (value) {
                this.$store.commit('listArticles/changeSearchDescription', value);
                this.search();
            }            
        },
        searchId : {
            get () {
                return this.$store.getters['listArticles/searchId'];
            },
            set (value) {
                this.$store.commit('listArticles/changeSearchId', value);
                this.search();
            }            
        },
    },
    created() {
        this.search();
    },
    methods : {
        ...mapActions("listArticles", [
            "search"
        ]),
        goArticle : function(id){
            this.$router.push({ name: 'article'});
        }
    }
}
</script>

<style lang="less">
#listArticles
{
    margin-bottom: 20px;
    position:relative;

    #data_table
    {
        width:100%;

        table
        {
            border-left:1px solid #d1d1d1;
            border-right:1px solid #d1d1d1;            
        }


        input
        {
            width:100%;
        }

        th, td
        {
            padding:15px 10px;
            border-right:1px solid #d1d1d1;
            border-bottom:1px solid #d1d1d1;

            &:last-child
            {
                border-right:0px;
            }
        }

        th
        {
            background-color: #337ab7;
            color:white;

            &:nth-child(0n+1)
            {
                width:50px; 
                text-align: center;                
            }

            &:nth-child(0n+2)
            {
                width:25%;
            }

            &:nth-child(0n+3)
            {
                width:55%;
            }
        }

        tr
        {
            cursor:pointer;

            &:hover
            {
                background-color:#f1f1f1;
            }

            td
            {
                .souligner
                {
                    font-weight: bold;
                    color:red;
                    text-decoration: underline;
                }

                &:nth-child(0n+1)
                {
                    font-weight: bold;
                    text-align: center;                
                }
            }

            &.nullResult
            {
                background-color: #f2dede;
                color:#a94442;
                font-weight: bold;
                text-align: center;
            }
        }
    }
}
</style>
