const userList = document.getElementById("userList");
const searchInput = document.getElementById("search");
const loader = document.getElementById("loader");

let allUsers = []; // fetched users will be stored here

// Fetch users from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    allUsers = data;
    loader.style.display = "none";
    displayUsers(allUsers);
  })
  .catch(err => {
    loader.innerText = "❌ Failed to load users.";
  });

// Display users
function displayUsers(users) {
  userList.innerHTML = "";

  if (users.length === 0) {
    userList.innerHTML = "<p>No users found.</p>";
    return;
  }

  users.forEach(user => {
    const div = document.createElement("div");
    div.classList.add("user-card");
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p>📧 ${user.email}</p>
      <p>📞 ${user.phone}</p>
    `;
    userList.appendChild(div);
  });
}

// Search filter
searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const filtered = allUsers.filter(user =>
    user.name.toLowerCase().includes(searchText)
  );
  displayUsers(filtered);
});
