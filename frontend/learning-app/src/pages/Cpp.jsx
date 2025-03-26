import './Cpp.css';

function Cpp() {
    return (
      <div className="cpp">
        <nav className="navbar">
          <div className="navbar-title">
            <h1>C++ Programming Learning</h1>
          </div>
          <ul>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#basics">C++ Basics</a></li>
            <li><a href="#datatypes">Data Types</a></li>
            <li><a href="#operators">Operators</a></li>
            <li><a href="#controlflow">Control Flow</a></li>
            <li><a href="#functions">Functions</a></li>
            <li><a href="#oop">Object-Oriented Programming</a></li>
            <li><a href="#stl">Standard Template Library (STL)</a></li>
            <li><a href="#filehandling">File Handling</a></li>
            <li><a href="#examples">C++ Examples</a></li>
          </ul>
        </nav>
  
        <main>
          <section id="intro">
            <h3>Introduction</h3>
            <p>C++ is a high-performance programming language widely used for system programming, game development, and real-time applications.</p>
          </section>
  
          <section id="basics">
            <h3>C++ Basics</h3>
            <p>A simple C++ program:</p>
            <pre><code>{`#include <iostream>
  using namespace std;
  int main() {
    cout << "Hello, World!" << endl;
    return 0;
  }`}</code></pre>
          </section>
  
          <section id="datatypes">
            <h3>Data Types</h3>
            <p>C++ supports different data types:</p>
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
            <p>C++ provides various operators:</p>
            <ul>
              <li>Arithmetic Operators (+, -, *, /, %)</li>
              <li>Relational Operators (==, != )</li>
              <li>Logical Operators (&&, ||, !)</li>
            </ul>
          </section>
  
          <section id="controlflow">
            <h3>Control Flow</h3>
            <p>Conditional statements in C++:</p>
            <pre><code>{`int x = 10;
  if (x > 5) {
    cout << "X is greater than 5" << endl;
  }`}</code></pre>
          </section>
  
          <section id="functions">
            <h3>Functions</h3>
            <p>Functions allow modular code:</p>
            <pre><code>{`int add(int a, int b) {
    return a + b;
  }
  
  int main() {
    cout << add(5, 10) << endl;
    return 0;
  }`}</code></pre>
          </section>
  
          <section id="oop">
            <h3>Object-Oriented Programming</h3>
            <p>Classes and objects in C++:</p>
            <pre><code>{`class Person {
  public:
    string name;
    int age;
  };
  
  int main() {
    Person p;
    p.name = "Alice";
    p.age = 25;
    cout << p.name << " is " << p.age << " years old" << endl;
    return 0;
  }`}</code></pre>
          </section>
  
          <section id="stl">
            <h3>Standard Template Library (STL)</h3>
            <p>Using vectors in C++:</p>
            <pre><code>{`#include <vector>
  #include <iostream>
  using namespace std;
  
  int main() {
    vector<int> numbers = {1, 2, 3};
    numbers.push_back(4);
    cout << numbers[0] << endl;
    return 0;
  }`}</code></pre>
          </section>
  
          <section id="filehandling">
            <h3>File Handling</h3>
            <p>Reading and writing files in C++:</p>
            <pre><code>{`#include <fstream>
  #include <iostream>
  using namespace std;
  
  int main() {
    ofstream file("file.txt");
    file << "Hello, C++!";
    file.close();
    
    ifstream readFile("file.txt");
    string content;
    getline(readFile, content);
    cout << content << endl;
    return 0;
  }`}</code></pre>
          </section>
  
          <section id="examples">
            <h3>C++ Examples</h3>
            <h4>Example: Factorial Calculation</h4>
            <pre><code>{`int factorial(int n) {
    return (n == 0) ? 1 : n * factorial(n - 1);
  }
  
  int main() {
    cout << factorial(5) << endl;
    return 0;
  }`}</code></pre>
          </section>
        </main>
  
        <footer>
          <p>© 2025 C++ Tutorial</p>
        </footer>
      </div>
    );
  }
  
  export default Cpp;