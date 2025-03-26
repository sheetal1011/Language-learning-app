import './C#.css';

function Csharp() {
    return (
      <div className="csharp">
        <nav className="navbar">
          <div className="navbar-title">
            <h1>C# Programming Learning</h1>
          </div>
          <ul>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#basics">C# Basics</a></li>
            <li><a href="#datatypes">Data Types</a></li>
            <li><a href="#operators">Operators</a></li>
            <li><a href="#controlflow">Control Flow</a></li>
            <li><a href="#functions">Functions</a></li>
            <li><a href="#oop">Object-Oriented Programming</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#filehandling">File Handling</a></li>
            <li><a href="#examples">C# Examples</a></li>
          </ul>
        </nav>
  
        <main>
          <section id="intro">
            <h3>Introduction</h3>
            <p>C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for web, desktop, and game development.</p>
          </section>
  
          <section id="basics">
            <h3>C# Basics</h3>
            <p>A simple C# program:</p>
            <pre><code>{`using System;
  class Program {
    static void Main() {
      Console.WriteLine("Hello, World!");
    }
  }`}</code></pre>
          </section>
  
          <section id="datatypes">
            <h3>Data Types</h3>
            <p>C# supports different data types:</p>
            <ul>
              <li>int - Integer numbers</li>
              <li>float - Decimal numbers</li>
              <li>char - Single character</li>
              <li>string - Text</li>
              <li>bool - Boolean values (true/false)</li>
            </ul>
          </section>
  
          <section id="operators">
            <h3>Operators</h3>
            <p>C# provides various operators:</p>
            <ul>
              <li>Arithmetic Operators (+, -, *, /, %)</li>
              <li>Relational Operators (==, != )</li>
              <li>Logical Operators (&&, ||, !)</li>
            </ul>
          </section>
  
          <section id="controlflow">
            <h3>Control Flow</h3>
            <p>Conditional statements in C#:</p>
            <pre><code>{`int x = 10;
  if (x > 5) {
    Console.WriteLine("X is greater than 5");
  }`}</code></pre>
          </section>
  
          <section id="functions">
            <h3>Functions</h3>
            <p>Functions allow modular code:</p>
            <pre><code>{`int Add(int a, int b) {
    return a + b;
  }
  
  static void Main() {
    Console.WriteLine(Add(5, 10));
  }`}</code></pre>
          </section>
  
          <section id="oop">
            <h3>Object-Oriented Programming</h3>
            <p>Classes and objects in C#:</p>
            <pre><code>{`class Person {
    public string Name;
    public int Age;
  }
  
  static void Main() {
    Person p = new Person();
    p.Name = "Alice";
    p.Age = 25;
    Console.WriteLine(p.Name + " is " + p.Age + " years old");
  }`}</code></pre>
          </section>
  
          <section id="collections">
            <h3>Collections</h3>
            <p>Using lists in C#:</p>
            <pre><code>{`using System.Collections.Generic;
  List<int> numbers = new List<int> {1, 2, 3};
  numbers.Add(4);
  Console.WriteLine(numbers[0]);`}</code></pre>
          </section>
  
          <section id="filehandling">
            <h3>File Handling</h3>
            <p>Reading and writing files in C#:</p>
            <pre><code>{`using System.IO;
  File.WriteAllText("file.txt", "Hello, C#!");
  string content = File.ReadAllText("file.txt");
  Console.WriteLine(content);`}</code></pre>
          </section>
  
          <section id="examples">
            <h3>C# Examples</h3>
            <h4>Example: Factorial Calculation</h4>
            <pre><code>{`int Factorial(int n) {
    return (n == 0) ? 1 : n * Factorial(n - 1);
  }
  
  static void Main() {
    Console.WriteLine(Factorial(5));
  }`}</code></pre>
          </section>
        </main>
  
        <footer>
          <p>© 2025 C# Tutorial</p>
        </footer>
      </div>
    );
  }
  
  export default Csharp;
  