$(functions(){

	var token = window.location.hash.replace("#access_token=", "");
		access_token = { access_token: token };

		// Make our API call
		function getImages(tag, access_token) {
			
			var url,
				count = 12;

			var tag = "sneakers";

				// url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;;
				url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;	

				$.ajax({
					type: 'GET',
					url: url,
					dataType: 'json',
					data: access_token,
					success: loadData
				});
		}


		function loadData(instagram_data) {
			// some code
		}



});