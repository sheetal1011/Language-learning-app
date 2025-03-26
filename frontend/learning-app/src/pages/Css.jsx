import React from 'react';
import '../pages/css.css';
function Css() {
  return (
    <>
      <div className="css">

      <nav className="navbar">
      <div className='nav-title'>
        <h1>CSS Learning</h1>
      </div>
        <ul>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#basic">Basic CSS</a></li>
          <li><a href="#selectors">CSS Elements</a></li>
          <li><a href="#colors">CSS colors</a></li>
          <li><a href="#text">CSS Text Styling</a></li>
          <li><a href="#boxmodel">CSS Boxmodel</a></li>
          <li><a href="#layouts">CSS Layouts</a></li>
          <li><a href="#responsive">Responsive Designing</a></li>
          <li><a href="#animations">CSS Animations</a></li>
          <li><a href="#examples">CSS Examples</a></li>
        </ul>
      </nav>
      <main>
  <section id="intro">
    <h3>Introduction</h3>
    <p>
      CSS (Cascading Style Sheets) is a stylesheet language used to describe the
      presentation of a document written in HTML. It controls layout, colors,
      fonts, and overall visual styling.
    </p>

    <h4>Why is CSS important?</h4>
    <p>
      CSS separates content from design, making webpages visually appealing and
      responsive. It ensures consistent styling across different devices and
      improves accessibility.
    </p>

    <h4>Key features of CSS</h4>
    <ul>
      <li>Allows for responsive design and mobile optimization.</li>
      <li>Supports animations and transitions.</li>
      <li>Works with HTML to style elements.</li>
      <li>Reduces page load time by separating design from content.</li>
      <li>Enables consistent styling across multiple pages.</li>
    </ul>
  </section>

  <section id="basic">
    <h3>Basic CSS Syntax</h3>
    <p>CSS rules consist of a selector and a declaration block:</p>
    <pre>
      <code>
        {`selector {
  property: value;
}`}
      </code>
    </pre>

    <h5>Example:</h5>
    <pre>
      <code>
        {`p {
  color: blue;
  font-size: 16px;
}`}
      </code>
    </pre>
  </section>

  <section id="selectors">
    <h3>CSS Selectors</h3>
    <p>Selectors define which HTML elements to style.</p>
    <h4>Common selectors:</h4>
    <ul>
      <li><code>p</code> - Selects all &lt;p&gt; elements.</li>
      <li><code>.class</code> - Selects all elements with a specific class.</li>
      <li><code>#id</code> - Selects a specific element with an ID.</li>
      <li><code>*</code> - Selects all elements.</li>
    </ul>

    <h5>Example:</h5>
    <pre>
      <code>
        {`.container {
  width: 100%;
  padding: 20px;
}`}
      </code>
    </pre>
  </section>

  <section id="colors">
    <h3>CSS Colors</h3>
    <p>CSS allows colors to be defined using names, HEX, RGB, or HSL.</p>
    <h5>Example:</h5>
    <pre>
      <code>
        {`h1 {
  color: red;
}

p {
  color: #00ff00;
}

div {
  color: rgb(0, 0, 255);
}`}
      </code>
    </pre>
  </section>

  <section id="text">
    <h3>CSS Text Styling</h3>
    <p>Text styling properties include font, size, alignment, and spacing.</p>

    <h5>Example:</h5>
    <pre>
      <code>
        {`h1 {
  font-family: Arial, sans-serif;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
}`}
      </code>
    </pre>
  </section>

  <section id="boxmodel">
    <h3>CSS Box Model</h3>
    <p>
      The box model consists of four areas: content, padding, border, and
      margin.
    </p>
    <h5>Example:</h5>
    <pre>
      <code>
        {`div {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}`}
      </code>
    </pre>
  </section>

  <section id="layouts">
    <h3>CSS Layouts</h3>
    <p>CSS provides multiple layout techniques, including flexbox and grid.</p>

    <h5>Flexbox Example:</h5>
    <pre>
      <code>
        {`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
      </code>
    </pre>

    <h5>Grid Example:</h5>
    <pre>
      <code>
        {`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}`}
      </code>
    </pre>
  </section>

  <section id="responsive">
    <h3>Responsive Design</h3>
    <p>
      Media queries allow styles to adapt to different screen sizes for mobile
      optimization.
    </p>

    <h5>Example:</h5>
    <pre>
      <code>
        {`@media (max-width: 600px) {
  body {
    background-color: lightgray;
  }
}`}
      </code>
    </pre>
  </section>

  <section id="animations">
    <h3>CSS Animations</h3>
    <p>Animations bring web pages to life with smooth effects.</p>

    <h5>Example:</h5>
    <pre>
      <code>
        {`@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

h1 {
  animation: fadeIn 2s ease-in-out;
}`}
      </code>
    </pre>
  </section>

  <section id="examples">
    <h3>CSS Examples</h3>
    <h4>Example 1: Styling a Button</h4>
    <pre>
      <code>
        {`button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}`}
      </code>
    </pre>

    <h4>Example 2: Hover Effects</h4>
    <pre>
      <code>
        {`button:hover {
  background-color: darkblue;
}`}
      </code>
    </pre>

    <h4>Example 3: Centering Content</h4>
    <pre>
      <code>
        {`.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`}
      </code>
    </pre>
  </section>
</main>


      </div>
    </>
  )
}

export default Css;