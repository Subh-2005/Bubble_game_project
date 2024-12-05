function makebubble(){
var clutter="";
for(var i=1;i<=148;i++){
    var rn=Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML=clutter;}
var timer=60;
var score=0;
var hitrn=0;
function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{

        
        clearInterval(timerint);
          document.querySelector("#pbtm").innerHTML=`Game Over`; } 
    },1000);
}
function getnewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function increaseScore(){
 score+=10;
 document.querySelector("#scoreval").textContent=score;

}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum===hitrn)
        increaseScore();
    makebubble();
    getnewHit();
});
runTimer();
makebubble();
getnewHit();
