const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    //backgroundImg = loadImage("bg")
      getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   if( backgroundImg ){
       background(backgroundImg);
}
    Engine.update(engine);


}

async function getBackgroundImg(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON= await response.json()
    
    var dateTime=responseJSON.datetime
    var hour = dateTime.slice(11,13)
    console.log(hour)

    if(hour>=04 && hour<=06){

bg = "images/sunrise1.png";
}else if(hour>=06 && hour<=08){

bg = "images/sunrise2.png"

}else if(hour>=08 && hour<=10){

    bg = "images/sunrise3.png"

}else if(hour>=10 && hour<=12){ 

bg = "images/sunrise4.png"

}else if(hour>=12 && hour<=14){ 

    bg = "images/sunrise5.png"
    
}else if(hour>=14 && hour<=16){ 

    bg = "images/sunrise6.png"
    
}else if(hour>=16 && hour<=19){ 

    bg = "images/sunset7.png"
    
}else if(hour>=19 && hour<=21){ 

  bg = "images/sunset8.png"
        
}else if(hour>=21 && hour<=23){ 

    bg = "images/sunset9.png"
    
}else if(hour>=23 && hour==0){ 

   bg = "images/sunset10.png"
        
}else if(hour==0 && hour<=03){ 

    bg = "images/sunset11.png"
         
 }else {
  bg = "images/sunset12.png"

 }
backgroundImg = loadImage(bg)

}
