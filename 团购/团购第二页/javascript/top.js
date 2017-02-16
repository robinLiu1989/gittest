/**
 * Created by jing on 2016/11/2.
 // */
$(function(){
    //顶部我的订单经过显示的效果
    $(".header_top_right .order").on("mouseenter",function(){
        $(this).children(".order-ul").css("display","block");
        $(this).children("a").removeClass("icon-sanjiao1").addClass();
        $(this).children(".shelter").show();
        $(this).css("zIndex",10);
    }).on("mouseleave",function(){
        $(this).children(".order-ul").css("display","none");
        $(this).children(".shelter").hide();
    })
    //顶部网站地图经过显示的效果
    $(".header_top_right .map").on("mouseenter",function(){
        $(this).children(".w").css("display","block");
        $(this).css("zIndex",20);
    }).on("mouseleave",function(){
        $(this).children(".w").css("display","none");
        $(this).css("zIndex",10);
    })


    //这个是城市切换的tab效果
    $(".city_tab li").on("mouseenter",function(){
        var index =$(this).index();
        $(this).addClass("current_tab").siblings().removeClass("current_tab");
        $(".city_tab_bottom .city_tab_content").eq(index).show().siblings().hide();

    })
    $(".local_city").on("mouseenter",function(){
        $(this).find(".head_start_city_box").show();
        $(this).children("p").hide();
        $(this).addClass("local_city_bd").css("zIndex",10);
    }).on("mouseleave",function(){
        $(this).find(".head_start_city_box").hide();
        $(this).children("p").show();
        $(this).removeClass("local_city_bd");
    })

    $(".tn_s_select").on("mouseenter",function(){
        $(this).children(".All_products").show();
        $(".All_products li").on("mouseenter",function(){
            $(this).css("background-color","#EFEFEF").siblings().css("background-color","white");
        })
    }).on("mouseleave",function(){
        $(this).children(".All_products").hide();
    })


    //搜索框效果
    $(".tn_s_input input").on("focus",function(){
        if($(this).val()=="轮游日"){
            $(this).val("");
            $(this).parent().next(".Hot_search").hide();
            $(this).parent().siblings(".search_inputList").show();
            $(".search_inputList").css("zIndex",20);
        }
    }).on("blur",function(){
        if($(this).val().length==0){
            $(this).val("轮游日");
            $(this).parent().next(".Hot_search").show();
            $(this).parent().siblings(".search_inputList").hide();
            $(".search_inputList").css("zIndex",1);

        }
    })
    //搜索框的关闭按钮
    $(".inputListClose").on("click",function(){
        $(this).parent(".inputList_head").parent(".search_inputList").hide();
    })


    $(".li_phone").on("mouseenter",function(){
        $(this).children(".dropdown_panel").show().css("zIndex",10);
    }).on("mouseleave",function(){
        $(this).children(".dropdown_panel").hide();
    })
    $(".li_weixin").on("mouseenter",function(){
        $(this).children(".weixin_panel").show().css("zIndex",10);
    }).on("mouseleave",function(){
        $(this).children(".dropdown_panel").hide();
    })
    //导航的效果
    $(".inner-ul .tn_nnav_tour").on("click",function(){
        $(this).removeAttr("style").addClass("this_nnav_tour").siblings().removeClass("this_nnav_tour");
        $(this).children("a").css("color","white").parent().siblings().children("a").removeAttr("style");

    }).on("mouseenter",function(){
        $(this).children(".inner-menu").css("display","block").parent().siblings().children(".inner-menu").hide();
        $(this).css("background","#F8F8F8").siblings().removeAttr("style");
            $(".this_nnav_tour").removeAttr("style");
        $(this).parents(".w").prev(".inner-bottom").show();

    }).on("mouseleave",function(){
        $(this).removeAttr("style");
        $(this).parents(".w").prev(".inner-bottom").hide();
        $(this).children(".inner-menu").hide();
    })



})

