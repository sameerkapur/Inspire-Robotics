$(document).ready(function(){
	$("#submitButton").click(function(e){
		e.preventDefault();
		if($("#email").val() !== "")
		{
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/",
				data: JSON.stringify({email:$("#email").val()}), 
				success: function () {
					$(".contact").css("display", "none");
					$("#signedUp").css("display", "");
					//change html
				},
				error: function(jqXHR, textStatus, errorThrown) {
					// console.log(textStatus, errorThrown);
				}

			});
		}
		else
			alert("Enter an email.");
	});
});