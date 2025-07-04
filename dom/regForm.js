const form = document.getElementById("regForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const userList = document.getElementById("userList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validation
  if (name === "" || email === "" || password === "") {
    message.innerText = "❌ Please fill all fields!";
    message.className = "error";
    return;
  }

  // Success Message
  message.innerText = "✅ Registration successful!";
  message.className = "success";

  // Create user card
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");
  userCard.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}
  `;

  userList.appendChild(userCard);

  // Clear fields
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
