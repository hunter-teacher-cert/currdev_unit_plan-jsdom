# Lesson 06: Inputs


## Context
* **Course:** Javascript Programming
* **Unit:** DOM (Document Object Model)
* **Main objective:** Be able to use `input`s from the user to manipulate the document.
* **Prior knowledge:** Students should have experience with:
  * JS fundamentals: strings, arrays, functions, conditionals, loops
  * DOM Basics
  * DOM Details
  * DOM Creating
  * DOM Iterating
  * DOM Events
* **Standard(s):** 9-12.CT.4: Implement a program using a combination of student-defined and third-party functions to organize the computation.


## Warmup

As a review, have students create the following HTML `input` types:
* Text
* Radio
* Dropdown

Examples
```html
<input type="text">

<input type="radio" name="direction" value="left"> Left<br>
<input type="radio" name="direction" value="right"> Right<br>
```

## Mini-lesson: **DOM Inputs**

### Explain:

We will be able to get input from the user in the following ways:

* Text
  * `.value`
* Radio
  * `.checked`
  * `.value`
  * `.querySelector('input[name="radio-name"]:checked').value`
* Select
  * Event: **change**
  * `.value`


---

### Demo:

Start with the following HTML:

```html
<!--text-->
<input type="text" id="guess"><br><br>
<p>You guessed the password!</p>

<!--radio-->
<input type="radio" name="color" value="red" id="redRadio"> Red<br>
<input type="radio" name="color" value="green" id="greenRadio"> Green<br>
<input type="radio" name="color" value="blue" id="blueRadio"> Blue<br>


<!--select / dropdown-->
<select id="language">
   <option value="html">HTML</option>
   <option value="css">CSS</option>
   <option value="js">JavaScript</option>
</select>
```

and CSS:

```css
p {
    display: none; /* this is on purpose */
}
```
            
---

**Text**

Instead of using a `prompt`, let's use our actual text box to make our page interactive:

```js
document.querySelector("#guess").addEventListener("keyup",function(event){
    console.log(event.target.value)
});
```

Now we always have access to what the user typed in! Let's make this more interesting.

```js
document.querySelector("#guess").addEventListener("keyup",function(event){
    // console.log(event.target.value)
    if(event.target.value == "password"){
        document.querySelector("p").style.display = "block";
    }
});
```

---

**Radio**

We also have access to any radio options a user selects:

```js
var colorRadios = document.querySelectorAll("input[name='color']");
colorRadios.forEach(function(colorRadio){
    colorRadio.addEventListener("click",function(event){
        alert("You clicked " + event.target.value);
    });
});
```

Note here that we don't always have to `listen` for the change. Sometimes we might just have a `submit` button, and _that_ is when we go grab the user's value. If all we want to know is which option is selected, we get the `value` of which option is `checked`. You don't need to do this now, but know that you can:

```js
document.querySelector('input[name='color']:checked').value;
```

---

**Select**

Similarly, we can get which option the user selected from a dropdown menu:

```js
document.querySelector("#language").addEventListener("change",function(event){
    alert("You selected " + event.target.value);
})
```



## Activity

Let's make a madlib! It will be very simple: 

> There once was a **X** named **Y**.

We'll use the text/select for content, and the radio to determine the `font-size`. The madlib should get populated when **GO** is pressed.

Give students the following HTML:

```html
<select id="animal">
    <option value="lion">Lion</option>
    <option value="tiger">Tiger</option>
    <option value="bear">Bear</option>
</select>

<input type="text" placeholder="Type a name" id="animalName"><br>

<input type="radio" name="size" value="small"> Small<br>
<input type="radio" name="size" value="large"> Large<br>

<button>Go</button>

<p></p>
```

Then show students the result of running the Javascript below, and see if they can reverse-engineer it. Then go over it.

```js
document.querySelector("button").addEventListener("click",function(){
    var madlib = "There once was a ";
    
    madlib += document.querySelector("#animal").value; // 1st input
    madlib += " named ";
    madlib += document.querySelector("#animalName").value; // 2nd input
    // console.log(madlib);
    
    // var madlibParagraph = document.createElement("p");
    var madlibParagraph = document.querySelector("p");
    madlibParagraph.innerHTML = madlib;
    // document.body.appendChild(madlibParagraph);
    
    var size = document.querySelector('input[name="size"]:checked').value; // 3rd input
    // console.log(size);
    if(size == "small"){
        madlibParagraph.style.fontSize = "6px";
    } else if (size == "large"){
        madlibParagraph.style.fontSize = "60px";
    }
});
```


## Practice
Have students write any HTML and use Javascript to make _anything_ that demonstrates their understanding of today's concepts.
