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

	$(".item_main").click(function(){
		$('.item_main').css({
			'border-bottom': '0px'
		});
		$('.item_main').find('a').css({
			'color': '#fff'
		});
		$(this).css({
			'border-bottom': '1px solid #e9c24e'
		});
		$(this).find('a').css({
			'color': '#e9c24e'
		});
	});

	$("#fifa").off('mouseleave');
	$("#fifa").off('mouseenter');
	$("#rexona").off('mouseleave');
	$("#rexona").off('mouseenter');
	$("#pops").off('mouseleave');
	$("#pops").off('mouseenter');
	$("#wwe").off('mouseleave');
	$("#wwe").off('mouseenter');
});