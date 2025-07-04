// Example 1: Click Event
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", function () {
  msg.innerText = "✅ You clicked the button!";
});

// Example 2: Input Event
const nameInput = document.getElementById("name");
const displayName = document.getElementById("displayName");

nameInput.addEventListener("input", function () {
  displayName.innerText = `Typing: ${nameInput.value}`;
});

// Example 3: Submit Event
const form = document.getElementById("loginForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents form from refreshing
  const username = document.getElementById("username").value;
  status.innerText = `${username} logged in successfully! ✅`;
});

// Example 4: Mouse Events
const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseenter", function () {
  hoverText.style.color = "blue";
  hoverText.innerText = "🔥 Mouse is on me!";
});

hoverText.addEventListener("mouseleave", function () {
  hoverText.style.color = "black";
  hoverText.innerText = "Hover over me!";
});
