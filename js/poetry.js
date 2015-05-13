$(document).ready(function(){
	
	$(".poemtext").hide();

	$(".show").on("click",function(){
		if( $(this).next().is(":hidden") ){
			$(".poemtext").each(function(){
				if($(this).is(":visible")){
					$(this).slideToggle('slow');
				}
			});
			$(this).next().slideToggle("slow");
		}else{
			$(this).next().slideToggle("slow");
		}
	});

});