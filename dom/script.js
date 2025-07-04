// ধরছি সব elements
const title = document.getElementById("title");
const input = document.getElementById("nameInput");
const button = document.getElementById("btn");
const msg = document.querySelector(".msg");
const nameList = document.getElementById("nameList");
const toggleBtn = document.getElementById("toggleBtn");
const removeBtn = document.getElementById("removeBtn");

// ক্লিক করলে input থেকে নাম নিবে, দেখাবে ও তালিকায় যুক্ত করবে
button.addEventListener("click", function () {
  const name = input.value;
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // Text change
  msg.innerText = `Hello, ${name}! 👋`;

  // Style change
  msg.style.color = "green";

  // নতুন item list-এ add
  const li = document.createElement("li");
  li.innerText = name;
  nameList.appendChild(li);

  // input ফাকা করে দিচ্ছি
  input.value = "";
});

// Toggle class
toggleBtn.addEventListener("click", function () {
  msg.classList.toggle("highlight");
});

// Title remove করা
removeBtn.addEventListener("click", function () {
  title.remove();
});
