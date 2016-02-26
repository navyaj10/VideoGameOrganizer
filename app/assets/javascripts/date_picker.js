$(document).ready(function() {
    $('#game-release-datepicker').datepicker({
    	autoclose: true,
    	clearBtn: true,
    	container: '#game-release-datepicker-ballon',
    	todayHighlight: true
    });
	$("#game-release-datepicker").on("changeDate", function(event) {
	    $("#game-release-date").val(
	        $("#game-release-datepicker").datepicker('getFormattedDate')
	     );
	});

	$('#purchase-datepicker').datepicker({
    	autoclose: true,
    	clearBtn: true,
    	container: '#purchase-datepicker-ballon',
    	todayHighlight: true
    });
	$("#purchase-datepicker").on("changeDate", function(event) {
	    $("#purchase-date").val(
	        $("#purchase-datepicker").datepicker('getFormattedDate')
	     );
	});
});