
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
/*var x=canvas.width/2;
var y=canvas.height;
var dx=5;
var dy=10;


function drawBall(){

    ctx.beginPath();
    ctx.arc(x,y,50,0,Math.PI*2,false);
    ctx.fillStyle = 'red';
    
    ctx.fill();
    ctx.closePath();
    

}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBall();
    if(x>canvas.width){
        dx=-dx;
        
    }
    if(y>canvas.height){
        dy=-dy;
    }
    x+=dx;
    y+=dy;

}
setInterval(draw,10)
*/

var x=Math.random()*innerWidth;
var dx=(Math.random()-.5)*10;
var y=Math.random()*innerHeight;
var dy=(Math.random()-0.5)*10;
function drawBall(){

    ctx.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(drawBall)
    
    ctx.beginPath();
    ctx.arc(x,y,50,0,Math.PI*2,false);
    ctx.fillStyle = 'red';
    
    ctx.fill();
    ctx.closePath();
    x+=dx;
    y+=dy
    if(x+50>innerWidth||x-50<0)
    {
        dx=-dx;
    }
    if(y+50>innerHeight||y-50<0)
    {
        dy=-dy;
    }

}

drawBall()