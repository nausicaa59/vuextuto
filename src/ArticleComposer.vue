<template>
    <div id="articleComposer">
        <div class="container">
            <div class="row">
                <div class="col-md-12 input">
                    <element-barre-action-add :index="0"></element-barre-action-add>
                    <div v-for="element, key in contenu" class="input_block">
                        <div class="element">
                            <element-image :index="key" v-if="element.type === 'image'"></element-image>
                            <element-text :index="key" v-if="element.type === 'text'"></element-text>
                            <div class="bt_close" v-on:click="blockDelete(key)">Supprimer</div>
                        </div>
                        <element-barre-action-add :index="key+1"></element-barre-action-add>
                    </div>
                </div>
            </div>  
        </div>      
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ElementBarreActionAdd from './components/ElementBarreActionAdd.vue'; 
import ElementText from './components/ElementText.vue'; 
import ElementImage from './components/ElementImage.vue'; 

export default {
    name: 'ArticleComposer',
    components: {
        ElementBarreActionAdd,
        ElementText,
        ElementImage
    },
    computed : {
        ...mapGetters("article",[
            "contenu"
        ])
    },
    created() {

    },
    methods : {
        blockDelete : function(cible){
            this.contenuDeleteBlock(cible);
        },
        ...mapMutations("article",[
            "contenuDeleteBlock"
        ])
    }
}
</script>

<style lang="less" scoped>
#articleComposer
{
    .input_block
    {
        position: relative;
        margin-bottom: 30px;

        .element
        {
            .bt_close
            {
                position: absolute;
                top:1px;
                right:1px;
                padding:10px;
                background-color: #a94442;
                color: white;
                display: block;
                cursor: pointer;
                display: none;
            }

            &:hover
            {
                .bt_close
                {
                    display: block;
                }
            }               
        }   
    }    
}
</style>
