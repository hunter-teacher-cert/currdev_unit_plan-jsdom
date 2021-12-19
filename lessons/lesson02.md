# Lesson 02: Details


## Context
* **Course:** Javascript Programming
* **Unit:** DOM (Document Object Model)
* **Main objective:** Be able to update attributes, CSS properties, and classes of HTML elements.
* **Prior knowledge:** Students should have experience with:
  * JS fundamentals: strings, arrays, functions, conditionals, loops
  * DOM Basics
* **Standard(s):** 9-12.CT.4: Implement a program using a combination of student-defined and third-party functions to organize the computation.


## Warmup

Solicit attributes we've seen so far in HTML. For example:
* the `href` in `<a href>`
* the `src` in `<img src>`

Solicit properties we've seen so far in CSS. For example:
* `color`
* `font-size`

Ask what classes are for in CSS. Students should say something to the degree of:

> Classes allow us to apply CSS to multiple HTML elements, even if they are not of the same type.

## Mini-lesson: **DOM Details**

### Explain:

* `.attributeName`
  * This will allow us to get/set an attribute such as `href` or `src`
* `.style.propertyName`
  * This will allow us to set a CSS property
  * Example: `.style.color = "blue"`
  * Note: dash-case becomes camelCase
    * Example: `margin-top` becomes `marginTop`
* `.classList`
  * Allows us to modify classes of a selected element:
    * `.add()`
    * `.remove()`
    * `.toggle()`

---

### Demo:

Start with the following HTML:

```html
<p>Have you been <a href="http://hstat.org">here</a>?</p>
<img src="https://i.imgur.com/HTXTKU7.jpg">

<hr>

<h1>Hello Human</h1>

<hr>

<p id="name" class="pink-bg">My name is Sniffles</p>
<p id="food">I like to eat jello</p>
<p id="activity1" class="blue-bg">I like to play tag</p>
<p id="activity2" class="blue-bg light-padding">I like to take naps</p>
```

and CSS:

```css
.pink-bg {
    background-color: pink;
}

.blue-bg {
    background-color: lightblue;
}

.large {
    font-size: 30px;
}

.light-padding {
    padding: 20px;
}
```

---

**`.attributeName()`**

We can _get_ an attribute using:

```js
document.querySelector('a').href; // http://hstat.org
```

Or _set_ using `=`

```js
document.querySelector('a').href = "http://hstatsep.github.io";
```

---

**`.style.propertyName`**

Just like above, we can do the same with CSS properties:

Get:

```js
document.querySelector('img').src; // https://i.imgur.com/HTXTKU7.jpg
```

Set:

```js
document.querySelector('img').src = "https://i.imgur.com/mC4Z62v.jpg";
```

Remember that we can save elements in variables if we want to perform multiple operations:

```js
var greeting = document.querySelector('h1');
greeting.style.color = "green";
greeting.style.fontFamily = "Times New Roman";
```

---

**`.classList`**

We can _get_ the list of classes by doing:

```js
document.querySelector('#name').classList; // ['pink-bg']
```

We can _add_ classes:

```js
document.querySelector('#food').classList.add('large');
```

We can remove classes:

```js
document.querySelector('#activity1').classList.remove('blue-bg');
```

Or even toggle (if on: turn off; if off: turn on)

```js
document.querySelector('#activity2').classList.toggle('light-padding');
```

## Practice
Have students write any HTML and use Javascript to make _anything_ that demonstrates their understanding of today's concepts.
