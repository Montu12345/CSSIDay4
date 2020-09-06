/* global createCanvas, colorMode, strokeWeight, background, rect, stroke, fill,
HSB, mouseX, mouseY */

let brushHue

//(c, 50, 100) will give pastels
  // (c, 100, 100) will give neons
  // (c, 100, 50) will give dark colors
function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(95);
  prevX = 0;
  prevY = 0;
  numberOfColorsChoices = 3;
  brightness = 0;
  saturation = 0;
  shape = 0;
  textSize(16);
  textAlign(CENTER);
  
  //color choices at top, shape choices at the bottom of the canvas
  text('Pastels', width/6, 30);
  text('Neon', width/2, 30);
  text('Dark Colors', width*(5/6), 30);
  text('Squares', width/6, height - 30);
  text('Line', width/2, height - 30);
  text('Ellipse', width*(5/6), height - 30);
  
}

function draw() {
  chooseColors();
  chooseShape();
  //text(shape, 100, 100);
  
  //depending on where the mouse is clicked, the brush will change its color or shape (start drawing squares, lines, or ellipses)
  if(mouseIsPressed && mouseY > (height*(1/8)) && mouseY < (height*(7/8))){
   // rect(mouseX, mouseY, 15, 15);
    brushStroke();
    if (shape === 0){
      square(mouseX, mouseY, 10);
    }
    else if (shape === 1){
      line(prevX, prevY, mouseX, mouseY);
    }
    else if (shape === 2){
      ellipse(mouseX, mouseY, 10);
    }
    
  }
  prevX = mouseX;
  prevY = mouseY;
}

//color changes, but type of color (pastel, dark, neon) remains the same
function chooseColors() {
  colorBrushFunction();
  brushHue += 1
  stroke(brushHue%360, brightness, saturation);
  fill(brushHue%360, brightness, saturation);
}

function keyPressed(){
  background(95); 
}

//lines going from left to right is thinner than lines going from right to left; done to make the pen look like calligraphy.
function brushStroke(){
  if (prevX < mouseX){
    strokeWeight(5);
  }
  else{
    strokeWeight(10);
  }
}

//changes the color type (neon, pastel, dark) based on where the mouse is clicked
function colorBrushFunction(){
  if (mouseIsPressed){
    for (let j = 0; j < numberOfColorsChoices; j++){
      if ((width*(j/numberOfColorsChoices))<mouseX && mouseX<(width*((j+1)/numberOfColorsChoices)) && mouseY < 30){
        if (j == 0){
          brightness = 50;
          saturation = 100;
        }
        if (j == 1){
          brightness = 100;
          saturation = 100;
        }
        if (j == 2){
          brightness = 100;
          saturation = 50;
        }
      }
    }
  }
}

/*
function chooseShape(){
  if (mouseIsPressed){
    for (let k = 0; k < numberOfColorsChoices; k++){
      if ((width*(k/numberOfColorsChoices))<mouseX && mouseX<(width*((k+1)/numberOfColorsChoices)) && mouseY > (height - 50)){
        shape = k;
  }
  }
}
}
*/
