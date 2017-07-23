<template>
    <div id="zonerenducode">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="liste_action">
                        <button type="button" class="btn" v-on:click="switcher('preview')">Voir le Preview</button>
                        <button type="button" class="btn" v-on:click="switcher('html')">Voir le HTML</button>
                        <button type="button" class="btn" v-on:click="switcher('json')">Voir le JSON</button>
                        <button type="button" class="btn" v-on:click="switcher('json')">Voir les logs</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 output">
                    <div class="code"  v-if="display_code">
                        <pre>{{src}}</pre>
                    </div>
                    <div class="zone_rendu" v-html="src" v-if="display_html"></div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'zoneRenduCode',
    data () {
        return {
            display_html:true,
            display_code:false,
            src: "",
        }
    },
    created() {
        this.src = this.output_html;
    },
    computed : {
        ...mapGetters("article", [
            "output_html",
            "output_src",
            "output_jsonArticle"
        ])
    },
    methods : {
        switcher : function(type){
            if(type == "json"){
                this.src = this.output_jsonArticle;
                this.display_html = false;
                this.display_code = true;                
            }

            if(type == "html"){
                this.src = this.output_src;
                this.display_html = false;
                this.display_code = true;                
            }

            if(type == "preview"){
                this.src = this.output_html;
                this.display_html = true;
                this.display_code = false;                
            }
        }
    },
}
</script>

<style lang="less">
.liste_action
{
    padding-bottom: 20px;

    button
    {
        margin-right: 10px;
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
    }    

    .code
    {
        padding:0px;
        overflow-x: scroll;
        min-height: 100%;


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
</style>
