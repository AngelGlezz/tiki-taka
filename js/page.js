$(document).ready(function(){
  	var width = parseInt($(".background_article").css("width"));
	var height = parseInt($(".background_article").css("height"));
	
	$(".background_article").mouseenter(function(){
		var final_width = width-10;
		var final_height = height-10;
		$(this).find(".ver").show();
		$(this).css({
			"border": "5px solid #e9c24e",
			"width": final_width,
			"height": final_height
		})
	});

	$(".background_article").mouseleave(function(){
		$(this).find(".ver").hide();
		$(this).css({
			"border": "none",
			"width": width,
			"height": height
		})
	});
});