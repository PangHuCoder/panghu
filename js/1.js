function showPopup(){
	var erweima=document.getElementById("topcover");
	erweima.style.display="block";
}
function showPopup2(){
	var erweima=document.getElementById("topcover");
	erweima.style.display="none";
}
window.onload=function(){
var items=document.getElementsByClassName("item");
var circles=document.getElementsByClassName("circle");
var leftBtn=document.getElementById("btn-left");
var rightBtn=document.getElementById("btn-right");
var content=document.querySelector('.content');
var index=0;
var timer=null;
 
//清除class
var clearclass=function(){
    for(let i=0;i<items.length;i++){
        items[i].className="item";
        circles[i].className="circle";
        circles[i].setAttribute("num",i);
    }
}

function move(){
    clearclass();
    items[index].className="item active";
    circles[index].className="circle active";
}

rightBtn.onclick=function(){
    if(index<items.length-1){
        index++;
    }
    else{
        index=0;
    }
    move();
}

leftBtn.onclick=function(){
    if(index==0){
        index=items.length-1;
    }
    else{
        index--;
    }
    move();
}

timer=setInterval(function(){
    rightBtn.onclick();
},1500)
//点击圆点时，跳转到对应图片
for(var i=0;i<circles.length;i++){
    circles[i].addEventListener("click",function(){
        var point_index=this.getAttribute("num");
        index=point_index;
        move();
    })
 
}
//鼠标移入清除定时器
content.onmouseover=function(){
    clearInterval(timer);
        timer=setInterval(function(){
            rightBtn.onclick();
        },3000)
}
//鼠标移出又开启定时器
content.onmouseleave=function(){
    clearInterval(timer);
    timer=setInterval(function(){
        rightBtn.onclick();
    },1000)
}
}

