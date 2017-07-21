<template>
    <div id="app">
        <article-form v-if="this.display_form"></article-form>
        <article-composer v-if="this.display_composer"></article-composer>
        <div class="container">
            <div class="row" v-if="display_preview">
                <div class="col-md-12 output">
                    <div class="zone_rendu" v-html="output_html"></div>
                </div>
            </div>
            <div class="row" v-if="display_code">
                <div class="col-md-12 output">
                    <div class="zone_rendu code">
                        <pre><code type="html">{{output_jsonArticle}}</code></pre>
                    </div>
                    <div class="zone_rendu code">
                        <pre><code type="html">{{output_src}}</code></pre>
                    </div>
                </div>
            </div>
        </div>
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
import { mapGetters, mapActions } from 'vuex'


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
            "jsonArticle",
            "output_html",
            "output_src",
            "output_jsonArticle"
        ])
    },
    created() {
        console.log("init appli principal !")
        this.init();
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
            this.save();
        },
        ...mapActions([
            "init",
            "save",
        ]),
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

.output
{
    position: relative;

    .bt-switch
    {
        position: absolute;
        top:0px;
        right: 15px;
        background-color:#ccc;
    }

    .zone_rendu
    {
        border:1px solid #d1d1d1;
        padding:6px 12px;
        width: 100%;
        min-height: 700px;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;

        img
        {
            max-width: 100%;
        }

        p
        {
            font-size: 20px;
            padding-bottom:20px;
            color:#333;
        }


        h2
        {
            padding-top:30px;
            padding-bottom:20px;
            font-size: 24px;
            font-weight: bold;
            color: black;
            text-transform: uppercase;
        }

        .image-conteneur
        {
            padding-bottom:45px;
            padding-top:20px;

            img
            {
                width: 100%;
            }

            .info
            {
                margin-top:20px;
                border-left:1px solid black;
                padding-left:30px;
                color:#555;

                .description
                {
                }
                
                .credit
                {
                    text-transform: uppercase;
                    padding-top:15px;

                    a
                    {
                        color:#555;
                        text-decoration: none;
                        font-weight: bold;
                    }
                }
            }
        }

        .publier-le
        {
            font-style: italic;
            color:#555;
            font-size: 16px;

            a
            {
                color:black;
                font-weight: bold;
            }
        }

        &.code
        {
            padding:0px;
            overflow-x: scroll;


            pre
            {
                width:100000px;
                margin-bottom: 0px!important;
                background-color: black;
                color:white;
                border:0px;
                font-size: 18px;
            }            
        }
    }       
}
</style>
