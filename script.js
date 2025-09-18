// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable
let animationCount = 0;

// Function with parameters and return value
function calculateScale(base, multiplier) {
  return base * multiplier;
}

// Local scope example
function logAnimationTrigger() {
  let message = "Animation triggered!";
  console.log(message);
}

// Reusable function to animate box
function animateBox() {
  const box = document.getElementById("animated-box");
  box.classList.toggle("animate");
  animationCount++;
  logAnimationTrigger();
  console.log("Scale factor:", calculateScale(1, 1.2));
  console.log("Total animations triggered:", animationCount);
}

// Modal toggle function
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("visible");
  modal.classList.toggle("hidden");
}
