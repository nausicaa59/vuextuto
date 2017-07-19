<template>
    <div id="app">
        <article-form v-if="this.display_form"></article-form>
        <article-composer v-if="this.display_composer"></article-composer>
        <div class="bar-tools">
            <ul>
                <li v-on:click="call_save()" class="bt_save">
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                </li>
                <li v-on:click="call_form()" class="bt_view" v-bind:class="{ active: display_form }">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </li>
                <li v-on:click="call_composer()" class="bt_view" v-bind:class="{ active: display_composer }">
                    <i class="fa fa-magic" aria-hidden="true"></i>
                </li>
                <li v-on:click="call_preview()" class="bt_view" v-bind:class="{ active: display_preview }">
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </li>
                <li v-on:click="call_code()" class="bt_view" v-bind:class="{ active: display_code }">       
                    <i class="fa fa-code" aria-hidden="true"></i>
                </li>               
            </ul>
        </div>
    </div>
</template>

<script>
import ArticleForm from './ArticleForm.vue';
import ArticleComposer from './ArticleComposer.vue'; 
import { mapGetters } from 'vuex'


export default {
    name: 'app',
    data () {
        return {
            display_composer:false,
            display_code:false,
            display_preview:false,
            display_form:true,
        }
    },
    components: {
        ArticleForm,
        ArticleComposer
    },
    computed : {
        ...mapGetters([
            "jsonArticle"
        ])
    },
    created() {
        console.log("init appli principal !")
        this.$store.dispatch('init');
    },
    methods : {
        call_preview : function(){
            this.display_form = false;
            this.display_composer = false;
            this.display_code = false;
            this.display_preview = true;
        },
        call_code : function(){
            this.display_form = false;
            this.display_composer = false;
            this.display_code = true;
            this.display_preview = false;
        },
        call_composer : function(){
            this.display_form = false;
            this.display_composer = true;
            this.display_code = false;
            this.display_preview = false;           
        },
        call_form : function(){
            this.display_form = true;
            this.display_composer = false;
            this.display_code = false;
            this.display_preview = false;
        },
        call_save : function(){
            console.log(this.jsonArticle);
        },
    }
}
</script>

<style lang="less">
.bar-tools
{
    position:fixed;
    top:20%;
    left:10px;
    z-index:1000;

    ul
    {
        margin:0px;
        padding: 0px;
        list-style:none;

        li
        {
            margin:0px;
            padding: 0px; 
            display:block;
            margin-bottom: 20px;
            text-align: center;
            width:70px;
            height:70px;
            border-radius: 300px;
            font-size: 35px;
            padding-top:10px;
            cursor:pointer;

            &.bt_save
            {
                background-color: #5cb85c;
                color:white;
            }

            &.bt_view
            {
                background-color: #f1f1f1;
                color:black;
            }

            &.active
            {
                background-color:#5bc0de;
                color:white;
            }
        }
    }
}
</style>
