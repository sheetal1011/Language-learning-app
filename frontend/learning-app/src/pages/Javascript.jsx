import React from "react";
import "../pages/Javascript.css";

function Javascript(){
    return(
        <div className='javascript'>
            <nav className="navbar">
                <div className="navbar-title">
                    <h1>JAVASCRIPT Learning</h1>
                </div>
                <ul>
                    <li><a href="#intro">Introduction</a></li>
                    <li><a href="#basic">Basic JAVASCRIPT</a></li>
                    <li><a href="#elements">JAVASCRIPT Elements</a></li>
                    <li><a href="#lists">JAVASCRIPT Lists</a></li>
                    <li><a href="#tables">JAVASCRIPT Tables</a></li>
                    <li><a href="#forms">JAVASCRIPT Forms</a></li>
                    <li><a href="#multimedia">JAVASCRIPT Multimedia</a></li>
                    <li><a href="#semantic">JAVASCRIPT Semantics</a></li>
                    <li><a href="#validation">JAVASCRIPT Forms Validation</a></li>
                    <li><a href="#iframes">JAVASCRIPT iframes</a></li>
                  <li><a href="#examples">JAVASCRIPT Examples</a></li>
                </ul>
            </nav>

           
    <main>
      <section id="intro">
        <h3>Introduction to JavaScript</h3>
        <p>
          JavaScript is a versatile programming language used for web development. It runs in the browser and allows dynamic, interactive web applications.
        </p>

        <h4>Why Learn JavaScript?</h4>
        <ul>
          <li>Used in both frontend and backend development.</li>
          <li>Supports interactive web applications.</li>
          <li>Works with HTML & CSS for dynamic websites.</li>
          <li>Essential for frameworks like React, Angular, and Vue.</li>
        </ul>
      </section>

      <section id="syntax">
        <h3>JavaScript Syntax</h3>
        <pre>
          <code>{`console.log("Hello, JavaScript!");`}</code>
        </pre>
      </section>

      <section id="variables">
        <h3>JavaScript Variables</h3>
        <p>JavaScript allows variables with <code>var</code>, <code>let</code>, and <code>const</code>.</p>
        <pre>
          <code>{`
let name = "John";
const age = 25;
var city = "New York";
console.log(name, age, city);
          `}</code>
        </pre>
      </section>

      <section id="datatypes">
        <h3>Data Types in JavaScript</h3>
        <ul>
          <li>String: <code>"Hello"</code></li>
          <li>Number: <code>42</code></li>
          <li>Boolean: <code>true / false</code></li>
          <li>Array: <code>[1, 2, 3]</code></li>
          <li>Object: <code>{`{ name: "John", age: 30 }`}</code></li>
        </ul>
      </section>

      <section id="functions">
        <h3>Functions in JavaScript</h3>
        <pre>
          <code>{`
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));
          `}</code>
        </pre>
      </section>

      <section id="loops">
        <h3>Loops in JavaScript</h3>
        <h4>For Loop:</h4>
        <pre>
          <code>{`
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}
          `}</code>
        </pre>
      </section>

      <section id="dom">
        <h3>DOM Manipulation</h3>
        <pre>
          <code>{`
document.getElementById("demo").innerText = "Updated Text!";
          `}</code>
        </pre>
      </section>

      <section id="async">
        <h3>Asynchronous JavaScript</h3>
        <h4>Using Promises:</h4>
        <pre>
          <code>{`
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
          `}</code>
        </pre>
      </section>
    
            </main>
        </div>
    )
}
export default Javascript;