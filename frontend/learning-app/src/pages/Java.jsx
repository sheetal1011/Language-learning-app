import "./Java.css";

function Java() {
    return (
      <div className="java">
        <nav className="navbar">
          <div className="navbar-title">
            <h1>Java Learning</h1>
          </div>
          <ul>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#basics">Java Basics</a></li>
            <li><a href="#datatypes">Data Types</a></li>
            <li><a href="#operators">Operators</a></li>
            <li><a href="#controlflow">Control Flow</a></li>
            <li><a href="#methods">Methods</a></li>
            <li><a href="#oop">Object-Oriented Programming</a></li>
            <li><a href="#exceptions">Exception Handling</a></li>
            <li><a href="#collections">Java Collections</a></li>
            <li><a href="#filehandling">File Handling</a></li>
            <li><a href="#examples">Java Examples</a></li>
          </ul>
        </nav>
  
        <main>
          <section id="intro">
            <h3>Introduction</h3>
            <p>Java is a high-level, object-oriented programming language known for its portability and strong memory management. It is widely used in web applications, mobile development, and enterprise software.</p>
          </section>
  
          <section id="basics">
            <h3>Java Basics</h3>
            <p>A simple Java program:</p>
            <pre><code>{`public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello, World!");
    }
  }`}</code></pre>
          </section>
  
          <section id="datatypes">
            <h3>Data Types</h3>
            <p>Java supports different data types:</p>
            <ul>
              <li>int - Integer numbers</li>
              <li>double - Decimal numbers</li>
              <li>char - Single character</li>
              <li>boolean - True or false values</li>
              <li>String - Sequence of characters</li>
            </ul>
          </section>
  
          <section id="operators">
            <h3>Operators</h3>
            <p>Java provides different types of operators:</p>
            <ul>
              <li>Arithmetic Operators (+, -, *, /, %)</li>
              <li>Comparison Operators (==, !=)</li>
              <li>Logical Operators (&&, ||, !)</li>
            </ul>
          </section>
  
          <section id="controlflow">
            <h3>Control Flow</h3>
            <p>Conditional statements in Java:</p>
            <pre><code>{`int x = 10;
  if (x > 5) {
      System.out.println("X is greater than 5");
  }`}</code></pre>
          </section>
  
          <section id="methods">
            <h3>Methods</h3>
            <p>Methods help in code reusability:</p>
            <pre><code>{`public static int add(int a, int b) {
    return a + b;
  }
  System.out.println(add(5, 10));`}</code></pre>
          </section>
  
          <section id="oop">
            <h3>Object-Oriented Programming</h3>
            <p>Java supports OOP principles like encapsulation, inheritance, and polymorphism.</p>
            <pre><code>{`class Animal {
    String name;
    
    Animal(String name) {
      this.name = name;
    }
    
    void speak() {
      System.out.println(name + " makes a sound.");
    }
  }
  
  public class Main {
    public static void main(String[] args) {
      Animal cat = new Animal("Cat");
      cat.speak();
    }
  }`}</code></pre>
          </section>
  
          <section id="exceptions">
            <h3>Exception Handling</h3>
            <p>Handling errors using try-catch:</p>
            <pre><code>{`try {
    int result = 10 / 0;
  } catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
  }`}</code></pre>
          </section>
  
          <section id="collections">
            <h3>Java Collections</h3>
            <p>Collections framework in Java:</p>
            <pre><code>{`import java.util.ArrayList;
  
  ArrayList<String> list = new ArrayList<>();
  list.add("Apple");
  list.add("Banana");
  System.out.println(list);`}</code></pre>
          </section>
  
          <section id="filehandling">
            <h3>File Handling</h3>
            <p>Reading and writing files in Java:</p>
            <pre><code>{`import java.io.FileWriter;
  
  FileWriter writer = new FileWriter("file.txt");
  writer.write("Hello, Java!");
  writer.close();`}</code></pre>
          </section>
  
          <section id="examples">
            <h3>Java Examples</h3>
            <h4>Example: Factorial Calculation</h4>
            <pre><code>{`public static int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
  }
  System.out.println(factorial(5));`}</code></pre>
          </section>
        </main>
  
        <footer>
          <p>© 2025 Java Tutorial</p>
        </footer>
      </div>
    );
  }
  
  export default Java;
  