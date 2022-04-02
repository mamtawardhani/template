//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo
//create variables for bodies

function setup() {
  createCanvas(800,600)

  en = Engine.create()
  wo = en.world

//create 2 rectangle and two circular bodies 

}

function draw() 
{
 Engine.update(en)
  rectMode(CENTER)
  background("black")



}

