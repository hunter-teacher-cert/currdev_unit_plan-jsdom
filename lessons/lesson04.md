# Lesson 04: Iterating


## Context
* **Course:** Javascript Programming
* **Unit:** DOM (Document Object Model)
* **Main objective:** Be able to select multiple elements and loop through them to perform an action
* **Prior knowledge:** Students should have experience with:
  * JS fundamentals: strings, arrays, functions, conditionals, loops
  * DOM Basics
  * DOM Details
  * DOM Creating
* **Standard(s):** 9-12.CT.4: Implement a program using a combination of student-defined and third-party functions to organize the computation.


## Warmup

Review the syntax of a `for` loop, such as iterating through an array:

```js
var fruits = [
    "apples",
    "bananas",
    "oranges"
]

for(var i = 0; i < fruits.length; i++>){
    console.log("I love " + fruits[i]);
}
// I love apples
// I love bananas
// I love oranges
```

Today we will see how a `.forEach()` loop can simplify the syntax when looping through many similar elements.

## Mini-lesson: **DOM Iterating**

### Explain:

* `.forEach( function(param){ } )`
  * Allows us to iterate through several elements in an array.
```js
allThings.forEach(function(oneThing,optionalI){ // note that the index is optional
    // code using oneThing
});
```
* `.querySelectorAll()`
  * Allows us to select multiple elements of a type/class, whereas `.querySelector()` only selected one (or the _first_ of many)

---

### Demo:

Start with the following HTML:

```html
<ul id="groceries">
    <!--populated later-->
</ul>

<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
```

CSS:

```css
p {
    background-color: gray;
    margin: 0;
    padding: 10px;
}
```

and JS:

```js
var groceries = ["milk","bread","eggs"];
var groceriesList = document.querySelector("#groceries");
```
            
---

**traditional `for` loop**

Imagine we wanted to add `<li>` elements to the page using a traditional `for` loop. We could do it this way:

```js
for(var i = 0; i < groceries.length; i++){
    // groceries[i]; // the current grocery
    var newItem = document.createElement("li");
    newItem.innerHTML = groceries[i];
    groceriesList.appendChild(newItem);
}
```

---

**refactored using `.forEach()`**

Now comment that out, and watch how much simpler it is to use a `.forEach()` loop:

```js
groceries.forEach(function(grocery){
    // now we can use `grocery` which represents the current grocery
    var newItem = document.createElement("li");
    newItem.innerHTML = grocery;
    groceriesList.appendChild(newItem);
});
```


---

**`.querySelectorAll()`**

This becomes very useful when we want to iterate through elements of a certain type (or in a certain class). Let's create paragraphs that alternate background colors. Before we do this, we should comment out some CSS:

```css
p {
    /*background-color: gray;*/
    margin: 0;
    padding: 10px;
}
```

Now watch what happens when we leverage modular arithmetic to alternate between even/odd elements:

```js
var paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
paragraphs.forEach(function(paragraph,i){
    paragraph.style.backgroundColor = "gray";
    if(i % 2 == 0){ // 0, 2, 4, 6, etc
        paragraph.style.backgroundColor = "lightgray";
    } else { // 1, 3, 5, 7, etc
        paragraph.style.backgroundColor = "gray";
    }
});
```

Magic! 

---

**refactored using traditional `for` loop**

Keep in mind that we could still iterate through these elements using a traditional `for `loop. Comment out that code, and let's see how to achieve the same results with our prior knowledge:

```js
for(var i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.backgroundColor = "gray";
    if(i % 2 == 0){ // 0, 2, 4, 6, etc
        paragraphs[i].style.backgroundColor = "lightgray";
    } else { // 1, 3, 5, 7, etc
        paragraphs[i].style.backgroundColor = "gray";
    }
}
```


## Practice
Have students write any HTML and use Javascript to make _anything_ that demonstrates their understanding of today's concepts.
