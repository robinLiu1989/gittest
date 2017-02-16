 /**
     * Created by jing on 2016/10/27.
     * 用于各种javascript的兼容写法与封装
     */
//各种兼容
    /**
     * 添加事件
     * @param obj   事件源
     * @param type   事件名称
     * @param listener  事件处理程序
     */
    function addEventListener(obj,type,listener){
        if(obj&&obj.addEventListener){
            obj.addEventListener(type,listener,false);//高级版本的浏览器：谷歌火狐支持 //默认支持冒泡
        }else if(obj&&obj.attachEvent){
            obj.attachEvent("on"+type,listener);//ie8以下支持
        }else{
            obj["on"+type]=listener;
        }
    }
    /**
     * 移出事件
     * @param obj  事件源
     * @param type 事件名称
     * @param listener 事件处理程序
     */
    function removeEventListener(obj,type,listener){
        if(obj&&obj.removeEventListener){
            obj.removeEventListener(type,listener,false);
        }else if(obj&&obj.detachEvent){
            obj.detachEvent("on"+type,listener);
        }else{
            obj["on"+type]=null;
        }
    }
    /**
     * 阻止事件冒泡
     * @param event
     */
    //function cancelBubble(event) {
    //    if(event.preventBubble){
    //        event.stopPropagation();//高级版本支持
    //    }else{
    //        event.cancelBubble = true;//IE8
    //    }
    //}
    function cancelBubble(event) {
        if(event.stopPropagation){
            event.stopPropagation();//高级版本支持
        }else{
            event.cancelBubble = true;//IE8
        }
    }

//----------------------------------------------------------------------
    var text  = {
        /**
         * 获取元素内部的内容
         * @param element
         * @returns {*}
         */
        getText:function(element){
            // 能力检测  所谓的能力检测就是看浏览器是否支持当前对象的属性或是方法
            if(typeof element.innerText=="string"){ // if()放 boolea类型的值，或是关系表达式，或是逻辑表达式 除以上之外，if的小括号里面还会默认的隐式调用Boolean()，将其它类型的值隐式转换成对应的boolean类型的值   0 "" undefined null false NaN
                return   element.innerText;
            }else{
                return  element.textContent;//只有低版本的火狐支持
            }
        },
        /**
         * 添加元素内部UN诶荣
         * @param element
         * @param value
         */
        setText:function(element,value){
            if(typeof element.innerText=="string"){
                element.innerText = value;
            }else {
                element.textContent = value;//只有低版本的火狐支持
            }
        }
    }

//---------------------------------------------------------------------------
    /**
     * 1）获得兄弟姐妹节点
     * 2）父元素的第一个节点与最后一个节点
     * @type {{getNextElement: Function, getPreviousElement: Function, getFirstElement: Function, getLastElement: Function}}
     */

    var tagNode = {
        getNextElement:function(element){
            if(element.nextElementSibling){
                return element.nextElementSibling;
            }else { // 到了else就说明，浏览器不支持nextElementSibling，就只能用所有的浏览器都支持的nextSibling
                var ele = element.nextSibling;
                while(ele && ele.nodeType!==1){　//第一个ele的意思，就是首先得保证有这么一个兄弟姊妹节点，然后再判断此节点的节点类型是不是标签节点
                    ele = ele.nextSibling; //
                }
                return ele;
            }
        },
        getPreviousElement:function(element){
            if(element.previousElementSibling){
                return element.previousElementSibling;
            }else { // 如果到了else里面了，就是不支持previousElement比如说IE8，只能用原始的所有的浏览器都支持的previousSibling
                var ele = element.previousSibling;
                while(ele && ele.nodeType!==1){
                    ele = ele.previousSibling; //继续 在当前的节点上往上找节点
                }
                return ele;
            }
        },
        getFirstElement:function(element){
            if(element.firstElementChild){
                return element.firstElementChild;
            }else { // 到了else里面的话，就是不支持firstElementChild
                var ele = element.firstChild;//先拿到当前对象的第一个子节点
                while(ele && ele.nodeType!==1){
                    ele= ele.nextSibling;
                }
                return ele;
            }
        },
        getLastElement:function(element){
            if(element.lastElementChild){
                return element.lastElementChild;
            }else {
                // 如果到了else里面，说明不支持lastElementChild,只能用所有的浏览器都支持的lastChild
                var ele = element.lastChild;
                while(ele && ele.nodeType !==1){
                    ele =  ele.previousSibling;
                }
                return ele;
            }
        }
    }

    /**
     * 获得ID类名元素
     * @param id
     * @returns {Element}
     */
    function $$(id){
        return document.getElementById(id);
    }

    /**
     * Created by Administrator on 2016/10/25.
     */
    /**
     * 获得标签对象属性值的函数
     * @param obj
     * @param attr
     * @returns {*}
     */
