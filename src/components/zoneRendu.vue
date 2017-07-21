<template>
    <div id="app">
        <div class="row" v-if="display_preview">
            <div class="col-md-12 output">
                <div class="zone_rendu" v-html="output_html"></div>
            </div>
        </div>
        <div class="row" v-if="display_code">
            <div class="col-md-12 output">
                <div class="zone_rendu" v-html="output_src"></div>
            </div>
        </div>     
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'zoneRendu',
    computed : {
        ...mapGetters([
            "contenu"
        ])
    },
    created() {

    },
}
</script>

<style lang="less">
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
        overflow: auto;
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
}
</style>
