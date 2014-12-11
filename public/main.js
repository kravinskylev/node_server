var token = window.location.hash.replace("#access_token=", "");
var access_token = { access_token: token };

function getImages(tag, access_token) {
	var count = 12;
	var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;
	
	$.ajax({
		type: 'GET',
		url: url,
		data: access_token,
		success: loadData
	});

};

function loadData(instagram_data) {
	var photos,
		photo,
		new_image;

		if (instagram_data.meta.code === 200){
			photos = instagram_data.data;
			consosle.log(instagram_data);
		}
}

getImages("cars", access_token);