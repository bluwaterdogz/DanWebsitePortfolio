$(document).ready(function(){

	$(".imgchooser").mousemove(function (e){

		var mouseX = e.pageX,
			mouseY = e.pageY,
			count = $(".imgchooser .art").length;
			offset = $(".imgchooser").offset();

		$(".art").css({
			"left":  (
				//TODO, position art box better so that th -25 isn't necessary, get current position -
				(offset.left -mouseX)*((108*count-$(".imgchooser").width())/$(".imgchooser").width() )-.05*$(".imgchooser").width() )
		});
	});

	if($(window).width()> 480){

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

			$(".imgviewer").css("background", viewerImg); 
			$(".imgviewer").animate({
				width:width,
				height:height
			},200);

			$(".viewer").animate({
				width:galWidth,
				height:galHeight
			},200);

		});
	
	}
	//TODO: Add smaller images with css mediaqueries and make width of viewer big enough if javascript is disabled also make circle images smaller images

});