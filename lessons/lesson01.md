# Lesson 01: Basics


## Context
* **Course:** Javascript Programming
* **Unit:** DOM (Document Object Model)
* **Main objective:** Introduce students to the DOM and perform basic tasks such as selecting elements and updating content.
* **Prior knowledge:** Students should have experience with:
  * JS fundamentals: strings, arrays, functions, conditionals, loops
* **Standard(s):** 9-12.CT.4: Implement a program using a combination of student-defined and third-party functions to organize the computation.


## Warmup
Show students the image below. 

![](../resources/dom.png)

Ask:
* What do you notice?
* How does this relate to what you've already learned?
* What do you wonder?

Explain that the DOM (document object model) is a way of representing the HTML elements on the page (document). 

Introduce the 6 concepts that will be learned:
* **Basics**: select/changing single elements
* **Details**: attributes, CSS
* **Creating**: adding elements
* **Iterating**: selecting/changing multiple elements
* **Events**: when P, do Q
* **Input**: text boxes, other user inputs


## Mini-lesson: **DOM Basics**

### Explain:

* inspector/console
  * remind students of how to open the developer tools (right-click > `inspect element`)
* document
  * The DOM is essentially a tree of nodes (elements) show in our browser's developer tools. So far, we've seen how the source code of an HTML file is fixed - yet, with Javascript, we'll be able to manipulate the elements on the page. This does not modify the original source code, but rather manipulates the live elements on the page and will be reset when the page reloads.
* `.querySelector()`
  * Now: ID or single element
  * _Later: Class or all elements_
* `.innerHTML`
  * `.innerHTML = ` for reading the content between the opening/closing tags
  * `.innerHTML = ` for setting the content
  * `.innerHTML += ` for adding to the content (concatenating)

---

### Demo:

**`.querySelector()`**

Use `document.querySelector()` to select elements using the exact same syntax as CSS selectors.

Select an element by its type: (will only select the first)

```js
document.querySelector('h1');
```

...will select:

```html
<h1>Hello World</h1>
```

Select an element by its ID: (will only select the first)

```js
document.querySelector('#goodbye');
```

...will select:

```html
<h1 id="goodbye">Goodbye World</h1>
```

You can _save_ these elements in a JS variable:

```js
var bye = document.querySelector('#goodbye');
```

And see it printed out:

```js
console.log(bye);
```

---

**`.innerHTML`**

Does not require parentheses like `.querySelector()` did. Use this to read/write the content between HTML opening/closing tags.

If we have:

```html
<h2>Orange</h2>
```

We can select/save it using:

```js
var myh2 = document.querySelector('h2');
```

Then print the inner contents using: 

```js
console.log(myh2.innerHTML); // Orange
```

We can also overwrite the content with 

```js
myh2.innerHTML = "Banana"; // Overwrites with Banana
```

Or concatenate content using 
```js
myh2.innerHTML += "s and Grapes"; // Add to Banana
```

## Activity

Give students the following HTML:

```html
<h1>Madlib</h1>
<h3>Welcome, </h3>
<p>There once was a <span id="animal"></span> named <span id="animalname"></span>.</p>
```

Then show students the result of running the Javascript below, and see if they can reverse-engineer it. Then go over it.

```js
document.querySelector('h3').innerHTML += prompt("What is your name?");
document.querySelector('#animal').innerHTML = prompt("Give me an animal.");
document.querySelector('#animalname').innerHTML = prompt("Give me a name.");
```


## Practice
Have students write any HTML and use Javascript to make _anything_ that demonstrates their understanding of today's concepts.
