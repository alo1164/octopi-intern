fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    console.log("👉 First 5 Posts:");
    data.slice(0, 5).forEach(post => {
      console.log("🔸", post.title);
    });
  })
  .catch(err => {
    console.log("❌ Error loading posts:", err);
  });
