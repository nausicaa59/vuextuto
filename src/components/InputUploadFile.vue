<template>
    <div class="form-group image-upade">
        <div class="input-group">                     
            <label class="input-group-btn">
                <span class="btn btn-primary">
                    <div v-if="!statusLoad.start">
                        Télécharger
                    </div>
                    <div class="loader-zone" v-if="statusLoad.start">
                        <div class="loader"></div>
                    </div>
                    <input type="file" style="display: none;" v-on:change="upload">
                </span>
            </label>
            <input type="text" class="form-control" :value="source">            
        </div>
        <div class="alert alert-danger" role="alert" v-for="erreur in errSource.erreurs">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            {{erreur}}         
        </div> 
        <img :src="source" v-if="source!=='' && preview">

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'InputUploadFile',
    props: ["source","uploader", "errSource", "statusLoad", "preview"],
    methods : {
        upload : function(e){
            var self = this;
            var fileList = e.target.files;
            var formData = new FormData();

            Array
            .from(Array(fileList.length).keys())
            .map(x => {
                formData.append("uploadFieldName", fileList[x], fileList[x].name);
            }); 

            this.uploader(formData);           
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

        .loader-zone
        {
            .loader {
                border: 3px solid white; /* Light grey */
                border-top: 3px solid #d1d1d1; /* Blue */
                border-radius: 50%;
                width: 20px;
                height: 20px;
                animation: spin 2s linear infinite;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }       
        }
	}
</style>
