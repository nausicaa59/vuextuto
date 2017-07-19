<template>
	<div class="composant_form_text">
		<form>			
            <textarea v-model="textValue"></textarea>			
		</form>		
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'ElementText',
    props: ["index"],
    computed : {
        textValue: {
            get () {
                return this.contenuByIndex(this.index).src;
            },
            set (value) {
            	this.contenuEditTextBlock({index: this.index, value});
            }
        },
        ...mapGetters([
            "contenuByIndex"
        ])
    },
    methods : {
        ...mapMutations([
            "contenuEditTextBlock"
        ])
    },
    watch : {

    }
}
</script>

<style lang="less">
	.composant_form_text
	{
		position: relative;

		form
		{
			position: relative;

			textarea
			{
				height:300px;
				padding:50px 10px 10px 10px;
				border: 2px solid #d1d1d1;
				width:100%;
			}

			&:hover
			{
				textarea
				{
					border: 2px solid #31b0d5;					
				}				
			}
		}
	}
</style>
