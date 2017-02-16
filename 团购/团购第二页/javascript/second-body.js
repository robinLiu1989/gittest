/**
 * Created by aa on 2016/11/2.
 */

//Èë¿Ú
$(function() {
    //tabÀ¸ÇÐ»»
    $(".second-body .second-body-h ul li").on("mouseenter", function () {
        $(this).addClass("current").siblings().removeClass("current");
        //alert($(this).index());
        $(this).parent().parent().next().children().eq($(this).index()).addClass("current").removeClass("normal").siblings().removeClass("current").addClass("normal");
    });


    //second-body ×ó²à¶¯»­
    $(".second-body-b-l ul li").on("mouseenter", function () {
        $(this).stop(true, false).animate({
            "left": -6
        }, 100);
    }).on("mouseout", function () {
        $(this).animate({
            "left": 0
        }, 100);
    })

    //second-body ÓÒ²à¶¯»­
    $(".second-body-b-r .item").on("mouseenter", function () {
        $(this).css({"boxShadow":"0 0 5px #FF8800"}).find("span").css({"display": "block"});
    }).on("mouseleave", function () {
        $(this).css({"boxShadow":"0 0 5px #ccc"}).find("span").css({"display": "none"});
    });
})






