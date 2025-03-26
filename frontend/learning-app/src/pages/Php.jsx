import React from "react";
import '../pages/Php.css';

function Php(){
    return(
        <div className='php'>
            <nav className="navbar">
                <div className="navbar-title">
                    <h1>PHP Learning</h1>
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
        <h3>Introduction to PHP</h3>
        <p>
          PHP is a widely-used server-side scripting language for web development.
        </p>

        <h4>Why Learn PHP?</h4>
        <ul>
          <li>Works with MySQL databases.</li>
          <li>Powers CMS platforms like WordPress.</li>
          <li>Can generate dynamic content.</li>
          <li>Server-side processing for forms, sessions, and APIs.</li>
        </ul>
      </section>

      <section id="syntax">
        <h3>Basic PHP Syntax</h3>
        <pre>
          <code>{`
<?php
  echo "Hello, PHP!";
?>
          `}</code>
        </pre>
      </section>

      <section id="variables">
        <h3>PHP Variables</h3>
        <p>PHP variables start with a <code>$</code> sign.</p>
        <pre>
          <code>{`
<?php
  $name = "John";
  $age = 25;
  echo "Name: " . $name . ", Age: " . $age;
?>
          `}</code>
        </pre>
      </section>

      <section id="datatypes">
        <h3>Data Types in PHP</h3>
        <ul>
          <li>String: <code>"Hello"</code></li>
          <li>Integer: <code>42</code></li>
          <li>Float: <code>3.14</code></li>
          <li>Boolean: <code>true / false</code></li>
          <li>Array: <code>[1, 2, 3]</code></li>
          <li>Object: <code>Class Instances</code></li>
        </ul>
      </section>

      <section id="functions">
        <h3>Functions in PHP</h3>
        <pre>
          <code>{`
<?php
function greet($name) {
    return "Hello, " . $name . "!";
}
echo greet("Alice");
?>
          `}</code>
        </pre>
      </section>

      <section id="loops">
        <h3>Loops in PHP</h3>
        <h4>For Loop:</h4>
        <pre>
          <code>{`
<?php
for ($i = 1; $i <= 5; $i++) {
    echo "Iteration: " . $i . "<br>";
}
?>
          `}</code>
        </pre>
      </section>

      <section id="forms">
        <h3>Handling Forms in PHP</h3>
        <pre>
          <code>{`
<form method="POST" action="process.php">
  <label for="name">Name:</label>
  <input type="text" name="name" required>
  <input type="submit" value="Submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    echo "Hello, " . htmlspecialchars($name) . "!";
}
?>
          `}</code>
        </pre>
      </section>

      <section id="database">
        <h3>PHP and MySQL</h3>
        <pre>
          <code>{`
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test_db";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);
while ($row = $result->fetch_assoc()) {
    echo "User: " . $row["name"] . "<br>";
}

$conn->close();
?>
          `}</code>
        </pre>
      </section>
    

            </main>
        </div>
    )
}

export default Php;