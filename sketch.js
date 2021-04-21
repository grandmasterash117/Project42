var h,m,s;
var s_end,m_end,h_end;
function setup()
 {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() 
{
  background(0);

  translate(200,200);
  rotate(-90);

  h=hour();
  m=minute();
  s=second();


   strokeWeight(8);
   stroke(0);
   noFill();
   ellipse(200,200,300,300);
 
   
   stroke(255,100,150);
   s_end=map(s,0,60,0,360);
   arc(0,0,300,300,0,s_end);
   push();
   rotate(s_end);
   stroke(255,100,150);
   line(0,0,120,0);
  pop();

   stroke(150,255,100);   
   m_end=map(m,0,60,0,360);
   arc(0,0,280,280,0,m_end);
   push();
   rotate(m_end);
   stroke(150,255,100);
   line(0,0,80,0);
  pop();

   stroke(100,150,255);
   h_end=map(h%12,0,12,0,360);
   arc(0,0,260,260,0,h_end);
   push();
   rotate(h_end);
   stroke(100,150,255);
   line(0,0,60,0);
  pop();

  strokeWeight(8);
   stroke();
   noFill();
  ellipse(0,0,5);

  drawSprites();
}