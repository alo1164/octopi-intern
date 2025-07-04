const postsContainer = document.getElementById("postsContainer");
const userIdFilter = document.getElementById("userIdFilter");
const postIdFilter = document.getElementById("postIdFilter");
const titleFilter = document.getElementById("titleFilter");
const combinedFilter = document.getElementById("combinedFilter");
const clearFilters = document.getElementById("clearFilters");
const pagination = document.getElementById("pagination");
const modal = document.getElementById("singlePostModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

let allPosts = [];
let currentPage = 1;
const postsPerPage = 10;

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  allPosts = data;
  applyFilters(); // show first page
}

function displayPosts(posts) {
  postsContainer.innerHTML = "";
  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "post-card";
    postDiv.innerHTML = `
      <div class="meta">User ID: ${post.userId} | Post ID: ${post.id}</div>
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    postDiv.addEventListener("click", () => showSinglePost(post));
    postsContainer.appendChild(postDiv);
  });
}

function showSinglePost(post) {
  modalContent.innerHTML = `
    <h2>${post.title}</h2>
    <p><strong>User ID:</strong> ${post.userId}</p>
    <p><strong>Post ID:</strong> ${post.id}</p>
    <p>${post.body}</p>
  `;
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

function applyFilters() {
  const userIdVal = userIdFilter.value.trim().toLowerCase();
  const postIdVal = postIdFilter.value.trim().toLowerCase();
  const titleVal = titleFilter.value.trim().toLowerCase();
  const combinedVal = combinedFilter.value.trim().toLowerCase();

  const filtered = allPosts.filter(post => {
    const matchesUser = !userIdVal || post.userId.toString().includes(userIdVal);
    const matchesPost = !postIdVal || post.id.toString().includes(postIdVal);
    const matchesTitle = !titleVal || post.title.toLowerCase().includes(titleVal);
    const matchesCombined = !combinedVal || `${post.userId}-${post.id}`.includes(combinedVal);
    return matchesUser && matchesPost && matchesTitle && matchesCombined;
  });

  renderPage(filtered, currentPage);
  renderPagination(filtered);
}

function renderPage(data, page) {
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const sliced = data.slice(start, end);
  displayPosts(sliced);
}

function renderPagination(data) {
  pagination.innerHTML = "";
  const pageCount = Math.ceil(data.length / postsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderPage(data, i);
    });
    pagination.appendChild(btn);
  }
}

[userIdFilter, postIdFilter, titleFilter, combinedFilter].forEach(input =>
  input.addEventListener("input", () => {
    currentPage = 1;
    applyFilters();
  })
);

clearFilters.addEventListener("click", () => {
  userIdFilter.value = "";
  postIdFilter.value = "";
  titleFilter.value = "";
  combinedFilter.value = "";
  currentPage = 1;
  applyFilters();
});

fetchPosts();
