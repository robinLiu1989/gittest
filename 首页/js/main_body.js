/**
 * Created by Administrator on 2016/11/3 0003.
 */

    $(function(){
        var tabs_one=$(".main_body .tabs_one ").find("a");
        var uls_one=$(".layer_one .photo_area").children();
        qieHuan(tabs_one,uls_one);

        var tabs_two=$(".main_body .tabs_two ").find("a");
        var uls_two=$(".layer_two .photo_area").children();
        qieHuan(tabs_two,uls_two);

        var tabs_three=$(".main_body .tabs_three ").find("a");
        var uls_three=$(".layer_three .photo_area").children();
        qieHuan(tabs_three,uls_three);

        var tabs_four=$(".main_body .tabs_four").find("a");
        var uls_four=$(".layer_four .photo_area").children();
        qieHuan(tabs_four,uls_four);

        function qieHuan(tabs,uls){
            for(var i=0; i<tabs.length; i++){
                tabs[i].index=i;
                tabs[i].onmouseover=function(){
                    for(var j=0; j<uls.length; j++){
                        uls[j].style.display="none";
                    }
                    uls[this.index].style.display="block";
                }
            }
        }

    })
