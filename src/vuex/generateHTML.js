import marked from 'marked';
import beautify from 'js-beautify';
import _ from 'lodash';


const genereHTMLBlockImage = function(block){
    var html = ""
    html += "<div class='image-conteneur'>";
        html += "<img src='"+block.src+"'>";
        html += "<div class='info'>";
        html += "<div class='description'>"+block.label+"</div>";
        html += "<div class='credit'>";
            html += "<a href='"+block.auteurUrl+"'>";
                html += "PHOTOGRAPHIE DE "+block.auteur;
            html += "</a>";
        html += "</div>";
        html += "</div>"; 
    html += "</div>";
    return html;
};


const genereHTMLBlockText = function(block){
    var html = marked(block.src);
    return html;
};


export const generateurHTML = function(blocks){
	var html = "";

	blocks.forEach(function(item, key){
		if(item.type == "image")
		{
			html += "<!-- --------------- -->";
			html += "<!-- Block image " + key + " -->";	
			html += "<!-- --------------- -->";		
			html += genereHTMLBlockImage(item);
		}
		else
		{
			html += "<!-- --------------- -->";
			html += "<!-- Block text " + key + " -->";
			html += "<!-- --------------- -->";
			html += genereHTMLBlockText(item);
		}
		
	});
	
	return html;
};


export const generateurCodeHTML = function(blocks){
	var html = generateurHTML(blocks);	
	html = beautify.html(html, {
		wrap_line_length:100000, 
		wrap_attributes:"force-expand-multiline", 
		unformatted:[]
	});

	html = html.replace(/\n<!-- --------------- -->\n<!--/g, "\n\n\n<!-- --------------- -->\n<!--");
	html += "\n\n\n\n";
	return html;
};

export const generateurCodeJS = function(jsData){
	var html = beautify(jsData, {
		wrap_line_length:10000, 
		wrap_attributes:"force-expand-multiline", 
		unformatted:[]
	});
	return html;
};
