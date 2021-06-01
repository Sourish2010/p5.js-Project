function preload()
{

}
function setup()
{

canvas = createCanvas(600,600);
canvas.center();
capture = createCapture(VIDEO);
capture.size(130,100);
capture.hide();
}
function draw()
{
stroke(0, 128, 0);
fill(255, 255, 255);
strokeWeight(15);
rect(50, 100, 400, 340);
stroke(255, 0, 0);
image(capture,75,120,350,300);
fill(255, 0, 0);
circle(50, 100, 32);
circle(50, 440, 32);
circle(450, 100, 32);
circle(450, 440, 32);
}
function takeSnapshot()
{
    save('capture.png');
}