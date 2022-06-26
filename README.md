# graphics.js &middot; [![NPM Version][npm-version-image]][npm-url] [![NPM Install Size][npm-install-size-image]][npm-install-size-url] [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

Javascript rewrite of Andrew Merrill's 2D python graphics library. Just like from Intro to CS~

<img src="/redball.gif" width="401" height="298"></img>

To make an animation or game, you need to write three functions:

- A function that initializes a new world
- A function that updates the world for each frame of the animation
- A function that draws the world on the screen

Try it out with this [CodePen](https://codepen.io/pen?template=xxYmQyy).

```js
import { makeGraphicsWindow, runGraphics, fillCircle } from '@soft-boy/graphics.js'
makeGraphicsWindow(document.getElementById('canvas'))

// this function is called once to initialize your new world
function startWorld(world) {
  world.ballX = 50
  world.ballY = 300
}

// this function is called every frame to update your world
function updateWorld(world) {
  world.ballX = world.ballX + 3
}

// this function is called every frame to draw your world
function drawWorld(world) {
  fillCircle(world.ballX, world.ballY, 50, "red")
}

runGraphics(startWorld, updateWorld, drawWorld)
```

# Installation

# Documentation

Link to Andrew's original reference [here](http://inside.catlin.edu/site/compsci/resources/python/graphics/PythonGraphics.html).

# Examples

 - Pong implementation: https://github.com/soft-boy/graphics.js-example

[npm-downloads-image]: https://badgen.net/npm/dm/@soft-boy/graphics.js
[npm-downloads-url]: https://npmcharts.com/compare/@soft-boy/graphics.js?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/@soft-boy/graphics.js
[npm-install-size-url]: https://packagephobia.com/result?p=@soft-boy/graphics.js
[npm-url]: https://npmjs.org/package/@soft-boy/graphics.js
[npm-version-image]: https://badgen.net/npm/v/@soft-boy/graphics.js
