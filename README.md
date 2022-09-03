
# graphics.js &middot; [![NPM Version][npm-version-image]][npm-url] [![NPM Install Size][npm-install-size-image]][npm-install-size-url] [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

Javascript rewrite of Andrew Merrill's 2D Python graphics [library](http://inside.catlin.edu/site/compsci/resources/python/graphics/PythonGraphics.html). ~Just like from Computer Science 1

<p align='center'><img src="/redball.gif" width="480" height="356"></img><br/>Try it on <a href="https://codepen.io/pen/eYMqdyM">CodePen</a></p>

To make an animation or game, you need to write three functions:

- A function that initializes a new world
- A function that updates the world for each frame of the animation
- A function that draws the world on the screen

```js
import { makeGraphicsWindow, runGraphics, fillCircle } from '@soft-boy/graphics.js'
makeGraphicsWindow(800, 600, document.getElementById('canvas'))

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

# Quickstart

```
#install cli if you don't already have it
npm install -g create-graphics-js 

create-graphics-js my-game
cd my-game
npm start
```

# Documentation
Link to Andrew's original reference [here](http://inside.catlin.edu/site/compsci/resources/python/graphics/PythonGraphics.html).
## API
  - [Fundamental Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#fundamental-functions)
	  - [makeGraphicsWindow](https://github.com/soft-boy/graphics.js/blob/main/README.md#makegraphicswindowwidth-height-canvasdomnode)
	  - [runGraphics](https://github.com/soft-boy/graphics.js/blob/main/README.md#rungraphicsstartfunction-updatefunction-drawfunction)
	  - [endGraphics](https://github.com/soft-boy/graphics.js/blob/main/README.md#animatedrawfunction-timelimit-repeatfalse)
  - [Drawing Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawing-functions)
	  - [drawPixel](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawpixelx-y-colorblack)
	  - [drawLine](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawlinex1-y1-x2-y2-colorblack-thickness1)
	  - [drawCircle](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawcirclex-y-radius-colorblack-thickness1)
	  - [fillCircle](https://github.com/soft-boy/graphics.js/blob/main/README.md#fillcirclex-y-radius-colorblack)
	  - [drawEllipse](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawellipsex-y-width-height-colorblack-thickness1)
	  - [fillEllipse](https://github.com/soft-boy/graphics.js/blob/main/README.md#fillellipsex-y-width-height-colorblack)
	  - [drawRectangle](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawrectanglex-y-width-height-colorblack-thickness1)
	  - [fillRectangle](https://github.com/soft-boy/graphics.js/blob/main/README.md#fillrectanglex-y-width-height-colorblack)
	  - [drawPolygon](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawpolygonpointlist-colorblack-thickness1)
	  - [fillPolygon](https://github.com/soft-boy/graphics.js/blob/main/README.md#fillpolygonpointlist-colorblack)
	  - [drawString](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawstringtext-x-y-size30-colorblack-boldfalse-italicfalse)
  - [Image Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#image-functions)
	  - [loadImage](https://github.com/soft-boy/graphics.js/blob/main/README.md#loadimagefile-rotate0-scale1-fliphorizontalfalse-flipverticalfalse)
	  - [drawImage](https://github.com/soft-boy/graphics.js/blob/main/README.md#drawimageimage-x-y-rotate0-scale1-fliphorizontalfalse-flipverticalfalse)
	  - [getImageWidth](https://github.com/soft-boy/graphics.js/blob/main/README.md#getimagewidthimage)
	  - [getImageHeight](https://github.com/soft-boy/graphics.js/blob/main/README.md#getimageheightimage)
  - [Sound Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#sound-functions)
	  - [loadSound](https://github.com/soft-boy/graphics.js/blob/main/README.md#loadsoundfile-volume1)
	  - [playSound](https://github.com/soft-boy/graphics.js/blob/main/README.md#playsoundsound-repeatfalse)
	  - [stopSound](https://github.com/soft-boy/graphics.js/blob/main/README.md#stopsoundsound)
	  - [loadMusic](https://github.com/soft-boy/graphics.js/blob/main/README.md#loadmusicfile-volume1)
	  - [playMusic](https://github.com/soft-boy/graphics.js/blob/main/README.md#playmusicrepeatfalse)
	  - [stopMusic](https://github.com/soft-boy/graphics.js/blob/main/README.md#stopmusic)
  - [Mouse Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#mouse-functions)
	  - [getMousePosition](https://github.com/soft-boy/graphics.js/blob/main/README.md#getmouseposition)
	  - [getMouseButton](https://github.com/soft-boy/graphics.js/blob/main/README.md#getmousebuttonbutton)
	  - [onMousePress](https://github.com/soft-boy/graphics.js/blob/main/README.md#onmousepresslistenerfunction)
	  - [onMouseRelease](https://github.com/soft-boy/graphics.js/blob/main/README.md#onmousereleaselistenerfunction)
	  - [onWheelForward](https://github.com/soft-boy/graphics.js/blob/main/README.md#onwheelforwardlistenerfunction)
	  - [onWheelBackward](https://github.com/soft-boy/graphics.js/blob/main/README.md#onwheelbackwardlistenerfunction)
	  - [onMouseMotion](https://github.com/soft-boy/graphics.js/blob/main/README.md#onmousemotionlistenerfunction)
	  - [hideMouse](https://github.com/soft-boy/graphics.js/blob/main/README.md#hidemouse)
	  - [showMouse](https://github.com/soft-boy/graphics.js/blob/main/README.md#showmouse)
  - [Keyboard Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#keyboard-functions)
	  - [isKeyPressed](https://github.com/soft-boy/graphics.js/blob/main/README.md#iskeypressedkey)
	  - [onKeyPress](https://github.com/soft-boy/graphics.js/blob/main/README.md#onkeypresslistenerfunction-key)
	  - [onAnyKeyPress](https://github.com/soft-boy/graphics.js/blob/main/README.md#onanykeypresslistenerfunction)
	  - [onKeyRelease](https://github.com/soft-boy/graphics.js/blob/main/README.md#onkeyreleaselistenerfunction-key)
	  - [onAnyKeyRelease](https://github.com/soft-boy/graphics.js/blob/main/README.md#onanykeyreleaselistenerfunction)
	  - [sameKeys](https://github.com/soft-boy/graphics.js/blob/main/README.md#samekeyskey1-key2)
	  - [getKeyName](https://github.com/soft-boy/graphics.js/blob/main/README.md#getkeynamekey)
  - [Time Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#time-functions)
	  - [onTimer](https://github.com/soft-boy/graphics.js/blob/main/README.md#ontimerlistenerfunction-interval)
	  - [getElapsedTime](https://github.com/soft-boy/graphics.js/blob/main/README.md#getelapsedtime)
	  - [resetTime](https://github.com/soft-boy/graphics.js/blob/main/README.md#resettime)
	  - [setFrameRate](https://github.com/soft-boy/graphics.js/blob/main/README.md#setframerateframerate)
	  - [displayFPS](https://github.com/soft-boy/graphics.js/blob/main/README.md#displayfpsinterval)
	  - [getActualFrameRate](https://github.com/soft-boy/graphics.js/blob/main/README.md#getactualframerate)
  - [Math Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#math-functions)
	  - [convertToComponents](https://github.com/soft-boy/graphics.js/blob/main/README.md#converttocomponentsangle-length)
	  - [convertToAngle](https://github.com/soft-boy/graphics.js/blob/main/README.md#converttoanglex-y)
	  - [pointInPolygon](https://github.com/soft-boy/graphics.js/blob/main/README.md#pointinpolygonx-y-polygon)
  - [Misc Functions](https://github.com/soft-boy/graphics.js/blob/main/README.md#miscellaneous-functions)
	  - [getWindowWidth](https://github.com/soft-boy/graphics.js/blob/main/README.md#getwindowwidth)
	  - [getWindowHeight](https://github.com/soft-boy/graphics.js/blob/main/README.md#getwindowheight)
	  - [getScreenSize](https://github.com/soft-boy/graphics.js/blob/main/README.md#getscreensize)
	  - [setBackground](https://github.com/soft-boy/graphics.js/blob/main/README.md#setbackgroundbackground)
	  - [setWindowTitle](https://github.com/soft-boy/graphics.js/blob/main/README.md#setwindowtitletitle)
	  - [getColorsList](https://github.com/soft-boy/graphics.js/blob/main/README.md#getcolorslist)
	  - [getFontList](https://github.com/soft-boy/graphics.js/blob/main/README.md#getfontlist)
	  - [sizeString](https://github.com/soft-boy/graphics.js/blob/main/README.md#sizestringtext-size-bold-italic-font)
	  - [saveScreen](https://github.com/soft-boy/graphics.js/blob/main/README.md#savescreenfilename)
	  - [getScreenPixel](https://github.com/soft-boy/graphics.js/blob/main/README.md#getscreenpixelx-y)
## How To Specify Colors
There are two ways to specify a color:
  1. You can use a string (inside quotation marks) that names the color.  Here is a [list of available colors](http://inside.catlin.edu/site/compsci/resources/python/graphics/colors.html) that you can refer to.
For example:  `"crimson"`
  2. You can specify the red, green, and blue components of the exact color that you want to use.  Each component can vary in intensity from 0 (none) to 255 (full intensity).  You need to put square brackets around the three component values and separate them with commas. 
For example: `[220,20,60]`
  3. Any CSS color string.
For example: `"#D3D3D3"` `rgba(220, 20, 60, .5)`

## Fundamental Functions
### `makeGraphicsWindow(width, height, canvasDOMNode)`
Creates a new graphics window.  You must call this function before doing anything else with graphics or animation.
  - `width`: `number` the desired width of the animation window, in pixels
  - `height`: `number` the desired height of the animation window, in pixels
  - `canvasDOMNode`: `object` the DOM node for the html canvas element

Returns: `undefined` (nothing)

Examples:
```js
makeGraphicsWindow(800, 600, document.getElementById('canvas'))
```
### `runGraphics(startFunction, updateFunction, drawFunction)`
For an interactive, world-based program, your should call this function on the very last line of your program.
  - `startFunction`: `function`   the name of the function that initializes your new world. Takes one argument (the world).
  - `updateFunction`: `function` the name of the function that updates your world for the next frame. Takes one argument (the world).
  - `drawFunction`: `function` the name of the function that draws the frames of your animation. Takes one argument (the world).

Returns: `undefined` (nothing)

Examples:
```js
runGraphics(startWorld, updateWorld, drawWorld)
```
### `endGraphics()`
Stops the animation from running.

Returns: `undefined` (nothing)

Examples:
```js
endGraphics()
```
## Drawing Functions
### `drawPixel(x, y, color='black')`

  - `x`: `number` the x coordinate of the point
  - `y`: `number` the y coordinate of the point
  - `color`: `string` the color to use

Returns: `undefined` (nothing)

Examples:
```js
drawPixel(200, 100)
drawPixel(200, 100, "red")
```
### `drawLine(x1, y1, x2, y2, color='black', thickness=1)`
  - `x1`: `number` the x coordinate of the start of the line
  - `y1`: `number` the y coordinate of the start of the line
  - `x2`: `number` the x coordinate of the end of the line
  - `y2`: `number` the y coordinate of the end of the line
  - `color`: `string` the color to use (optional; defaults to "black")
  - `thickness`: `number` the thickness of the line (optional; defaults to 1)

Returns: `undefined` (nothing)

Examples:
```js
drawLine(200, 100, 600, 150)
drawLine(200, 100, 600, 150, "red")
drawLine(200, 100, 600, 150, "red", 10)
```
### `drawCircle(x, y, radius, color='black', thickness=1)`
  - `x`: `number` the x coordinate of the center of the circle
  - `y`: `number` the y coordinate of the center of the circle
  - `radius`: `number` the radius of the circle
  - `color`: `string` the color to use (optional; defaults to "black")
  - `thickness`: `number` the thickness of the edge (optional; defaults to 1)

Returns: `undefined` (nothing)

Examples:
```js
drawCircle(200, 100, 25)
drawCircle(200, 100, 25, "red")
drawCircle(200, 100, 25, "red", 5)
```
### `fillCircle(x, y, radius, color='black')`
  - `x`: `number` the x coordinate of the center of the circle
  - `y`: `number` the y coordinate of the center of the circle
  - `radius`: `number` the radius of the circle
  - `color`: `string` the color to use (optional; defaults to "black")

Returns: `undefined` (nothing)

Examples:
```js
fillCircle(200, 100, 25)
fillCircle(200, 100, 25, "red")
```
### `drawEllipse(x, y, width, height, color='black', thickness=1)`
  - `x`: `number` the x coordinate of the center of the ellipse
  - `y`: `number` the y coordinate of the center of the ellipse
  - `width`: `number` the width of the ellipse
  - `height`: `number` the height of the ellipse
  - `color`: `string` the color to use (optional; defaults to "black")
  - `thickness`: `number` the thickness of the edge (optional; defaults to 1)

Returns: `undefined` (nothing)

Examples:
```js
drawEllipse(200, 100, 50, 25)
drawEllipse(200, 100, 50, 25, "red")
drawEllipse(200, 100, 50, 25, "red",5)
```
### `fillEllipse(x, y, width, height, color='black')`
  - `x`: `number` the x coordinate of the center of the ellipse
  - `y`: `number` the y coordinate of the center of the ellipse
  - `width`: `number` the width of the ellipse
  - `height`: `number` the height of the ellipse
  - `color`: `string` the color to use (optional; defaults to "black")

Returns: `undefined` (nothing)

Examples:
```js
fillEllipse(200, 100, 50, 25)
fillEllipse(200, 100, 50, 25, "red")
```
### `drawRectangle(x, y, width, height, color='black', thickness=1)`
  - `width`: `number` the desired width of the animation window, in pixels
  - `height`: `number` the desired height of the animation window, in pixels
  - `canvasDOMNode`: `object` the DOM node for the html canvas element

Returns: `undefined` (nothing)

Examples:
```js
drawRectangle(200,100,300,150)
drawRectangle(200,100,300,150,"red")
drawRectangle(200,100,300,150,"red",10)
```
### `fillRectangle(x, y, width, height, color='black')`
  - `width`: `number` the desired width of the animation window, in pixels
  - `height`: `number` the desired height of the animation window, in pixels
  - `canvasDOMNode`: `object` the DOM node for the html canvas element

Returns: `undefined` (nothing)

Examples:
```js
fillRectangle(200, 100, 300, 150)
fillRectangle(200, 100, 300, 150, "red")
```
### `drawPolygon(pointlist, color='black', thickness=1)`
  - `pointlist`: `array` An array of arrays, where each subarray is the `[x,y]` coordinates of a vertex of the polygon.
  - `color`: `string` the color to use (optional; defaults to "black")
  - `thickness`: `number` the thickness of the edge (optional; defaults to 1)

Returns: `undefined` (nothing)

Examples:
```js
drawPolygon([[100,100],[200,100],[150,150]])
drawPolygon([[100,100],[200,100],[150,150]], "red", 5)
```
### `fillPolygon(pointlist, color='black')`
  - `pointlist`: `array` An array of arrays, where each subarray is the `[x,y]` coordinates of a vertex of the polygon.
  - `color`: `string` the color to use (optional; defaults to "black")

Returns: `undefined` (nothing)

Examples:
```js
fillPolygon([[100,100],[200,100],[150,150]])
fillPolygon([[100,100],[200,100],[150,150]], "red")
```
### `drawString(text, x, y, size=30, color="black", bold=false, italic=false)`

  - `text`: `string` the text to display
  - `x`: `number` the x coordinate of the top-left corner of the text
  - `y`: `number` the y coordinate of the top-left corner of the text
  - `size`: `number` the size of the letters in the text, in pixels (optional; defaults to 30)
  - `color`: `string` the color to use (optional; defaults to "black")
  - `bold`: `boolean` a boolean, true for bold, false for regular (optional; defaults to false)
  - `italic`: `boolean`a boolean, true for italic, false for regular (optional; defaults to False)

Returns: `undefined` (nothing)

Examples:
```js
drawString("You Win", 20, 550)
drawString(score, 50, 200, 40, "red")
```
## Image Functions
### `loadImage(file, rotate=0, scale=1, flipHorizontal=false, flipVertical=false)`
Loads a graphics image from a disk file.  Unless you want to draw a rectangular image, your image's background should be transparent, or you should specify the color of the image's background for the _transparentColor_ parameter (see below).  Images are cached, so if you load the same image with the same options more than once, it will reuse the originally loaded image for efficiency.
  - `file`: `number` the file that contains the image
  - `rotate`: `number` the number of degrees to rotate the image counter-clockwise  (use a negative number to rotate clockwise)  (optional; defaults to 0, meaning no rotation)
  - `scale`: `number` the scaling (resizing) factor, where 1 means no scaling, 2 means draw the image at twice its usual size, 0.5 means draw the image at half its usual size, etc. (optional; defaults to 1, meaning no scaling)
  - `flipHorizontal`: `boolean` a boolean, indicating whether to flip the image horizontally (across the Y axis), where true means flip and false means don't flip (optional; defaults to False, don't flip)
  - `flipVertical`: `boolean` a boolean, indicating whether to flip the image vertically (across the X axis), where true means flip and False means don't flip (optional; defaults to false, don't flip)

Returns: `object` an image that you can pass to the drawImage function (see below) to have drawn on the screen

Examples:
```js
let soccerball = loadImage(require("./soccer.jpg"))
let soccerball = loadImage(require("./soccer.jpg"), scale=0.5)
```
### `drawImage(image, x, y, rotate=0, scale=1, flipHorizontal=false, flipVertical=false)`
Draws a graphic image on the screen
  - `image`: `number` the desired width of the animation window, in pixels
  - `x`: `number` the x coordinate of the point on which to center the image
  - `y`: `number` the y coordinate of the point on which to center the image
  - `rotate`: `number` the number of degrees to rotate the image counter-clockwise  (use a negative number to rotate clockwise)  (optional; defaults to 0, meaning no rotation)
  - `scale`: `number` the scaling (resizing) factor, where 1 means no scaling, 2 means draw the image at twice its usual size, 0.5 means draw the image at half its usual size, etc. (optional; defaults to 1, meaning no scaling)
  - `flipHorizontal`: `boolean` a boolean, indicating whether to flip the image horizontally (across the Y axis), where true means flip and false means don't flip (optional; defaults to False, don't flip)
  - `flipVertical`: `boolean` a boolean, indicating whether to flip the image vertically (across the X axis), where true means flip and False means don't flip (optional; defaults to false, don't flip)

Returns: `undefined` (nothing)

Examples:
```js
drawImage(soccerball, 300, 200)
drawImage(soccerball, 300, 200, 90)
drawImage(soccerball, 300, 200, 90, 0.75)
drawImage(soccerball, 300, 200, scale=0.75)
drawImage(soccerball, 300, 200, 45, 0.75, false, true)
drawImage(soccerball, 300, 200, flipHorizontal=true)
```
### `getImageWidth(image)`
Returns the width in pixels of a loaded image
  - `image`: `object` the image to get the width of

Returns: `number`  The width in pixels

Examples:
```js
let width = getImageWidth(soccerball)
```
### `getImageHeight(image)`
Returns the height in pixels of a loaded image
  - `image`: `object` the image to get the width of

Returns: `number`  The height in pixels

Examples:
```js
let height = getImageHeight(soccerball)
```
## Sound Functions
We have two categories for audio functions. Sound functions are for short sound clips like sound effects. Music functions are intended for longer music clips
### `loadSound(file, volume=1)`
Loads a sound clip from a disk file (must be in WAV or OGG format, sorry no MP3s).
  - `file`: `string` the text to display
  - `volume`: `number` the x coordinate of the top-left corner of the text

Returns: `object` a sound that you can pass to the `playSound` function (see below)

Examples:
```js
let beep = loadSound(require("./beep.wav"))
let soundtrack = loadSound(require("./funkybeat.wav", 0.3))
```
### `playSound(sound, repeat=false)`
Plays a sound clip on your computer speakers.
  - `sound`: `object` the sound clip to play (must have been already loaded by the `loadSound` function)
  - `repeat`: `boolean` a boolean indicating whether to repeat the sound forever or just play it once. true means repeat forever, false means play it once.  (optional; defaults to false, play it once)

Returns: `undefined` (nothing)

Examples:
```js
playSound(beep)
playSound(soundtrack, true)
```
### `stopSound(sound)`
Stops a sound clip from playing.
  - `sound`: `object` the sound clip to stop

Returns: `undefined` (nothing)

Examples:
```js
stopSound(soundtrack)
```
### `loadMusic(file, volume=1)`
Loads a music clip from a disk file so that you can play it later using the `playMusic` function.  Only one music clip may be loaded at a time.  This supports MP3 and some other music file formats.
  - `file`: `string` the file that contains the music clip
  - `volume`: `number` a number between 0.0 and 1.0 that indicates what volume to use for this music clip.  1.0 is full volume, and 0.0 would be completely muted.  (optional; defaults to 1.0)

Returns: `undefined` (nothing)

Examples:
```js
loadMusic(require("./themesong.mp3"))
```
### `playMusic(repeat=false)`
Plays the music clip that you loaded with the `loadMusic` function.  Only one music clip can be playing at once.
  - `repeat`: `boolean` a boolean indicating whether to repeat the music forever or just play it once. true means repeat forever, false means play it once.  (optional; defaults to false, play it once)

Returns: `undefined` (nothing)

Examples:
```js
playMusic()
playMusic(true)
```
### `stopMusic()`
Stops the current music from playing.

Returns: `undefined` (nothing)

Examples:
```js
stopMusic()
```
## Mouse Functions
There are two ways you can get information from the user's mouse: Event Listeners and Direct Polling.  With an Event Listener, you write a function that gets called automatically when the user uses their mouse.  With Direct Polling, you can ask about the mouse whenever you want, which you would typically do during each frame in your update world function.You can also control the mouse pointer - showing and hiding it.
### Mouse Direct Polling
### `getMousePosition()`
Returns the current position of the mouse.

Returns: `array` an array that contains the x and y coordinates of the mouse

Examples:
```js
let [x, y] = getMousePosition()
```
### `getMouseButton(button)`
Returns whether a given mouse button is pressed or not.
  - `button`: `number` a number indicating which button to check  (1 for left, 2 for middle, 3 for right) (use 1 on a Mac with one button)

Returns: `boolean` a boolean where true means that button is currently pressed and false means it is not

Examples:
```js
if (getMouseButton(1)) {
  fireRockets = true
}
```
### Mouse Event Listeners
### `onMousePress(listenerFunction)`
Registers your function that listens for mouse pressed events.
  - `listenerFunction`: `function` the listener function that you wrote. Your listener function must take four arguments:
	  - the world
	  - the x coordinate where the mouse was when the button was pressed
	  - the y coordinate where the mouse was when the button was pressed
	  - a number indicating which button was pressed (1 for left, 2 for middle, 3 for right) (use 1 for a Mac with one button)

Returns: `undefined` (nothing)

Examples:
```js
function myMousePressedFunction(world, mouseX, mouseY, button) {
  if (button == 1 && mouseX < 100 && mouseY < 100) {
    world.myball.xspeed = 0
  }
}

