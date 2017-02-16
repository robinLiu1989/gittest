/**
 * Created by Administrator on 2016/11/2 0002.
 */

    $(function(){
        var mainTopN = document.getElementById("main_top_nav");
        var mainTopM = document.getElementById("main_top_m_1");
        var nlis = mainTopN.children;
        var mlis =mainTopM.children;
        var spans = document.getElementsByClassName('span1')
        console.log(nlis)
        for(var i=0 ;i<nlis.length;i++){
            nlis[i].index=i;
            mlis[i].index=i;
            nlis[i].onmouseover=function(){
                for(var i=0; i<mlis.length; i++){
                    nlis[i].style.color="#666666";
                    nlis[i].style.fontWeight="normal";
                    spans[i].style.display="none";
                    mlis[i].style.display="none";
                    mlis[this.index].style.display="block";
                    spans[this.index].style.display="block";
                    this.style.color="#22c231";
                    this.style.fontWeight="bolder";
                }
            }
        }
        var jin = new Date("2016-11-24")
        var na1 = new Date();
        var na = new Date(0)
        var time = jin.getTime()-na1.getTime()
        var shicha=new Date(time);
        var day = shicha.getDate()-na.getDate();
        var hour = shicha.getHours()-na.getDate();
        var mintur = shicha.getMinutes()-na.getMinutes();
        console.log(day,hour,mintur)
        var days = document.getElementsByClassName("day");
        var hours = document.getElementsByClassName("hour");
        var minus = document.getElementsByClassName("minu");
        for( var i=0; i<days.length;i++){
            days[i].innerText=day;
            hours[i].innerText=hour;
            minus[i].innerText=mintur;
        }
    })
