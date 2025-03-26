import '../pages/Python.css';

function Python(){
    return (
          <div className="python">
            <nav className="navbar">
              <div className="navbar-title">
                <h1>Python Learning</h1>
              </div>
              <ul>
                <li><a href="#intro">Introduction</a></li>
                <li><a href="#basics">Python Basics</a></li>
                <li><a href="#datatypes">Data Types</a></li>
                <li><a href="#operators">Operators</a></li>
                <li><a href="#controlflow">Control Flow</a></li>
                <li><a href="#functions">Functions</a></li>
                <li><a href="#oop">Object-Oriented Programming</a></li>
                <li><a href="#modules">Modules & Packages</a></li>
                <li><a href="#filehandling">File Handling</a></li>
                <li><a href="#exceptions">Exception Handling</a></li>
                <li><a href="#examples">Python Examples</a></li>
              </ul>
            </nav>
      
            <main>
              <section id="intro">
                <h3>Introduction</h3>
                <p>Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in web development, data science, automation, and AI.</p>
              </section>
      
              <section id="basics">
                <h3>Python Basics</h3>
                <p>A simple Python program:</p>
                <pre><code>{`print("Hello, World!")`}</code></pre>
              </section>
      
              <section id="datatypes">
                <h3>Data Types</h3>
                <p>Python supports various data types:</p>
                <ul>
                  <li>int - Integer numbers</li>
                  <li>float - Decimal numbers</li>
                  <li>str - Strings (text)</li>
                  <li>list - Ordered collection</li>
                  <li>dict - Key-value pairs</li>
                </ul>
              </section>
      
              <section id="operators">
                <h3>Operators</h3>
                <p>Python has different types of operators:</p>
                <ul>
                  <li>Arithmetic Operators (+, -, *, /)</li>
                  <li>Comparison Operators (==, !=,)</li>
                  <li>Logical Operators (and, or, not)</li>
                </ul>
              </section>
      
              <section id="controlflow">
                <h3>Control Flow</h3>
                <p>Conditional statements:</p>
                <pre><code>{`x = 10
      if x > 5:
          print("X is greater than 5")`}</code></pre>
              </section>
      
              <section id="functions">
                <h3>Functions</h3>
                <p>Functions help in code reuse:</p>
                <pre><code>{`def greet(name):
          return f"Hello, {name}!"
      
      print(greet("Alice"))`}</code></pre>
              </section>
      
              <section id="oop">
                <h3>Object-Oriented Programming</h3>
                <p>Python supports OOP concepts like classes and objects.</p>
                <pre><code>{`class Animal:
          def __init__(self, name):
              self.name = name
          def speak(self):
              return f"{self.name} makes a sound."
      
      cat = Animal("Cat")
      print(cat.speak())`}</code></pre>
              </section>
      
              <section id="modules">
                <h3>Modules & Packages</h3>
                <p>Importing modules:</p>
                <pre><code>{`import math
      print(math.sqrt(25))`}</code></pre>
              </section>
      
              <section id="filehandling">
                <h3>File Handling</h3>
                <p>Reading and writing files:</p>
                <pre><code>{`with open("file.txt", "w") as file:
          file.write("Hello, Python!")`}</code></pre>
              </section>
      
              <section id="exceptions">
                <h3>Exception Handling</h3>
                <p>Handling errors in Python:</p>
                <pre><code>{`try:
          x = 10 / 0
      except ZeroDivisionError:
          print("Cannot divide by zero")`}</code></pre>
              </section>
      
              <section id="examples">
                <h3>Python Examples</h3>
                <h4>Example: Factorial Calculation</h4>
                <pre><code>{`def factorial(n):
          return 1 if n == 0 else n * factorial(n - 1)
      
      print(factorial(5))`}</code></pre>
              </section>
            </main>
      
            <footer>
              <p>© 2025 Python Tutorial</p>
            </footer>
          </div>
    );
}
      
     

export default Python;
