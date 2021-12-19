# Lesson 05: Events


## Context
* **Course:** Javascript Programming
* **Unit:** DOM (Document Object Model)
* **Main objective:** Be able to add event listeners to elements that will perform interactive tasks.
* **Prior knowledge:** Students should have experience with:
  * JS fundamentals: strings, arrays, functions, conditionals, loops
  * DOM Basics
  * DOM Details
  * DOM Creating
  * DOM Iterating
* **Standard(s):** 9-12.CT.4: Implement a program using a combination of student-defined and third-party functions to organize the computation.


## Warmup

Remind students of the function syntax that we're familiar with:

```js
// defining the function
function name(optionalParameters){
    // code to run, possible using optionalParameters
}

// calling the function
name(optionalArguments);
```

## Mini-lesson: **DOM Events**

### Explain:

* `.addEventListener(event,function(){});`
  * Allows us at make elements listen for events such as a mouse `click`
* Anonymous functions
  * In the warmup, we were reminded of a named function. In today's lesson we will see that a function can run in place, and not need a name:
```js
function(){
    // code to run
}
```
---

### Demo:

Start with the following HTML:

```html
<button>Welcome</button>
<h1></h1>
```
            
---

**`.addEventListener(event,function(){})`**

That button is just waiting to be clicked! But how do we make it listen for such event? By adding an event listener, of course!

```js
document.querySelector("button").addEventListener("click",function(){
    alert("You clicked the page!");
});
```

Let's change this to make it a little more customizable, using a `prompt`:

```js
document.querySelector("button").addEventListener("click",function(){
    var username = prompt("What is your name?");
    document.querySelector("h1").innerHTML = "Welcome, " + username;
});
```

And as a review, let's refactor this using some of our prior knowledge. Imagine we didn't have the `<h1>` already there (comment it out). We can create it on the fly!

```js
document.querySelector("button").addEventListener("click",function(){
    var username = prompt("What is your name?");
    var welcomeH1 = document.createElement("h1");
    welcomeH1.innerHTML = "Welcome, " + username;
    document.body.appendChild(welcomeH1);
});
```

Much better!

But listening for a `click` only engages the mouse. Let's see how we can listen for `keypress`es from the keyboard as well:

```js
document.addEventListener("keypress",function(event){
    console.log(event.key);
    alert("You pressed " + event.key);
});
```



## Activity

Give students the following HTML:

```html
<h1>Press "i" to increase</h1>
<h1>Press "d" to decrease</h1>
<h1 id="num"></h1>
<button>Reset</button>
<input>
```

Then show students the result of running the Javascript below, and see if they can reverse-engineer it. Then go over it.

```js
var num = 0;
var numH1 = document.querySelector("#num");
numH1.innerHTML = num;

document.addEventListener("keypress",function(event){
    if(event.key == "i"){
        num++;
        // console.log(num);
        numH1.innerHTML = num;
        
    } else if(event.key == "d"){
        num--;
        // console.log(num);
        numH1.innerHTML = num;
    }
    
    updateColor();
});

document.querySelector("button").addEventListener("click",function(){
    num = 0;
    numH1.innerHTML = num;
    updateColor();
});

function updateColor(){
    if(num > 0){
        numH1.style.color = "green";
    } else if(num < 0){
        numH1.style.color = "red";
    } else {
        numH1.style.color = "black";
    }
}
```


## Practice
Have students write any HTML and use Javascript to make _anything_ that demonstrates their understanding of today's concepts.
