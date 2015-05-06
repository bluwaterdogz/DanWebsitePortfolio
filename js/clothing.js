$(document).ready(function(){
	
	var clothingPosition = 0;
	var position;

	setInterval(function(){

		if(clothingPosition > -6144){
			clothingPosition -=512;

		}else{
	 		clothingPosition = 0;
		}

		$("#clothingviewer").css("backgroundPosition",clothingPosition+"px");

	},100);


//use to get the sprite image
		

		$("img").on("mouseover click", function(){
			var $this = $(this),
				srcImg = $this.attr("src"),
				viewerImg = "url("+srcImg+")";

			var imageObj = new Image();
				imageObj.src = srcImg;

			var width = imageObj.width,
				height = imageObj.height,
				galWidth = imageObj.width + 30,
				galHeight = imageObj.height + 30;

			$(".clothingviewer").css("background", viewerImg); 
			$(".imgviewer").animate({
				width:width,
				height:height
			},200);

			$(".viewer").animate({
				width:galWidth,
				height:galHeight
			},200);

		});

});
