// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

	var BASE_URL = "";

	$( document ).on( "click", "#add-game", function(e) {

		var data = retrieve_values();

		if(data == null) {
			return;
		}

		$.ajax({
  	
		  	url: BASE_URL + "new_game/execute?_ts=" + (new Date()).getTime(),
		  	type: 'POST',
		  	data: JSON.stringify(data),
		  	success: function(data) {
			    console.log("success");
			    	
			    $("#query-result").html(data);
			},
			error: function(error) {
			    console.log("error: ", error);
			}

		});  
	  
	});

	var retrieve_values = function () {

		var postData = 
		{
			gameTitle: parseInt($("[name='game-list']").val()),
			price: parseFloat($("#game-price").val()),
			purchaseDate: formatDate($("#purchase-date").val()),
			condition: $("[name='game-condition']").val(),
			completeness: $("[name='game-completeness']").val(),
			bonus: $("[name='game-bonus']").val(),
			sell: $("[name='game-sell']").val()
		};

		console.log(postData);

		if( postData.gameTitle == 0 ) {
			alert("Game Title is mandatory !");
			return null;
		} else if( postData.price == 0.00 ) {
			alert("Game Price cannot be $0.00 !");
			return null;
		} else if( postData.purchaseDate == 0 ) {
			alert("Game Purchase Date is mandatory !");
			return null;
		} else if( postData.condition == 0 ) {
			alert("Game Condition is mandatory !");
			return null;
		} else if( postData.completeness == 0 ) {
			alert("Game Completeness is mandatory !");
			return null;
		} else if( postData.bonus == 0 ) {
			alert("Bonus is mandatory !");
			return null;
		} else if( postData.sell == 0 ) {
			alert("Sell is mandatory !");
			return null;
		}

		return postData;
	}

	var formatDate = function(dateStr) 
	{
		var dateArr = dateStr.split("/");
		return dateArr[2] + "-" + dateArr[0] + "-" + dateArr[1]
	}
	  
});