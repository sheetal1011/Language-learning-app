import './C.css';

function C() {
    return (
      <div className="c">
        <nav className="navbar">
          <div className="navbar-title">
            <h1>C Programming Learning</h1>
          </div>
          <ul>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#basics">C Basics</a></li>
            <li><a href="#datatypes">Data Types</a></li>
            <li><a href="#operators">Operators</a></li>
            <li><a href="#controlflow">Control Flow</a></li>
            <li><a href="#functions">Functions</a></li>
            <li><a href="#pointers">Pointers</a></li>
            <li><a href="#arrays">Arrays & Strings</a></li>
            <li><a href="#structures">Structures & Unions</a></li>
            <li><a href="#filehandling">File Handling</a></li>
            <li><a href="#examples">C Examples</a></li>
          </ul>
        </nav>
  
        <main>
          <section id="intro">
            <h3>Introduction</h3>
            <p>C is a powerful general-purpose programming language. It is widely used for system programming, embedded systems, and application development.</p>
          </section>
  
          <section id="basics">
            <h3>C Basics</h3>
            <p>A simple C program:</p>
            <pre><code>{`#include <stdio.h>
  int main() {
    printf("Hello, World!\n");
    return 0;
  }`}</code></pre>
          </section>
  
          <section id="datatypes">
            <h3>Data Types</h3>
            <p>C supports different data types:</p>
            <ul>
              <li>int - Integer numbers</li>
              <li>float - Decimal numbers</li>
              <li>char - Single character</li>
              <li>double - Large decimal numbers</li>
            </ul>
          </section>
  
          <section id="operators">
            <h3>Operators</h3>
            <p>C provides various operators:</p>
            <ul>
              <li>Arithmetic Operators (+, -, *, /, %)</li>
              <li>Relational Operators (==, != )</li>
              <li>Logical Operators (&&, ||, !)</li>
            </ul>
          </section>
  
          <section id="controlflow">
            <h3>Control Flow</h3>
            <p>Conditional statements in C:</p>
            <pre><code>{`int x = 10;
  if (x > 5) {
    printf("X is greater than 5\n");
  }`}</code></pre>
          </section>
  
          <section id="functions">
            <h3>Functions</h3>
            <p>Functions allow modular code:</p>
            <pre><code>{`int add(int a, int b) {
    return a + b;
  }
  int main() {
    printf("%d", add(5, 10));
    return 0;
  }`}</code></pre>
          </section>
  
          <section id="pointers">
            <h3>Pointers</h3>
            <p>Pointers store memory addresses:</p>
            <pre><code>{`int x = 10;
  int *ptr = &x;
  printf("Value of x: %d", *ptr);`}</code></pre>
          </section>
  
          <section id="arrays">
            <h3>Arrays & Strings</h3>
            <p>Arrays store multiple values:</p>
            <pre><code>{`int arr[3] = {1, 2, 3};
  printf("%d", arr[0]);`}</code></pre>
            <p>Strings in C:</p>
            <pre><code>{`char str[] = "Hello";
  printf("%s", str);`}</code></pre>
          </section>
  
          <section id="structures">
            <h3>Structures & Unions</h3>
            <p>Structures group different types of data:</p>
            <pre><code>{`struct Person {
    char name[20];
    int age;
  };
  struct Person p1 = {"Alice", 25};`}</code></pre>
          </section>
  
          <section id="filehandling">
            <h3>File Handling</h3>
            <p>Reading and writing files in C:</p>
            <pre><code>{`FILE *fptr;
  fptr = fopen("file.txt", "w");
  fprintf(fptr, "Hello, C!");
  fclose(fptr);`}</code></pre>
          </section>
  
          <section id="examples">
            <h3>C Examples</h3>
            <h4>Example: Factorial Calculation</h4>
            <pre><code>{`int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
  }
  int main() {
    printf("%d", factorial(5));
    return 0;
  }`}</code></pre>
          </section>
        </main>
  
        <footer>
          <p>© 2025 C Tutorial</p>
        </footer>
      </div>
    );
  }
  
  export default C;
  