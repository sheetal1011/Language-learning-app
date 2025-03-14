import React from 'react';
import './Html.css';
function Html() {

  return(
    <div>
    <p>Learn HTML with easy and simple tutorials</p>
      <nav>
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#basic">Basic HTML</a></li>
          <li><a href="#elements">HTML Elements</a></li>
          <li><a href="#forms">HTML Forms</a></li>
          <li><a href="#examples">HTML Examples</a></li>
        </ul>
      </nav>
      <main>
        <section id="intro">
          <h2>Introduction</h2>
          <p>HTML (HyperText Markup Language) is the standard language for creating webpages. It allows you to structure content on the web using a series of elements.</p>
        </section>

        <section id="basic">
          <h2>Basic HTML Structure</h2>
          <p>Here is a basic HTML page structure:</p>
          <pre>
            <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to my webpage!</h1>
    <p>This is a simple HTML page.</p>
  </body>
</html>`}</code>
          </pre>
        </section>

        <section id="elements">
          <h2>HTML Elements</h2>
          <p>HTML elements are the building blocks of an HTML page. Elements are defined by tags such as <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, etc.</p>

          <h3>Common HTML Tags</h3>
          <ul>
            <li><code>&lt;h1&gt; - &lt;h6&gt;</code> - Header tags</li>
            <li><code>&lt;p&gt;</code> - Paragraph tag</li>
            <li><code>&lt;a&gt;</code> - Anchor tag (for links)</li>
            <li><code>&lt;img&gt;</code> - Image tag</li>
          </ul>
        </section>

        <section id="forms">
          <h2>HTML Forms</h2>
          <p>Forms allow users to submit data to a server. Here’s an example of a basic form:</p>
          <pre>
            <code>{`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>`}</code>
          </pre>
        </section>

        <section id="examples">
          <h2>HTML Examples</h2>
          <h3>Example 1: Simple Page with Header and Paragraph</h3>
          <pre>
            <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Simple Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a simple webpage using HTML.</p>
  </body>
</html>`}</code>
          </pre>

          <h3>Example 2: Link and Image</h3>
          <pre>
            <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Link and Image</title>
  </head>
  <body>
    <a href="https://www.example.com">Visit Example</a>
    <img src="https://via.placeholder.com/150" alt="Placeholder Image">
  </body>
</html>`}</code>
          </pre>
        </section>
      </main>

      <footer>
        <p>© 2025 HTML Tutorial</p>
      </footer>
      </div>
  )
}
export default Html;