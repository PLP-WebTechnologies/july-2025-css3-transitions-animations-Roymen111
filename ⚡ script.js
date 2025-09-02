
/* ---------- Part 2: Functions (Scope, Parameters & Return) ---------- */

// Example of global variable
let globalMessage = "This is a global message.";

function calculateSquare(num) {
  // local scope variable
  let result = num * num;  

  // return value
  document.getElementById("squareResult").textContent =
    `Square of ${num} is ${result}.`;

  return result; // function returns a value for reuse
}

/* ---------- Part 3: Combining CSS + JS ---------- */

const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

// Toggle animation on button click
animateBtn.addEventListener("click", function() {
/* ---------- Part 3: JS + CSS ---------- */
.box {
  width: 100px;
  height: 100px;
  background: seagreen;
  margin-top: 20px;
  transition: transform 1s ease, background 1s ease;
}

/* Class that triggers animation */
.animate {
  transform: rotate(360deg) scale(1.2);
  background: gold;
}


  jsBox.classList.toggle("animate");
