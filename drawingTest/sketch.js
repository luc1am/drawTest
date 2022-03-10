
let val;
let subTit, inputField, refresh;



// class Stroke{
//   constructor(key){
//     this.key = key;
//   }
//   display(){
//     text
//   }
// }


function setup() {
  createCanvas(500,500);
  inputField = createInput();
  inputField.position(550, 100);
  subTit = createP('enter char here');
  subTit.position(550, 65);
  refresh = createButton('refresh');
  refresh.position(550, 125);
  refresh.mousePressed(newScreen);

  background(200);
}

function draw() {
  frameRate(5);
}

function newScreen(){
  background(200);
}

function mouseDragged(){
  rectMode(CENTER);
  val = inputField.value();
  if (val ==''){
    val = '.';
  }
  textSize(32);
  text(val, mouseX, mouseY);
  console.log(val);
}
