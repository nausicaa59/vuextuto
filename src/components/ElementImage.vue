<template>
	<div class="composant_form_img">
        <div class="row">
            <div class="col-md-8">
        		<form>
                    <div class="row">
                        <div class="col-md-12"> 
                            <div class="form-group">
                                <label for="exampleInputEmail1">Source</label>
                                <input-upload-file 
                                    :preview="false"
                                    :source="src" 
                                    :statusLoad="uploadFileStatus"
                                    :errSource="uploadFileErr" 
                                    :uploader="uploader">
                                </input-upload-file>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12"> 
                            <div class="form-group">	                	
                                <label for="exampleInputEmail1">Description</label>
                                <input type="text" class="form-control" v-model="label">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">     
                            <div class="form-group">                        
                                <label for="exampleInputEmail1">Crédit</label>
                                <input type="text" class="form-control" v-model="auteur">
                            </div>  
                        </div>
                        <div class="col-md-6">     
                            <div class="form-group">                        
                                <label for="exampleInputEmail1">Lien Crédit</label>
                                <input type="text" class="form-control" v-model="auteurUrl">
                            </div>  
                        </div>
                    </div>  			
        		</form>
            </div>
            <div class="col-md-4">
                <div class="preview_img">
                    <img :src="src">
                </div>
            </div>
        </div>	
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import InputUploadFile from '../components/InputUploadFile.vue';

export default {
    name: 'ElementImage',
    props: ["index"],
    components: {
        InputUploadFile
    },
    computed : {
        ...mapGetters([
            "contenuByIndex",
            "load_image_contenu"
        ]),
        src: {
            get () {
                return this.contenuByIndex(this.index).src;
            }
        },
        label: {
            get () {
                return this.contenuByIndex(this.index).label;
            },
            set (value) {
                this.contenuEditImageBlockLabel({index:this.index, label:value})
            }
        },
        auteur: {
            get () {
                return this.contenuByIndex(this.index).auteur;
            },
            set (value) {
                this.contenuEditImageBlockAuteur({index:this.index, auteur:value})
            }
        },
        auteurUrl: {
            get () {
                return this.contenuByIndex(this.index).auteurUrl;
            },
            set (value) {
                this.contenuEditImageBlockAuteurUrl({index:this.index, auteurUrl:value})
            }
        },
        uploadFileStatus: function() {
            return { 
                start : this.contenuByIndex(this.index).start, 
                pourc : this.contenuByIndex(this.index).pourc
            };
        },
        uploadFileErr: function() {
            return { 
                erreurs : this.contenuByIndex(this.index).erreurs, 
                valide : this.contenuByIndex(this.index).valide
            };
        }
    },
    methods : {
        ...mapMutations([
            "contenuEditTextBlock",
            "contenuEditImageBlockSrc",
            "contenuEditImageBlockAuteur",
            "contenuEditImageBlockAuteurUrl",
            "contenuEditImageBlockLabel"
        ]),
        ...mapActions([
            "uploadImgContenu"
        ]),
        uploader: function(data){
            this.uploadImgContenu({data: data, index: this.index});
        }
    },
    watch : {

    }
}
</script>

<style lang="less">
	.composant_form_img
	{
		position: relative;
        border: 2px solid #d1d1d1;

        &:hover
        {
            border: 2px solid #31b0d5;
        }

		form
		{
			position: relative;
			padding:50px 20px 20px 20px;
		}

        .preview_img
        {
            text-align: center;
            padding:50px 20px 20px 20px;

            img
            {
                width: 100%;
                margin-top: 20px;
            }
        }
	}
</style>
