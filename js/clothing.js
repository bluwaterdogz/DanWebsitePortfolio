$(document).ready(function(){
	
	var clothingPosition = 0;

	setInterval(function(){
		if(clothingPosition > -24000){
			clothingPosition -=600;
		}else{
			clothingPosition=0;
		}
			$("#clothingviewer").css("backgroundPosition",clothingPosition+"px");

	},120);
		

	$(".animationchooser").on("mouseover click", function(){
		var $this = $(this),
			srcImg = $this.data("animation"),
			viewerImg = "url(imgslo/"+srcImg+")";
		$("#clothingviewer").css("background", viewerImg); 

	});

});
