/**
 * Created by Administrator on 2016/11/2.
 */
// 获得所有的对象
window.onload = function(){
  //旅游局合作轮播
    var lunbo = document.getElementById("lunbo");
    var ul2 = lunbo.children[0];
    var li = ul2.children[0];
    var  t1 = null;
    for(var i = 0; i < 7; i++) {
        b1(ul2);
    }
    lunbo.onmouseover = function(){
        clearInterval(t1);
    }
    function b1(obj){
        t1 = setInterval(function(){
            var ul1 = obj.offsetTop
            var p = -1;
            if(ul1 <= -450){
                obj.style.top = "0px";
            }
            else {
                ul1 = ul1 + p;
                obj.style.top = ul1+"px";
            }
        },150)
    }


    //友情轮播
    var box = document.getElementById("box");
    var ul = box.children[0];
    var li = ul.children;
    var t = null;

    for(var i = 0; i < li.length; i++) {
        a(ul);
    }

    function a(obj,b){
        t = setInterval(function(){
            var ul1 = obj.offsetLeft
            var p = -1;
            if(ul1 <= -3550){
                obj.style.left = "0px";
            }
            else {
                ul1 = ul1 + p;
                obj.style.left = ul1+"px";
            }
        },100)

    }

}


