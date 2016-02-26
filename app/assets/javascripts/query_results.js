// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

	var BASE_URL = "";

	$( document ).on( "click", "[id^=exec_]", function(e) {

		var index = $(this).attr( "id" ).split( "_" )[1];

		$.ajax({
  	
		  	url: BASE_URL + "query_results/execute/" + index + "?_ts=" + (new Date()).getTime(),
		  	type: 'GET',
		  	success: function(data) {
			    console.log("success");
			    $("#query-result").html(data);
			},
			error: function(error) {
			    console.log("error: ", error);
			}

		});  
	  
	});

	$( document ).on( "click", "#cexec_query", function(e) {

		var query = $("#cquery").val();
		var postData = { query: query };

		$.ajax({
  	
		  	url: BASE_URL + "query_results/execute_cquery?_ts=" + (new Date()).getTime(),
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
	  
	});

	  
});
