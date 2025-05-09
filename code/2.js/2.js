// 分装class和id
function $(selector){
  	if (selector.substring(0,1)=="."){
         return document.getElementsByClassName(selector.substring(1));
	}else{
		 return document.getElementById(selector.substring(1));
	}
}
// 播放器的变化
var judge = true;
var timer;
$(".background1")[0].onclick = function(){
	if(judge){
    $(".audio")[0].play();
    judge = false;
    timer=setInterval(Time,1000);
    this.style.backgroundPositionY = "-65px"
    }else{
    $(".audio")[0].pause();
    judge = true;
    clearInterval(timer);
    this.style.backgroundPositionY = "-4px"}
}
// 导入歌词
var str="";
function init(){
	var lyrics1 = ($(".lyrics")[0].textContent.split("["));
    lyrics1.forEach(function(argument) {
    	var lyrics2 = argument.split("]");
    	var lyrics3 = lyrics2[1];
    	if(lyrics3){
    		str+="<p>"+lyrics3+"</p>";
    	}
    	$(".container-rightbottom")[0].innerHTML =str  	
    })
}
init()
// 进度条
function Time(){
	var a = $(".audio")[0].currentTime;//当前时间
	var b = $(".audio")[0].duration;//总时间
	var c = $(".background7")[0].offsetWidth;//总路程
	$(".background8")[0].style.marginLeft = a/b*c+"px";
	$(".background9")[0].style.width = a/b*c+"px";
}
Time();
//移动进度条
$(".background10")[0].onmousedown = function(e){
	document.onmousemove = function(e){
	var x = e.clientX;
	var f = x-$(".background10")[0].offsetLeft;
	$(".background8")[0].style.marginLeft = f+"px";
	$(".background9")[0].style.width = f+"px"; 
	}
	document.onmouseup = function(){
		this.onmousemove=null;
    }
}



	