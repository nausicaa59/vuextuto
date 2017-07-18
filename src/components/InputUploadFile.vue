<template>
    <div class="form-group image-upade">
        <label>Image Catégorie</label>
        <div class="input-group">                     
            <label class="input-group-btn">
                <span class="btn btn-primary">
                    Télécharger <input type="file" style="display: none;" v-on:change="upload">
                </span>
            </label>
            <input type="text" class="form-control" :value="chemin">            
        </div>
        <div class="alert alert-danger" role="alert" v-for="erreur in erreurs_ajax_tabl">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Error:</span>
            {{erreur}}
        </div> 
        <img :src="chemin" v-if="chemin!==''">
    </div>
</template>

<script>
import axios from 'axios';
import * as tools from './../tools';

export default {
    name: 'InputUploadFile',
    props: ["chemin","type"],
    data () {
        return {
            erreur_ajax: false,
            erreurs_ajax_tabl:[],
            internal_chemin: ""
        }
    },
    methods : {
        upload : function(e){
            var self = this;
            var fileList = e.target.files;
            var url = 'http://personnes.dev/upload.php';

            var callSuccess = function(response){
                console.log(response);
                if(response.data.valide)
                {
                    self.internal_chemin = response.data.src;
                    self.$emit('toggle',self.internal_chemin);
                }                
            }

            var callError = function(error){
                console.log(error);
                self.erreur_ajax = true;                
                self.erreurs_ajax_tabl.push("Erreur lors de l'upload :");           
            }
            
            if (!fileList.length) return;
            this.erreur_ajax = false;
            this.erreurs_ajax_tabl = [];
            this.upload_file = fileList[0].name;
            tools.uploadImageFromFileList(fileList, url, callSuccess, callError)
        }
    },
    watch : {}
}
</script>

<style lang="less">
	.image-upade
	{
        .alert
        {
            margin-top:20px;

            &+img
            {
                margin-top: 0px;
            }
        }

        img
        {
            height: 120px;
            margin-top: 30px;
        }
	}
</style>
