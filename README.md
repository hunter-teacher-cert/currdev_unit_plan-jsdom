# Javascript DOM Unit
by Brian Mueller

-----

## General Overview
The unit will apply basic Javascript concepts to the DOM (document object model) of a webpage. This will allow students to write programs that give the user the ability to manipulate the page (HTML/CSS) by way of interactivity. This would fit into a class where students have prior knowledge of HTML, CSS, and plain (vanilla) Javascript.

---

## Motivation for Unit
Students love making websites with HTML and CSS, but they are often hungry for interactivity. Plain JS is a prerequisite because students should know how JS works by itself, thus being able to apply it to the DOM, or p5.js, or one of many JS libraries. Knowing which syntax, concepts, and functions are built-in (as opposed to belonging to a library) is crucial to prevent confusion when navigating between JS tools.

---

## Standards Referenced

[Standard: 9-12.CT.4](http://www.nysed.gov/common/nysed/files/programs/curriculum-instruction/computer-science-digital-fluency-standards-k-12.pdf)

> Implement a program using a combination of student-defined and third-party functions to organize the computation.

This standard captures the essence of the 6 DOM lessons. Functions defined in Javascript ES6 are available to students and allow them to write  mini-programs accordingly.

[Standard: 9-12.CT.8](http://www.nysed.gov/common/nysed/files/programs/curriculum-instruction/computer-science-digital-fluency-standards-k-12.pdf)

> Develop a program that effectively uses control structures in order to create a computer program for practical intent, personal expression, or to address a societal issue.

This standard captures the essence of the project. Students will choose one of the 10 projects and must apply their learning for a practical intent.



---

## Tools Used
Students should have a basic knowledge of HTML, CSS, and JS. The [CS50 IDE](https://ide.cs50.io/) is a great cloud-based IDE, but [repl.it](https://replit.com/) could also be used. [Github Classroom](https://classroom.github.com) is a great way to distribute code, then collect it and give feedback.

Read more about the tools [here](tools.md).

---

## Resources
* [w3schools](https://www.w3schools.com/js/js_htmldom.asp)
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

---

## Lessons
Total length: 2 Weeks

* Basics
  * `.querySelector()`
  * `.innerHTML`
  * _Standard: 9-12.CT.4_
* Details
  * `.attribute` (get/set)
  * `.style.propertyName` (get/set)
  * `.classList`
    * `.add()`
    * `.remove()`
    * `.toggle()`
  * _Standard: 9-12.CT.4_
* Creating
  * `document.createElement()`
  * `element.appendChild()`
  * `element.insertBefore()`
  * _Standard: 9-12.CT.4_
* Iterating
  * `.querySelectorAll()`
  * `.forEach()`
  * _Standard: 9-12.CT.4_
* Events
  * `.addEventListener()`
  * _Standard: 9-12.CT.4_
* Input
  * text
    * `.value`
  * radio
    * `.checked`
    * `.querySelector('input[name="radio-name"]:checked').value`
    * `.querySelector`
  * select
    * Event: `change` --> `.value`
  * _Standard: 9-12.CT.4_
* DOM Challenge Project (planning)
  * _Standard: 9-12.CT.8_
* DOM Challenge Project (coding)
  * _Standard: 9-12.CT.8_
* DOM Challenge Project (coding)
  * _Standard: 9-12.CT.8_
* DOM Challenge Project (demos + reflection/writeup)
  * _Standard: 9-12.CT.8_

---

## Assesments

### Formative Assessments:
Daily mini-tasks for each of the 6 lessons.

### Summative Assessment:
DOM Challenge: students reverse engineer a working program. Each program has a base functionality, and an optional extension. Includes plan, program, and reflection.
* Meme generator
* Color generator
* Password generator
* Reviews cycler
* Menu selector
* Magazine message speller
* Todo list
* Quizzer
* Calculator
* Keymasher


---