//*********************************************************************************************
    /**
     * 匀速运动
     * @param obj
     * @param target
     */
    function constant(obj,target){
        clearInterval(obj.timerId); // 对象的属性和变量几乎是一样的，都是用来存储数据的
        obj.timerId = setInterval(function (){
            var leader = obj.offsetLeft;//获得标签当前的位置   600
            var step = 9;
//                    if(leader<=target){
//                        step = step;
//                    }else {
//                        step = -step; //是将原值取反之后，再赋值给step
//                    }
            step = leader<=target?step:-step;
            if(Math.abs(target-leader)>Math.abs(step)){
                // 当对象当前的位置和目标位置有足够长的距离的时候，也就是大于N个步长 的时候，才会让当前对象不断的匀速运动到目标位置 ，如果当前对象的位置和目标位置不足一个步长的时候，这个时候就不需要加步长了，直接让对象的当前位置到达目标位置就可以
                leader = leader + step;
                obj.style.left = leader+'px';
            }else {
                clearInterval(obj.timerId);//大于400的时候，就要清空定时器
                obj.style.left = target+'px';//把最后不足一个步长的距离 ，自动的补上，设置成目标位置即可
            }
        },15)
    }

    /**
     * 获得元素的属性
     * @param obj
     * @param attr
     * @returns {*}
     */

    /**
     * 由快到慢的运动
     * @param obj   元素对象
     * @param json  属性对象
     * @param fn    回调函数
     */
    function animate(obj,json,fn){
        // 为了保证当前对象运动的时候，只会开启一个定时器，需要将定时器存在当前对象的属性中
        clearInterval(obj.timerId);
        obj.timerId = setInterval(function (){
            var flag = true;
            for(var key in json){
                //var leader = obj.offsetLeft;// style.left，但是style的方式只能获取 行内的属性值，如果left是在内嵌或是默认没写的情况下，我们只能是用offsetLeft来获取
                //var att=getStyle(obj,attr); // 获得当前对象现在的attr这个属性值
                //var leader = parseInt(att)||0 ;// 将这个字符串转换为number类型，如果没有这个属性的话，给一个默认的值0
                //var step = (target-leader)/10;

                if(key=="opacity"){
                    var leader = parseInt(getStyle(obj,key)*100)||0; //因为opacity是小数，为了便于计算，先将此值扩大100倍
                    var target = json[key]*100;//这个就是json里面的目标位置
                    var step = (target-leader)/10;
                    step=  step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    obj.style[key] = leader/100;
                }else if(key=="zIndex"){
                    var leader = parseInt(getStyle(obj,key))||0; //当前对象现在的属性值
                    var target = json[key];//这个就是json里面的目标位置
                    step = (target-leader)/10;
                    step=  step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    obj.style[key] = leader;
                }else {
                    var leader = parseInt(getStyle(obj,key))||0; //当前对象现在的属性值
                    var target = json[key];//这个就是json里面的目标位置
                    var step = (target-leader)/10;
                    step=  step>0?Math.ceil(step):Math.floor(step);
                    leader = leader + step;
                    obj.style[key] = leader +'px';
                }

                if(leader!=target){ //如果有一个属性的值没有到达目标位置的话,就要让flag为false
                    flag = false;
                }
            }
            if(flag){ // 要根据flag的值来确定是否要清除定时器
                clearInterval(obj.timerId);
                if(fn){ //如果fn有值，并且是一个函数的话，则调用这个函数
                    fn();
                }
            }
        },15)
    }
    /**
     * offset家族系列封装
     * @param obj
     * @param attr
     * @returns {*}
     */
    function getStyle(obj,attr){
        // 能力检测  所谓的能力检测，也就是看浏览器是否支持此对象的属性或是方法
        if(obj&&obj.currentStyle){
            return  obj.currentStyle[attr];
        }else {
            return  getComputedStyle(obj,null)[attr];
        }
    }
    /**
     * scroll家族系列封装
     * top
     * left
     * 被页面卷去的部分scroll封装
     * @returns {{top: (Number|number), left: (Number|number)}}
     */
    function scroll(){
//        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//        var scrollLeft = window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
        // 调用函数的时候，只能有一个返回值  要想让函数返回多个值的话，只能是用数组或是对象
//        var obj = {};
//        obj.top = scrollTop;
//        obj.left= scrollLeft;
//        return obj;

//        var obj = {}; // JS是动态的弱类型语言，可以随时的给对象添加属性和方法
//        obj.top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//        obj.left = window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
//        return obj;

//        var obj = {
//            top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
//            left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
//        }
//        return obj;
        return {
            top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
        }
    }
    /**
     * client家族封装
     * Client封装
     * width
     * height
     * @returns {{width: (Number|number), height: (Number|number)}}
     * @constructor
     */
    function Client(){
//        var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||0;
//        var clientHeight = window.innerHeight ||document.documentElement.clientHeight||document.body.clientHeight||0;

//        var obj = {};
//        obj.width=clientWidth;
//        obj.height = clientHeight;
//        return obj;

//        var obj = {
//            width: clientWidth,
//            height:clientHeight
//        }
//        return obj;

//        var obj = {
//            width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||0,
//            height: window.innerHeight ||document.documentElement.clientHeight||document.body.clientHeight||0
//        }
//        return obj;

        return {
            width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||0,
            height: window.innerHeight ||document.documentElement.clientHeight||document.body.clientHeight||0
        }
    }