function startWorld(world) {
  onMousePress(myMousePressedFunction)
}
```
### `onMouseRelease(listenerFunction)`
Registers your function that listens for mouse pressed events.
  - `listenerFunction`: `function` the listener function that you wrote. Your listener function must take four arguments:
	  - the world
	  - the x coordinate where the mouse was when the button was pressed
	  - the y coordinate where the mouse was when the button was pressed
	  - a number indicating which button was pressed (1 for left, 2 for middle, 3 for right) (use 1 for a Mac with one button)

Returns: `undefined` (nothing)
### `onWheelForward(listenerFunction)`
Registers your function that listens for mouse pressed events.
  - `listenerFunction`: `function` the listener function that you wrote. Your listener function must take three arguments:
	  - the world
	  - the x coordinate where the mouse was when the button was released
	  - the y coordinate where the mouse was when the button was released

Returns: `undefined` (nothing)
### `onWheelBackward(listenerFunction)`
Registers your function that listens for mouse pressed events.
  - `listenerFunction`: `function` the listener function that you wrote. Your listener function must take three arguments:
	  - the world
	  - the x coordinate where the mouse was when the wheel was rotated
	  - the y coordinate where the mouse was when the wheel was rotated

Returns: `undefined` (nothing)
### `onMouseMotion(listenerFunction)`
Registers your function that listens for mouse pressed events.
  - `listenerFunction`: `function` the listener function that you wrote. Your listener function must take eight arguments:
	  - the world
	  - the x coordinate that the mouse moved to
	  - the y coordinate that the mouse moved to
	  - the amount by which the x coordinate changed during this move (may be positive or negative)
	  - the amount by which the y coordinate changed during this move (may be positive or negative)
	  - a boolean for mouse button 1 (true if it was pressed, and false if it was not)
	  - a boolean for mouse button 2 (true if it was pressed, and false if it was not)
	  - a boolean for mouse button 3 (true if it was pressed, and false if it was not)

Returns: `undefined` (nothing)
### Mouse Control
### `hideMouse()`
Makes the mouse cursor invisible.

Returns: `undefined` (nothing)

Examples:
```js
hideMouse()
```
### `showMouse()`
Makes the mouse cursor visible - this is only needed if you have previously called `hideMouse()`.

Returns: `undefined` (nothing)

Examples:
```js
showMouse()
```
## Keyboard Functions
There are two ways you can get information from the keyboard: Event Listeners and Direct Polling.  With an Event Listener, you write a function that gets called automatically when a key is pressed or released.  With Direct Polling, you can ask whether a key is pressed whenever you want, which you would typically do during each frame in your update world function.

You can check out the [list of key names](http://inside.catlin.edu/site/compsci/resources/python/graphics/keys.html) to find the official names of each keyboard key.
### Keyboard Direct Polling
### `isKeyPressed(key)`
Returns whether a given keyboard key is currently pressed or not.
  - `key`: `string` A string indicating which key to check

Returns: `boolean` a boolean where true means that key is currently pressed and false means it is not

Examples:
```js
function updateWorld(world) {
  if (isKeyPressed("space")) {  
    fireRockets = true
  }
}
```
### Keyboard Event Listeners
### `onKeyPress(listenerFunction, key)`
Registers your function that listens for key pressed events.  This function will get called once each time a particular key is pressed.
  - `listenerFunction`: `function` The listener function that you wrote. Takes one argument: the world.
  - `key`: `string` A string indicating which key listen for

Returns: `undefined` nothing

Example Listener Function:
```js
function moveDown(world) {
  world.myballY = world.myballY + 5
}
```

Examples:
```js
function startWorld(world):  {
  onKeyPress(moveDown, "down")
}
```
### `onAnyKeyPress(listenerFunction)`
Registers your function that listens for any key pressed events.  This function will get called once each time any key is pressed.
  - `listenerFunction`: `function` The listener function that you wrote. Takes twos arguments: the world and the key that was pressed

Returns: `undefined` nothing

Example Listener Function:
```js
function myKeyPressedListener(world, key) {
  if sameKeys(key, "right") {
    world.myballX = world.myballX + 5
  }
  if sameKeys(key, "left") {
    world.myballX = world.myballX - 5
  }
}
```

Examples:
```js
function startWorld(world):  {
  onAnyKeyPress(myKeyPressedListener)
}
```
### `onKeyRelease(listenerFunction, key)`
Registers your function that listens for key released events.  This function will get called once each time a particular key is released.
  - `listenerFunction`: `function` The listener function that you wrote. Takes one argument: the world.
  - `key`: `string` A string indicating which key listen for

Returns: `undefined` nothing

Examples:
```js
onKeyRelease(spaceBarReleased, "space")
```
### `onAnyKeyRelease(listenerFunction)`
Registers your function that listens for any key released events.  This function will get called once each time any key is released.
  - `listenerFunction`: `function` The listener function that you wrote.  Takes twos arguments: the world and the key that was released

Returns: `undefined` nothing

Examples:
```js
onAnyKeyRelease(myKeyReleasedListener)
```
### Keyboard Utility Functions
### `sameKeys(key1, key2)`
Checks whether two names for keyboard keys refer to the same key
  - `key1`: `string` The first key to compare
  - `key2`: `string` The second key to compare

Returns: `boolean` a boolean where true means that key is currently pressed and false means it is not

Examples:
```js
function myKeyPressedFunction(world, key) {
  if sameKeys(key, "right") {
    world.myballX = world.myballX + 5
  }
}
```
### `getKeyName(key)`
Returns a name for a key
  - `key`: `string` A number that was passed to your key pressed listener or your key released listener.

Returns: `string` A string that names the key that was pressed or released

Examples:
```js
function myKeyPressedFunction(world, key) {
  console.log(getKeyName(key))
}
```
## Time Functions
### `onTimer(listenerFunction, interval)`
Registers a function that listens for timer events.  Your listener function will be called over and over after the end of each timed interval.
  - `listenerFunction`: `function` the name of the listener function that you wrote. Takes one input, the world.
  - `interval`: `number` the interval between calls to the listener function, measured in milliseconds

Returns: `undefined` nothing

Examples:
```js
onTimer(enemySneezes, 2000)
```
### `getElapsedTime()`
Returns the elapsed time, in milliseconds, since the animation started.

Returns: `number` the elapsed time, measured in milliseconds

Examples:
```js
let currentTime = getElapsedTime()
```
### `resetTime()`
Resets the elapsed time that is used by `getElapsedTime`.

Returns: `undefined` nothing

Examples:
```js
resetTime()
```
### `setFrameRate(framerate)`
Sets the desired frame rate (in frames per second) for the animation.  If you specify a frame rate that is too high, your animation may run at a slower frame rate as limited by your graphics hardware.  The frame rate defaults to 60 frames per second.
  - `framerate`: `number` The frame rate that you want (in frames per second)

Returns: `undefined` nothing

Examples:
```js
setFrameRate(60)
```
### `displayFPS(interval)`
Makes your program display the actual frame rate (in frames per second) in the Python Shell window every few seconds as your program runs.
  - `interval`: `number` The number of seconds between FPS reports. Use 0 to disable displaying FPS values.

Returns: `undefined` nothing

Examples:
```js
displayFPS(2)
```
### `getActualFrameRate()`
Returns current frame rate, in frames per second, of your program.  This may be lower than the frame rate you asked for if your program has too much work to do during each frame and can’t keep up.

Returns: `number` The frame rate in FPS (frames per second)

Examples:
```js
let fps = getActualFrameRate()
```
## Math Functions
These functions convert between angles and rectangular components.  All angles are measured in degrees.  Positive angles indicate counter-clockwise rotation.  A heading angle of 0 degrees points straight right (east) along the positive X axis.
### `convertToComponents(angle, length)`
Converts an angle and length into rectangular vector components.
  - `angle`: `number` the angle of counter-clockwise rotation, in degrees, where zero degrees lies along the positive X axis
  - `length`: `number` the length of the desired vector

Returns: `array` A tuple `[x, y]` containing the two vector components

Examples:
```js
let [x, y] = convertToComponents(45, 2)
```
### `convertToAngle(x, y)`
Converts rectangular vector components into an angle in degrees.
  - `x`: `number` the x component of the vector
  - `y`: `number` the y component of the vector

Returns: `number` The heading angle defined by the given vector, in degrees.

Examples:
```js
let angle = convertToAngle(3,4)
```
Other Math Functions
### `pointInPolygon(x, y, polygon)`
Determines if a point is inside a polygon
  - `x`: `number` The x coordinate of the given point
  - `y`: `number` The y coordinate of the given point
  - `polygon`: `array` The polygon, as an array of `[x, y]` subarrays

Returns: `boolean` true if the point is inside the polygon, and false otherwise.

Examples:
```js
polygon = [[10, 20], [100, 40], [50, 90]]
if (pointInPolygon(mousex, mousey, polygon)) {
  console.log("mouse is inside the polygon")
}
```
## Miscellaneous Functions
### `getWindowWidth()`
Returns the width of your window

Returns: `number` The width in pixels

Examples:
```js
let width = getWindowWidth()
```
### `getWindowHeight()`
Returns the height of your window

Returns: `number` The height in pixels

Examples:
```js
let height = getWindowHeight()
```
### `getScreenSize()`
If you have already called `makeGraphicsWindow`, this will return the size of the graphics window you made.  If you have not already called `makeGraphicsWindow`, then it returns the current resolution of the browser window.

Returns: `array` An array containing the width and height of the window or screen.

Examples:
```js
let [width, height] = getScreenSize()
```
### `setBackground(background)`
Sets the background color or image for your animation.
  - `background`: The color or image to use as a background.  If the  background  is `null`, then the background will not be erased between frames, so your moving object will leave trails (unless you erase them yourself).

Returns: `undefined` (nothing)

Examples:
```js
setBackground("red")
setBackground([240, 230, 140])
setBackground(loadImage(require("./mybackground.jpg")))
setBackground(null)
```
### `setWindowTitle(title)`
Sets the title of the window.
  - `title`: `string` the title for the window

Returns: `undefined` (nothing)

Examples:
```js
setWindowTitle("Cool Game")
```
### `getColorsList()`
Returns a list of the names of all of the [built-in colors](http://inside.catlin.edu/site/compsci/resources/python/graphics/colors.html) supported by this library.

Returns: `array` An array of strings, each of which is the name of a built-in color.

Examples:
```js
let colorlist = getColorsList()
```
### `getFontList()`
Returns an array of the names of all of the built-in Fonts supported by this library.

Returns: `array` An array of strings, each of which is the name of a built-in font.

Examples:
```js
let fontlist = getFontList()
```
### `sizeString(text, size, bold, italic, font)`
Computes the number of pixels needed to draw a string
  - `text`: `string` the x coordinate of the start of the line
  - `size`: `number` the y coordinate of the start of the line
  - `bold`: `boolean` true  for bold,  false  for regular (optional; defaults to false)
  - `italic`: `boolean` true  for italic,  false  for regular (optional; defaults to false)
  - `font`: `string` the name of the font to use - see  `getFontList`  to find out what fonts are available (optional; defaults to the default system font)

Returns: `undefined` (nothing)

Examples:
```js
let [width, height] = sizeString("score: ", 30)
```
### `saveScreen(filename)`
Saves a snapshot of the current screen to a file.
  - `filename`: `string` The filename of the file in which to save the image.  The format of the file will be determined by the filename extension.

Returns: `undefined` (nothing)

Examples:
```js
saveScreen("screenshot.jpg")
```
### `getScreenPixel(x, y)`
Returns the color of a particular pixel on the screen
  - `x`: `number` the x coordinate of the pixel
  - `y`: `number` the y coordinate of the pixel

Returns: `array` An array containing the color.  The tuple will have 4 parts, for the red, green, blue, and opacity components of the color, each of which is a number between 0 and 255.

Examples:
```js
let [red, green, blue, opacity] = getScreenPixel(x,y)
```
# Examples

 - Pong implementation: https://github.com/soft-boy/graphics.js-example

[npm-downloads-image]: https://badgen.net/npm/dm/@soft-boy/graphics.js
[npm-downloads-url]: https://npmcharts.com/compare/@soft-boy/graphics.js?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/@soft-boy/graphics.js
[npm-install-size-url]: https://packagephobia.com/result?p=@soft-boy/graphics.js
[npm-url]: https://npmjs.org/package/@soft-boy/graphics.js
[npm-version-image]: https://badgen.net/npm/v/@soft-boy/graphics.js
