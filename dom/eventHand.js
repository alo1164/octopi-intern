// Click Event
const clickBtn = document.getElementById("clickBtn");
const clickOutput = document.getElementById("clickOutput");

clickBtn.addEventListener("click", function () {
  clickOutput.innerText = "✅ You clicked the button!";
});

// Input Event
const nameInput = document.getElementById("nameInput");
const typingOutput = document.getElementById("typingOutput");

nameInput.addEventListener("input", function () {
  typingOutput.innerText = `Typing: ${nameInput.value}`;
});

// Change Event
const language = document.getElementById("language");
const selectOutput = document.getElementById("selectOutput");

language.addEventListener("change", function () {
  selectOutput.innerText = `You selected: ${language.value}`;
});

// Mouse Enter & Leave Event
const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseenter", function () {
  hoverText.classList.add("highlight");
  hoverText.innerText = "🔥 Mouse is on me!";
});

hoverText.addEventListener("mouseleave", function () {
  hoverText.classList.remove("highlight");
  hoverText.innerText = "Hover over me!";
});
