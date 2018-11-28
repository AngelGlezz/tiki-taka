var width = 0;
var height = 0;

$(window).bind("resize", function(){
    width = parseInt($(".background_article").css("width"));
    height = parseInt($(".background_article").css("height"));
});

$(document).ready(function(){
  	width = parseInt($(".background_article").css("width"));
	height = parseInt($(".background_article").css("height"));
	
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
			"width": "",
			"height": ""
		})
	});

	$("#form-tiki-taka").validate({
        rules: {
            mail: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 2,
                maxlength: 100
            },
            company: {
                required: true,
                minlength: 2,
                maxlength: 100
            }
        },
        errorPlacement: function( error, element ) {
            error.insertAfter(element);
        }
    });

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
    });

    $('#mask').click(function (){
        $(this).hide();
        $('.window').hide();
    });

    $('#button-send').click(function(e){
        e.preventDefault();
        $('#form-tiki-taka').submit();
    });

    $('#form-tiki-taka').submit(function(event) {
        event.preventDefault();

        if($(this).valid()){
            var formData = $(this).serialize();
                
            $.ajax({
                type: 'POST',
                url: $(this).attr('action'),
                data: formData,
                beforeSend: function(){
                    $('#form-loader').show();
                    $('#button-send').hide();
                }
            }).done(function(data) {
                var json = jQuery.parseJSON(data);
                if(json.error === undefined || json.error === ""){
                    showBox("¡Registro exitoso!");
                }else{
                    showBox("Invalid data, please try again.");
                }

                $('#form-loader').hide();
                $('#button-send').show();

                clearForm();
            });
        }
    });

    if(window.location.hash) {
      var hash = window.location.hash.substring(1); 
      console.log(hash);
        if(hash == "us"){
            var item = $(".top_bar .item_main")[2];
        }else if(hash == "content"){
            var item = $(".top_bar .item_main")[3];
        }else if(hash == "contact"){
            var item = $(".top_bar .item_main")[4];
        }

        $('.item_main').css({
                'border-bottom': '0px'
            });
            $('.item_main').find('a').css({
                'color': '#fff'
            });
            $(item).css({
                'border-bottom': '1px solid #e9c24e'
            });
            $(item).find('a').css({
                'color': '#e9c24e'
            });

      }

	function showBox(msg){
	    var id = $('#dialog');

	    $("#box-msg").text(msg);

	    var maskHeight = $(document).height();
	    var maskWidth = $(window).width();

	    $('#mask').css({'width':maskWidth,'height':maskHeight});

	    $('#mask').fadeTo("fast",0.8);
	    $('#mask').fadeIn();

	    var winH = $(window).height();
	    var winW = $(window).width();

	    $(id).css('top',  winH/2-$(id).height()/2);
	    $(id).css('left', winW/2-$(id).width()/2);

	    $(id).fadeIn();
	}

	function clearForm(){
	    $("input[name='name']").val("");
	    $("input[name='company']").val("");
	    $("input[name='mail']").val("");
	    $("input[name='phone']").val("");
	    $("textarea[name='msj']").val("");
	}
});