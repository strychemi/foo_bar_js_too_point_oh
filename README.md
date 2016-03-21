# Unit 15 Assessement

Fork and clone this repo, and submit a pull request when you're done.





## Intermediate JavaScript (and a bit of AJAX)

Answer the conceptual questions on [this short Google Form](https://docs.google.com/forms/d/1STLaLWe8vPRbuLVytCccepwbIu4Rwol7jbtDGQ6-vxs/viewform) to the best of your ability.








## Refactor a Game


I have invented the most mind-numbing game imaginable.
You just click on squares to get points.


**Helpful hints:**

1. If you want to set a data attribute via jQuery you **MUST** use `$(selectorHere).attr('data-thing', value)`. The jQuery `data()` method is **READ ONLY**.
1. If you want a simple native JavaScript method to duplicate an array use `array.slice()` with no arguments. It returns a new array with the same contents.



### `just-clicking/css/style.css`

You've been provided with default CSS, no need to style at all!



### `just-clicking/index.html`

Open `just-clicking/index.html` in your browser.
Click a few squares and get a feel for how the game works.

**Notice** that all of the files in `just-clicking/js/` are included at the bottom of `just-clicking/index.html`.
You will need to comment out or remove the script tag for `main.js` once you begin coding your refactored version of the game.



### `just-clicking/js/main.js`

Now look at `just-clicking/js/main.js`.
You will find that the entire game is stuffed into a `$(document).ready()` call.
Refactor this code to use the MVC and the Revealing Module Pattern.

**NOTE:** You've been provided with [Underscore.js](http://underscorejs.org) specifically for it's `_.shuffle` function. This makes it simple to choose a random square.




### Requirements:



#### `JC`

You must namespace your model, view, and controller under the `JC` object.



#### `just-clicking/js/app.js`

Use this file as the bootstrap (start up) file for your game.




#### Dependencies

The controller will need the model and view.
The view will need jQuery.
The model will need Underscore.

Inject these dependencies into your modules, via dependency injection.




#### `JC.model` in `just-clicking/js/model.js`

##### Public Methods:

- `getScore()`
    - returns the current player score
- `getSquares()`
    - returns an array of 0s or 1s representing active and inactive squares (**1 DIMENSIONAL**)
- `activateRandomSquare()`
    - randomly sets the first found inactive square, if all squares are active it has no effect on any square's state
- `processSquareClick(index)`
    - if the square at the specified index is active (1)
        - it is set to inactive (0)
        - 10 points are added to the score

**Visibility:** The score and array of squares (integers) must NOT be directly modifiable i.e. they should be private variables. If a player edits the `#score` span in the console, it should reset on their next click. They should NOT exist as properties on the public API of `JC.model`.

**Coupling:** The model must not call the controller or view. Any information that the model needs must be passed explicitly to it.




#### `JC.view` in `just-clicking/js/view.js`

##### Public Methods:

- `init(onClick)`
    - accepts an `onClick` callback function as a parameter
        - this callback should be used to send the index of the clicked square to the controller (loosely couples your view and controller)
    - initializes any attributes on HTML `.square` elements needed to identify them (data attributes are your friend)
    - sets up your click event listeners
- `updateSquares(dataSquares)`
    - accepts an array of integers as the data representation of the squares
    - correctly renders the squares applying an `active` class to those with an active value
- `updateScore(points)`
    - accepts a points parameter
    - updates the view's scoreboard with the passed value

**Coupling:** The view must be passed everything in needs to update and callback upon firing click events. No calls or references to the controller or model go in the view.




#### `JC.controller` in `just-clicking/js/controller.js`

##### Public Methods:

- `init()`
    - should initialize the view and pass an `onClick` callback to receive messages from click events
    - should set up the game loop so a square is activated every second (`1000 ms`)

**Mediator:** The controller must handle all communication between the model and view. If a model or view method needs to be called, the controller is where it must happen.

**Updating Data and Rendering:** Because the controller mediates between the view and model, it is the job of the controller to handle when data is modified and when the view is updated.





#### **BONUS** (Only if you complete the above!)
1. Implement a version of the game where the board size iterates up by 1 after every 100 points.











