// Typing Effect for Name
const text = "Divya's Digital Portfolio";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Change Background Colours
function changeBackground() {
  const colors = [
    "linear-gradient(to right, #ff9a9e, #fad0c4)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "linear-gradient(to right, #fbc2eb, #a6c1ee)",
    "linear-gradient(to right, #84fab0, #8fd3f4)"
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

// Show Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Form Submission Handler
function sendMessage() {
  const name = document.getElementById("name").value;
  alert("Thank you, " + name + "! Your message has been sent successfully.");
  return false; // prevent page reload
}