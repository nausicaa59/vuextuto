<template>
	<div class="tool_barre">
		<div class="row">
			<div class="col-md-12">
				<div class="presentation" v-if="!display_bt" v-on:click="afficherBt">
					Ajouter un élément
				</div>
			</div>
			<div class="col-md-12">
				<div class="presentation" v-if="display_bt">
					<ul class="choix_element">
						<li v-on:click="btCliquer('image')">
							<button type="button" class="btn btn-default btn-lg">
							  <i class="fa fa-picture-o" aria-hidden="true"></i>
							  <br>Ajouter une image
							</button>
						</li>
						<li v-on:click="btCliquer('text')">
							<button type="button" class="btn btn-default btn-lg">
							  <i class="fa fa-font" aria-hidden="true"></i>
							  <br>Ajouter un text
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'ElementBarreActionAdd',
    data () {
        return {
            display_bt: false
        }
    },
    props: ["index"],
    methods : {
    	afficherBt : function(){
    		this.display_bt = true;
    	},
    	btCliquer : function(type){    		
    		this.display_bt = false; 
            
            if(type == "image")
            {
                this.contenuAddImageBlock(this.index);
            }

            if(type == "text")
            {
                this.contenuAddTextBlock(this.index);
            }        		
    	},
        ...mapMutations([
            "contenuAddImageBlock",
            "contenuAddTextBlock"
        ])
    },
    watch : {}
}
</script>

<style lang="less">
    .tool_barre
    {
    	margin-top: 50px;
    	margin-bottom: 50px;
    	cursor: pointer;
    	text-align: center;

    	.presentation
    	{
    		border:2px dashed #d1d1d1;
    		font-size: 18px;
    		color:#d1d1d1;
    		padding:20px;

    		&:hover
    		{
    			border-color:#31b0d5;
    		}
    	}

    	.choix_element
    	{
    		list-style:none;
    		margin:0px;

    		li
    		{
    			display: inline-block;
    			margin-right:30px;

    			i
    			{
    				font-size: 30px;
    				color: black;
    			}
    		}
    	}
    }
</style>
