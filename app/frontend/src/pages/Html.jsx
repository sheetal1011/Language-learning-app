import React from "react";
import "../pages/Html.css";

function Html() {
  return (
    <div className="html"> 
      <nav className="navbar">
      <div className="navbar-title">
        <h1 >HTML Learning</h1>
      </div>
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#basic">Basic HTML</a></li>
          <li><a href="#elements">HTML Elements</a></li>
          <li><a href="#lists">HTML Lists</a></li>
          <li><a href="#tables">HTML Tables</a></li>
          <li><a href="#forms">HTML Forms</a></li>
          <li><a href="#multimedia">HTML Multimedia</a></li>
          <li><a href="#semantic">HTML Semantics</a></li>
          <li><a href="#validation">HTML Forms Validation</a></li>
          <li><a href="#iframes">HTML iframes</a></li>
          <li><a href="#examples">HTML Examples</a></li>
        </ul>
      </nav>


      <main>
      <section id="intro">
    <h3>Introduction</h3>
    <p>
        HTML (HyperText Markup Language) is the standard language for creating webpages. 
        It allows you to structure content on the web using a series of elements.
        It is easy to learn and widely used across the internet. 
        Every website you visit is built using some form of HTML.
    </p>

    <h4>Why is HTML Important?</h4>
    <p>
        HTML is the foundation of the web. It defines the structure of web pages 
        and works together with CSS for styling and JavaScript for interactivity.
        Without HTML, browsers would not know how to display text, images, or links.  
        It ensures that content is accessible to all users, including those using screen readers.
    </p>

    <h4>Key Features of HTML</h4>
    <ul>
        <li>Uses a simple tag-based syntax.</li>
        <li>Allows embedding of images, videos, and audio.</li>
        <li>Works alongside CSS and JavaScript.</li>
        <li>Compatible with all browsers and devices.</li>
        <li>Supports accessibility and SEO best practices.</li>
    </ul>

    </section>

    <section id="basic">
          <h3>Basic HTML Structure</h3>
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
</html>`}
     </code></pre></section>

    <section id="elements">
          <h3>HTML Elements</h3>
          <p>
            HTML elements are the building blocks of an HTML page. Elements are defined by tags such as <code>&lt;div&gt;</code>,{" "}
            <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, etc.
          </p>
          <h3>Common HTML Tags</h3>
          <ul>
            <li>
              <code>&lt;h1&gt; - &lt;h6&gt;</code> - Header tags
            </li>
            <li>
              <code>&lt;p&gt;</code> - Paragraph tag
            </li>
            <li>
              <code>&lt;a&gt;</code> - Anchor tag (for links)
            </li>
            <li>
              <code>&lt;img&gt;</code> - Image tag
            </li>
          </ul>
        </section>
        <section id="lists">
          <h3>HTML Lists</h3>
          <p>Lists are used to organize content. There are two main types:</p>
          <h3>Ordered List</h3>
          <pre>
            <code>
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
            </code>
          </pre>

          <h3>Unordered List</h3>
          <pre>
            <code>
              <ul>
                <li>Item A</li>
                <li>Item B</li>
                <li>Item C</li>
              </ul>
            </code>
          </pre>
        </section>
        <section id="tables">
          <h3>HTML Tables</h3>
          <p>Tables are used to display data in a structured format.</p>
          <pre>
            <code>
              <table border="1">
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
                <tr>
                  <td>Alice</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Bob</td>
                  <td>30</td>
                </tr>
              </table>
            </code>
          </pre>
        </section>
        <section id="forms">
          <h3>HTML Forms</h3>
          <p>
            Forms allow users to submit data to a server. Here’s an example of a
            basic form:
          </p>
          <pre>
            <code>{`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>`}</code>
          </pre>
        </section>
        <section id="multimedia">
          <h3>HTML Multimedia</h3>
          <p>HTML supports audio and video embedding.</p>
          <h3>Embedding a Video</h3>
          <pre>
            <code>
              {`
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`}
            </code>
          </pre>

          <h3>Embedding an Audio File</h3>
          <pre>
            <code>
              {`
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>`}
            </code>
          </pre>
        </section>
        <section id="semantic">
          <h3>HTML Semantic Elements</h3>
          <p>
            Semantic elements improve the readability and structure of web
            pages.
          </p>
          <pre>
            <code>
              {`
<header>
  <h1>Welcome to My Website</h1>
</header>
<article>
  <h2>Article Title</h2>
  <p>This is a sample article.</p>
</article>
<footer>
  <p>© 2025 HTML Tutorial</p>
</footer>`}
            </code>
          </pre>
        </section>
        <section id="form-validation">
    <h3>HTML Form Validation</h3>
    <p>Form validation ensures that users enter correct data before submitting a form.</p>
    
    <h3>Example: Required Fields & Email Validation</h3>
    <pre><code>{`
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <input type="submit" value="Submit">
</form>`}
    </code></pre>
</section>

<section id="iframes">
    <h3>HTML Iframes</h3>
    <p>The <code>&lt;iframe&gt;</code> tag allows embedding another webpage within a webpage.</p>
    
    <h3>Example: Embedding Google</h3>
    <pre><code>{`
<iframe src="https://www.google.com" width="600" height="400"></iframe>`}
    </code></pre>
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
          <h3>Example 3: A Simple Contact Form</h3>
          <pre>
            <code>
              {`
<!DOCTYPE html>
<html>
  <head>
    <title>Contact Form</title>
  </head>
  <body>
    <h2>Contact Us</h2>
    <form>
      <label>Name:</label>
      <input type="text" name="name">
      <label>Email:</label>
      <input type="email" name="email">
      <textarea name="message" placeholder="Your message..."></textarea>
      <input type="submit" value="Send">
    </form>
  </body>
</html>`}
            </code>
          </pre>
        </section>
      </main>

      <footer>
        <p>© 2025 HTML Tutorial</p>
      </footer>

      </div>
    
  );
}
export default Html;
