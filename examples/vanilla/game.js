import { makeGraphicsWindow, runGraphics, fillCircle } from '../../src/index.js'
makeGraphicsWindow(800, 600, document.getElementById('canvas'))

////////////////////////////////////////////////////////////
// this function is called once to initialize your new world

function startWorld(world) {
  world.ballX = 50
  world.ballY = 300
}

////////////////////////////////////////////////////////////
// this function is called every frame to update your world

function updateWorld(world) {
  world.ballX = world.ballX + 3
}

////////////////////////////////////////////////////////////
// this function is called every frame to draw your world

function drawWorld(world) {
  fillCircle(world.ballX, world.ballY, 50, "red")
}

////////////////////////////////////////////////////////////

runGraphics(startWorld, updateWorld, drawWorld)