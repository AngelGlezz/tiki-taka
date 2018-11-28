$(document).ready(function(){
	$(".item_main").click(function(){

		if($(this).hasClass("tiki_logo_tb")){
			return;
		}

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
});