$(window).load(function(){
	window.jQuery || alert("Please enable the Javascripts for your viewing pleasure");

	$(".svg1").animate({
	left: '-300px',
	top: '-90px'
	}, 3000, function() {

		$(".svg1").animate({
			left: '-300px',
			top: '-30px'
			}, 900, function() {

				$(".svg3").fadeIn(2000);
				$(".s3p").each(function (i) {
				    // store the item around for use in the 'timeout' function
				    var $item = $(this); 
				    // execute this function sometime later:
				    setTimeout(function() { 
				      $item.attr("class",'letteranimate');
				    }, 200*i);
				    // each element should animate 200ms after the last one.
			 	});
		});
	});
});
