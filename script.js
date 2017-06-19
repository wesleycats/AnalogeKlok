const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myTime = document.getElementById('myTime');
var time = new Date();

const face = new Image();
face.src = "images/clock.jpg";

const secPointer = new Image();
secPointer.src = "images/seconds.png";

const minPointer = new Image();
minPointer.src = "images/minutes.png";

const houPointer = new Image();
houPointer.src = "images/hours.png";

face.addEventListener('load', ()=>{
  setInterval(draw, 10);
})

function draw()
{
  var secHoek = time.getSeconds() / 60 * 2 * Math.PI;
  var minHoek = time.getMinutes() / 60 * 2 * Math.PI;
  var houHoek = time.getHours() / 60 * 2 * Math.PI;

  time = new Date();
  context.clearRect(0, 0, 500, 500);
  context.drawImage(face, 0, 0, 500, 500);
  context.save();
  context.translate(250, 250);
  context.rotate(secHoek);
  context.drawImage(secPointer, -26, -224);
  context.restore();
  context.save();
  context.translate(250, 250);
  context.rotate(minHoek);
  context.drawImage(minPointer, -29, -222);
  context.restore();
  context.save();
  context.translate(250, 250);
  context.rotate(houHoek);
  context.drawImage(houPointer, -32, -189);
  context.restore();

  myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}
