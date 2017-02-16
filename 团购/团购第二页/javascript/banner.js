/**
 * Created by Administrator on 2016/11/2.
 */
$(window).load(function () {
    var timer=null;
    var index=0;
    //简单轮播
    $("#ol li").on("click",function(){
        index=$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#ul").stop().animate({left:-990*index},200);
        pic=square=index;
    })
    //鼠标移入
    $("#box").hover(function(){
        clearInterval(timer);
        $("#prev").show();
        $("#next").show();
    },function(){
        timer=setInterval(play,2000);
        $("#prev").hide();
        $("#next").hide();
    })
    //克隆一个插入
    $("#ul").append($("#ul li:eq(0)").clone(true));
    //点击按钮
    var pic=0;
    var square=0;
    $("#next").click(function(){
        clearInterval(timer);
        play();
    })
    $("#prev").click(function(){
        clearInterval(timer);
        if(pic==0){
            pic=$("#ul li").length-1;
            $("#ul").offset({left:-990*($("#ul li").length-1)});
        }
        pic--;
        $("#ul").stop().animate({left:-990*pic},200);
        if(square>0){
            square--;
        }else{
            square=$("#ol li").length-1;
        }
        $("#ol li").eq(square).addClass("active").siblings().removeClass("active");
    })
    function play(){
        if(pic==$("#ul li").length-1){
            pic=0;
            $("#ul").offset({left:0});
        }
        pic++;
        $("#ul").stop().animate({left:-990*pic},200);
        if(square<$("#ol li").length-1){
            square++;
        }else{
            square=0;
        }
        $("#ol li").eq(square).addClass("active").siblings().removeClass("active");
    }
    //无缝滚动
    timer=setInterval(play,2000);


    //滑过图片动态遮罩
    $("#ul").find("a").each(function () {
        $(this).mouseenter(function () {
            var span = document.createElement("span");
            $(this).append($(span));
            $(span).addClass("img");
        }).mouseleave(function () {
            $("#ul").find("span").remove("span");
        })
    })
    //var json=[
    //    {"url":"#","name":"三亚"},
    //    {"url":"#","name":"蜈支洲"},
    //    {"url":"#","name":"亚龙湾"},
    //    {"url":"#","name":"海口"},
    //    {"url":"#","name":"天涯海角"},
    //    {"url":"#","name":"大东海"},
    //    {"url":"#","name":"大小洞天"},
    //    {"url":"#","name":"分界洲岛"}
    //]
    //
    //$(".outer:eq(4)").html("<dl>" +
    //    "<dt></dt>" +
    //    "<dd></dd>" +
    //    "</dl>");
    //var str=null;
    //for(var i = 0; i < json.length; i++) {
    //    var arr=json[i];
    //    for(var k in arr){
    //
    //    }
    //}

})

