import axios from 'axios';

export function slug(a) {
	var slug = "";
	var aLower = a.toLowerCase();
	slug = aLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
	slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
	slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
	slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
	slug = slug.replace(/\$|\!|\;|\,/gi, '');
	slug = slug.replace(/đ/gi, 'd');
	slug = slug.replace(/\s*$/g, '');
	slug = slug.replace(/\s+/g, '-');		      
	return slug;
}


export function uploadImageFromFileList(fileList, url, callSuccess, callError) {
    // append the files to FormData
    var formData = new FormData();
    Array
	.from(Array(fileList.length).keys())
    .map(x => {
        formData.append("uploadFieldName", fileList[x], fileList[x].name);
    });

    //call ajax
    axios.post(url, formData)
    .then(function (response) {
        callSuccess(response);
    })
    .catch(function (error) {
        callError(error);
    });	
}