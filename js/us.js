var personal = [
    {
        picture : "a.png",
        name : "Bobbi Brown",
        title : "Diseño"
    },
    {
        picture : "a.png",
        name : "Bobbi Brown",
        title : "Diseño"
    },
    {
        picture : "a.png",
        name : "Bobbi Brown",
        title : "Diseño"
    },
    {
        picture : "a.png",
        name : "Bobbi Brown",
        title : "Diseño"
    },
    {
        picture : "a.png",
        name : "Bobbi Brown",
        title : "Diseño"
    },
    {
        picture : "a.png",
        name : "Bobbi Brown",
        title : "Diseño"
    }
]

$(document).ready(function(){
    function getArticle(i) {
        for (var i = 0; i <= personal.length-1; i++) {
            var div = $('<li class="item_personal item"><div class="img_item" style="background-image:url(../images/personal/'+personal[i].picture+')"></div><div class="item_back"><div class="mark_item"></div><div class="name_item">'+personal[i].name+'</div><div class="title_item">'+personal[i].title+'</div></div></li>');
            $("#content_item").append(div);
        }

        $(".item_personal").mouseenter(function(){
            $(this).find(".item_back").show();
        });

        $(".item_personal").mouseleave(function(){
            $(this).find(".item_back").hide();
        });

        return i;
    }

    

    getArticle();
});