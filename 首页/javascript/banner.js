/**
 * Created by kuang on 2016/11/2.
 */
$(function () {
    var curIndex = 0;
    $(".b_m_left .list li").on("mouseenter", function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".b_m_left .list li").eq(curIndex).addClass("current");
    })
    $(".b_m_left .list li").on("mouseleave", function () {
        $(this).removeClass("current");
        $(".b_m_left .list li").eq(curIndex).addClass("current");
    })
    $(".b_m_left .list li").on("click", function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".sed_content").children("div").eq($(this).index()).addClass("show").siblings().removeClass("show");
        curIndex = $(this).index();
    })
    $(".b_m_center").on("mouseenter", function () {
        $(".b_m_center .arrow").fadeIn(500);
        clearInterval(time3);
    })
    $(".b_m_center").on("mouseleave", function () {
        $(".b_m_center .arrow").fadeOut(500);
        time3 = setInterval(play,3000);
    })
    $(".special ul li").on("mouseenter", function () {
        $(".special .thd_content .t_con_main").eq($(this).index()).addClass("show").siblings().removeClass("show");
    })
    $(".special").on("mouseleave", function () {
        $(".special .thd_content .t_con_main").removeClass("show");
    })
    $(".b_m_center .img li").on("mouseenter", function () {
        $(this).css("width",122).siblings().css("width",97);
        $(this).find("img").stop().animate({
            left: -97
        },300)
        $(this).siblings().find("img").stop().animate({
            left: 0
        },300)
    })
    var num = 0;
    var time1 = setInterval(function () {
        $(".hot .hot_left img").css("top",-70 * num++);
        if(num == parseInt($(".hot_left .data .num").text())) {
            clearInterval(time1);
        }
    },10)
    var lis = 0;
    $(".com_list").append($(".com_list li:eq(0)").clone(true));
    function goAhead() {
        if(lis == $(".com_list li").length - 1) {
            lis = 0;
            $(".com_list").css("top",0);
        }
        lis++;
        $(".com_list").animate({
            top: -$(".com_list li")[0].offsetHeight * lis
        },1000)
    }
    var time2 = setInterval(goAhead,3000);
    $(".comment").on("mouseenter", function () {
        clearInterval(time2);
    })
    $(".comment").on("mouseleave", function () {
        time2 = setInterval(goAhead,3000);
    })
    var pic = 0;
    var square = 0;
    var flag = true;
    function play() {
        if(pic == $(".ban_bg ul li").length - 1) {
            pic = -1;
        }
        pic++;
        $(".ban_bg ul li").eq(pic).addClass("current").siblings().removeClass("current");
        $(".ban_bg ul li.current").animate({
            opacity: 1
        },1000).siblings().animate({
            opacity: 0
        },1000, function () {
            flag = true;
        });
        if(square == $(".b_m_center .nav li").length - 1) {
            square = 0;
        }
        else {
            square++;
        }
        $(".b_m_center .nav li").eq(square).addClass("current").siblings().removeClass("current");
    }
    var time3 = setInterval(play,3000);
    $(".b_m_center .nav li").on("mouseenter", function () {
        if(flag) {
            flag = false;
            $(this).addClass("current").siblings().removeClass("current");
            $(".ban_bg ul li").eq($(this).index()).addClass("current").siblings().removeClass("current");
            $(".ban_bg ul li.current").animate({
                opacity: 1
            },1000).siblings().animate({
                opacity: 0
            },1000, function () {
                flag = true;
            });
            pic = square = $(this).index();
        }
    })
    $(".b_m_center .arrow .arr_right").on("click", function () {
        if(flag) {
            flag = false;
            play();
        }
    });
    $(".b_m_center .arrow .arr_left").on("click", function () {
        if(flag) {
            flag = false;
            if(pic ==  0) {
                pic = $(".ban_bg ul li").length;
            }
            pic--;
            $(".ban_bg ul li").eq(pic).addClass("current").siblings().removeClass("current");
            $(".ban_bg ul li.current").animate({
                opacity: 1
            },1000).siblings().animate({
                opacity: 0
            },1000, function () {
                flag = true;
            });
            if(square == 0) {
                square = $(".b_m_center .nav li").length - 1;
            }
            else {
                square--;
            }
            $(".b_m_center .nav li").eq(square).addClass("current").siblings().removeClass("current");
        }
    })
})