$(function(){
    $(".mpjx .tabs1 li").mouseenter(function () {
        var index = $(this).index();
        $(".mpjx .body_right .tab_list").eq(index).siblings().removeClass("show");
        $(".mpjx .body_right .tab_list").eq(index).addClass("show")
    })
    $(".ddwl .tabs1 li").mouseenter(function () {
        var index = $(this).index();
        $(".ddwl .body_right .tab_list").eq(index).siblings().removeClass("show");
        $(".ddwl .body_right .tab_list").eq(index).addClass("show")
    })
    $("#travelRaiders .tour_header li").mouseenter(function () {
        var index = $(this).index();
        $("#travelRaiders ul.tour_body").eq(index).siblings().removeClass("show");
        $("#travelRaiders ul.tour_body").eq(index).addClass("show")
    })
})
