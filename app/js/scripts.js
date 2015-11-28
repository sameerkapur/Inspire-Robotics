$(document).ready(function(){
	$("#submitButton").click(function(){
		// alert("click");
		if($("#email").val() !== "")
		{
			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/",
				data: JSON.stringify({email:$("#email").val()}), 
				success: function () {
					//change html
				}
			});
		}
		else
			alert("Enter an email.")
	});
});