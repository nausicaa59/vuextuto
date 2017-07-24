<template>
    <div id="categorie">
        <zone-rendu-code 
            v-if="display_code"
            :display_preview="false"
            :display_src="false"
            :display_json="true"
            :output_preview="''"
            :output_src="''"
            :output_json="output_json"
            :default="'json'">
        </zone-rendu-code>
        <categorie-form v-if="display_form"></categorie-form>
        <div class="bar-tools">
            <ul>
                <li v-on:click="call_save()" class="bt_save">
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                </li>
                <li v-on:click="call_form()" class="bt_view" v-bind:class="{ active: display_form }">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </li>
                <li v-on:click="call_code()" class="bt_view" v-bind:class="{ active: display_code }">       
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </li>  
            </ul>
        </div>
    </div>
</template>

<script>
import CategorieForm from './CategorieForm.vue';
import zoneRenduCode from './components/zoneRenduCode.vue'; 
import { mapGetters, mapActions, mapMutations } from 'vuex'


export default {
    name: 'Categorie',
    props : ['id'],
    data () {
        return {
            display_code:false,
            display_form:true,
        }
    },
    components: {
        CategorieForm,
        zoneRenduCode
    },
    computed : {
        ...mapGetters("categorie", [
            "idCategorie",
            "output_json"
        ])
    },
    created() {
        if(this.id != undefined)
        {
            this.editIdCategorie(this.id);
        }

        this.init();      
    },
    methods : {
        call_save : function(){
            if(this.idCategorie)
            {
                this.update(); 
            }
            else
            {
                this.create(); 
            }                      
        },
        call_code : function(){
            this.display_form = false;
            this.display_code = true;
        },
        call_form : function(){
            this.display_form = true;
            this.display_code = false;
        },
        ...mapActions("categorie", [
            "init",
            "create",
            "update"
        ]),
        ...mapMutations("categorie", [
            "editIdCategorie"
        ]),
    }
}
</script>

<style lang="less" scoped>
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
