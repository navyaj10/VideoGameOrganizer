// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .
//= require bootstrap-datepicker

var BASE_URL = "";
var sections = 
{
	"My Games" : BASE_URL + "my_games/index?_ts=" + (new Date()).getTime(),
	"New Game" : BASE_URL + "new_game/index?_ts=" + (new Date()).getTime(),
	"Query Results" : BASE_URL + "query_results/index?_ts=" + (new Date()).getTime(),
	"About" : BASE_URL + "developers/index?_ts=" + (new Date()).getTime()
};

$(function() {

  var eventCallback = function() {

  	var sectionName = $(this).html();

    $.ajax({
  	
	  	url: sections[sectionName],
	  	type: 'GET',
	  	success: function(data) {
		    console.log("success");
		    $("#render-tmpl").html(data);
		},
		error: function(error) {
		    console.log("error: ", error);
		}

	});    

    return false;
  };

  $("#my-games, #new-game, #query-results, #developers").click(eventCallback);

  $("#my-games").click();

});
