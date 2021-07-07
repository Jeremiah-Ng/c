function same(){
    document.getElementById("heading1").style.backgroundColor="#f0ad4e";
}
function same1(){
    document.getElementById("speed").style.backgroundColor="#d9534f";
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}