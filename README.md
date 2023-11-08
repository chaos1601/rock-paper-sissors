## Rock, Paper, Scissors
I am sure everyone has at least heard of this game, but did you know that you can play this game against a computer just by using HTML, CSS, and JavaScript? 
In this tutorial, I will show you how it is done.

### Steps
You first need to set up your HTML, CSS and JavaScript correctly which you should have enough knowleage to do so without me needing to explain. 
Same goes for connecting CSS and JavaScript to HTML. 

### HTML
Some things you will need would be, a ```<div>``` with a class named "container", and within that ```<div>```, you have another ```<div>``` with a class
to make sure the game is in the center of the screen as shown below.
``` HTML
<div class="container">
  <div class="game">
    <h1>Rock, Paper, Scissors</h1>
    <p>Choose your move:</p>
    <button class="rock">Rock</button>
    <button class="paper">Paper</button>
    <button class="scissors">Scissors</button>
    <p class="result"></p>
    </div>
</div>
```
Note that the names of the classes for the buttons is not important, but you need to make sure you use the same classes throughout the code, 
otherwise, it will never work. This should be obvious, but the code above, isn't everything that goes into the HTML file. This is just a part.
Once you have this, you don't need to touch this file anymore unless you want to change something.

### CSS
Now that the HTML file is done, we can work on the CSS and JavaScript files. Note, you can do JavaScript before CSS if you want. If you want,
you can add a ```:root{}``` to set colors but it isn't needed. Here is the ```:root{}``` I used.
``` CSS
:root {
    --app-dark-bg: #181818;
    --app-colorful-bg: #fd5c5c;
    --app-white: #fff;
    --app-grey: #6b6b6b;
    --app-red: #ff3c57;
    --app-green: #33ab4e;
    --app-purple: #833cff;
    --app-orange: #ff833c;
    --app-blue: #3c57ff;
}
```
You can use the same, or use diffenrent ones. You can also add more if you would like, but not necessary. 

The part that is most important to getting it centered is in the body. There are a few things that if you don't have them, it will never be centered.
``` CSS
body {
    background-color: var(--app-colorful-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```



### Demo
Click ![here](https://chaos1601.github.io/rock-paper-sissors/) to see a demo.
