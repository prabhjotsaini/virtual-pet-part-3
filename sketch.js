//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var fedDog
var addFood
var lastFed
var fedTime
var foodObj
var changegameState
var readState
function preload()
{
  //load images here
  food.loadImage=("food/Milk.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10)
  foodStock=database.ref('food');
  foodStck.on("value",readStock)
  food=new Food(200,200,40,40)

  feed=createButton("Feed the  dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
}


function draw() {  
background(46,139,87)
if(keyWentDown(up_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy)
  food.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })

  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood.show();
    god.addImage(sadDog);
  }

  function update(state){
    database.ref('/').update({
      gameState:state
    });
  }
}

  drawSprites();
  //add styles here
textSize(50)
fill()
stroke()

function readStock(data){
  food=data.val();
}
function writeStcok(x){
  database.ref('/').update({
    Food:x})
  }
}
function feedDog(){
  dog.addIMage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock(-1));
  database.ref('/').update({
    food:foodObj.getFoodStock(),
    FeedTime:houe()
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foods
  })
}

fill(255,255,254);
textSize(15);
if(laastFed>=12){
  text("lASTfEED:"+lastFed%12+"PM",350,30)
} else if (lastFed==0){
  text("lastFeed:12Am",350,30);
}else{
    text("lastFeed:"+lastFed+"AM",350,30)
  }





