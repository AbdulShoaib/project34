//Create variables here
var DOG
var happyDog
var database
var foodS
var foodStock
var lastFed
var fedTime
var foodObj
function preload()
{
  //load images here
  dog=loadImage("Dog.png")
  happyDog=loadImage("happydog.png")
}

function setup() {
  database=firebase.database();

  createCanvas(500,500);
  DOG=createSprite(200,380,400,10)
  DOG.addImage(dog)
  DOG.scale=0.3
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    DOG.addImage(happyDog  );
  }

  drawSprites();
}
  //add styles here
  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

    database.ref('/').update({
      Food: x
    })
  }





