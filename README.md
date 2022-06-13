# graphics.js

  Javascript rewrite of Andrew Merrill's 2D graphics library. Just like from Intro to CS~
  
  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```js
import { makeGraphicsWindow, runGraphics, fillCircle } from '@soft-boy/graphics.js'
makeGraphicsWindow(document.getElementById('canvas'))

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
```

# Documentation

Link to Andrew's original reference [here](http://inside.catlin.edu/site/compsci/resources/python/graphics/PythonGraphics.html).

# Installation

 - Use this [CodePen](https://codepen.io/pen?template=xxYmQyy) to try things out immediately.

# Examples

 - Pong implementation: https://github.com/soft-boy/graphics.js-example

[npm-downloads-image]: https://badgen.net/npm/dm/@soft-boy/graphics.js
[npm-downloads-url]: https://npmcharts.com/compare/@soft-boy/graphics.js?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/@soft-boy/graphics.js
[npm-install-size-url]: https://packagephobia.com/result?p=@soft-boy/graphics.js
[npm-url]: https://npmjs.org/package/@soft-boy/graphics.js
[npm-version-image]: https://badgen.net/npm/v/@soft-boy/graphics.js
