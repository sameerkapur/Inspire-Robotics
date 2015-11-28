$(document).ready(function(){
	$("#submitButton").click(function(){
		// alert("click");
		$.ajax({
			type: "POST",
			url: "/",
			data: {}, 
			success: function () {
				//do stuff
			}
		});

	});
});