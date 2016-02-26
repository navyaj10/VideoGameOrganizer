// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

	var BASE_URL = "";

	$( document ).on( "click", "#filter", function(e) {
		getList();
	});

	var getList = function() 
	{
		var postData = { platform: $("[name='game-platform']").val(), genre: $("[name='game-genre']").val() };

		console.log("filter params : ", JSON.stringify(postData));

		$.ajax({
  	
		  	url: BASE_URL + "my_games/execute?_ts=" + (new Date()).getTime(),
		  	type: 'POST',
		  	data: JSON.stringify(postData),
		  	success: function(data) {
			    console.log("success");
			    $("#query-result").html(data);
			},
			error: function(error) {
			    console.log("error: ", error);
			}

		});  
	}

	setTimeout(function() {
		getList();
		clearTimeout();
	}, 3000);	  
});

