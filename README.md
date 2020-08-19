## Simple Javascript Tic Tac Toe

## Concepts
#### Functions
Functions (also sometimes called methods in other languages) are mini programs that run every time you call them. 
If you need to run the same block of code more than one time, put it into a function and then run the function as 
many times as you need. 

You always want your code DRY (Don't Repeat Yourself) -- so if you see a lot of things repeated
in your code, that's bad.

You can pass things to your function by putting something in the ()'s, for example:
```
function say_hi(name) {
   alert(name+" is cool");
}

say_hi("Bob");
say_hi("Jill");
```
The above code will give 2 alerts, "Bob is cool" and "Jill is cool".
 
## jQuery
jQuery adds a bunch of functions to Javascript to make it suck less. Below are some things that are used in our code.

#### Addresses
`$('.something')` let's you do things to anything that has a class called "something", for example `<div class="something" \>`.

`$('#something')` let's you do things to whatever has an ID of "something", for example `<div id="something" \>`.

#### Changing the value of something in HTML
If we have `<div id="name">Bob</div>`

`$('#name').html('Jill');` will change "Bob" to "Jill".


#### Listeners
A Listener is a function that gets called when a user does something (for example they click on something).
If we have `<div id="name">Bob</div>`, 
```
$('#name').click(function() {
    alert("Hello Bob!");
});
```
this listener will do a "Hello Bob!" alert every time you click on the Bob div tag. 

## Recommended Class Flow
1. Copy/paste the code from [styles.css](https://raw.githubusercontent.com/rogergraves/tictactoe/d136c276c8084ea0867f2b713e8af9c70d7630ef/app.js) into your own `styles.css`.
2. Copy/paste the code from [index.html](https://raw.githubusercontent.com/rogergraves/tictactoe/master/index.html), [app.js](https://raw.githubusercontent.com/rogergraves/tictactoe/d52fb7828ac90fae2a099d737c5782fecf46359f/app.js) and [style.css](https://raw.githubusercontent.com/rogergraves/tictactoe/master/style.css) into your `index.html`.
3. Make changes to the CSS in styles.css to make it look how you want.
4. Create function that replaces a cell with an 'X' if it isn't occupied: [sample commit](https://github.com/rogergraves/tictactoe/commit/b9932462f400e7bd832385378044ee1bc7e7e288)
5. Create listener for the Reset button and create function that clears the board: [sample commit](https://github.com/rogergraves/tictactoe/commit/0232de53571ad7ed98b90e7c7129b850022b7432)
6. Create function that randomly selects a free space for the computer player to choose: [sample commit](https://github.com/rogergraves/tictactoe/commit/2579a455463c43aed6337897c26f67fc57a2c42b)
7. Create a function that detects if somebody wins: [sample commit](https://github.com/rogergraves/tictactoe/commit/7ad7ac4df62ccab68727895039165c9972d2fdd3)
8. If things don't work properly (hey, this is Javascript after all) then fix bugs: [sample commit](https://github.com/rogergraves/tictactoe/commit/6ad7d6989e07cfaa1d52880e5be0c345536e5687)
