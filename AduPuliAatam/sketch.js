var canvas, backgroundImage;
var image;


var form, player, game;


function preload(){
  image=loadImage("images/BG.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  game = new Game();
   game.getState(); 
   game.start();

}


function draw(){
  background(image);
  if(playerCount === 2){
     game.update(1);
     } 
 if(gameState === 1){
        clear(); game.play();
       } 
  if(gameState === 2){
     game.end();
     }
 
}
