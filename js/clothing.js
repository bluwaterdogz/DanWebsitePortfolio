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
			viewerImg = "url(imgslo/clothing/"+srcImg+")";
		$("#clothingviewer").css("background", viewerImg); 

	});

	$("#logoviewer").on("mouseover click","img", function(){
		var $this = $(this),
			srcImg = $this.attr("src"),
			viewerImg = "url("+srcImg+")";

		var imageObj = new Image();
			imageObj.src = srcImg;


		$(".clothinglogoviewer").css("background", viewerImg); 

		$(".clothinglogoviewer").animate({
			width:200,
			height:200,
			backgroundSize:'100%'

		},200);


	});


});
