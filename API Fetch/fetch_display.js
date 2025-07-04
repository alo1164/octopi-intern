const list = document.getElementById("postList");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    const firstFive = data.slice(0, 5);
    firstFive.forEach(post => {
      const li = document.createElement("li");
      li.innerText = post.title;
      list.appendChild(li);
    });
  })
  .catch(err => {
    list.innerText = "❌ Could not load posts.";
  });
