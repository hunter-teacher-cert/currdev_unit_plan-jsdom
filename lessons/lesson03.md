# Lesson 03: Creating


## Context
* **Course:** Javascript Programming
* **Unit:** DOM (Document Object Model)
* **Main objective:** Be able to create elements and insert them into the document.
* **Prior knowledge:** Students should have experience with:
  * JS fundamentals: strings, arrays, functions, conditionals, loops
  * DOM Basics
  * DOM Details
* **Standard(s):** 9-12.CT.4: Implement a program using a combination of student-defined and third-party functions to organize the computation.


## Warmup

Review what parent-child relationship means. Use the following tree as an example:

```
|____nyc
| |____brooklyn
| | |____bay-ridge
| | | |____fort-hamilton
| | | |____hstat
| | |____sunset-park
| |____manhattan
| |____staten-island
| | |____sith
| |____the-bronx
| |____queens

```
* `nyc` is the parent of `brooklyn`, `manhattan`, `queens`, `staten-island`, `queens`, and `the-bronx`
* `brooklyn` has two children: `bay-ridge` and `sunset-park`
* The parent of `hstat` is `bay-ridge`
* etc.

We will use that language to help us understand how HTML elements are related to each other.

## Mini-lesson: **DOM Creating**

### Explain:

* `.document.createElement()`
  * Allows us to create new elements
* `.appendChild()`
  * Adds to the end of _inside_ of element
  * `document.body.appendChild()` adds to `body`
  * `document.querySelector().appendChild()` adds to whichever element we select
* `.insertBefore()`
  * `parent.insertBefore(what,childToGoBefore)` inserts `what` as a child of `parent` right before `childToGoBefore`
* [other](https://www.w3schools.com/jsref/dom_obj_all.asp)
  * `.children[]`, `.parentElement`, etc.

---

### Demo:

Start with the following HTML:

```html
<div id="gray">
    <p id="red">Red</p>
    <p id="green">Green</p>
    <p id="blue">Blue</p>
</div>
```

and CSS:

```css
#gray {
    background-color: lightgray;
}

#red {
    color: red;
}

#green {
    color: green;
}

#blue {
    color: blue;
}

#orange {
    color: orange;
}

.underline {
    text-decoration: underline;
}
```

---

**`document.createElement()`**

You might have seen things like:

```js
document.write("<h1 id='orange' class='underline'>Heading1</h1>");
```

This will add the element to the page, but then we would have to use JS to re-select that element if we wanted to modify it. Instead, we can do: 

```js
var h1 = document.createElement('h1');
h1.innerHTML = "Heading 1";
```


---

**`.appendChild()`**

Append = "add to the end".

So we could then do either:

```js
document.body.appendChild(h1); // add to the end of the page
```


```js
document.querySelector("#gray").appendChild(h1); // add to the end of the gray div
```

From there, we can still update it using methods like:

```js
h1.id = "orange";
h1.classList.add("underline");
```

(comment both of the `appendChild` lines before continuing)

---

**`.insertBefore()`**

The methods above will add to the end of an element, but what about somewhere in the middle? 

```js
var greenPara = document.querySelector("#green");
var grayBox = document.querySelector("#gray");
grayBox.insertBefore(h1,greenPara); // inserts h1 to grayBox, right before greenPara
```

(comment `.insertBefore()` out)

Or we could insert within the `body`:

```js
document.body.insertBefore(h1,grayBox); // inserts h1 to the body, right before grayBox
```

## Practice
Have students write any HTML and use Javascript to make _anything_ that demonstrates their understanding of today's concepts.
