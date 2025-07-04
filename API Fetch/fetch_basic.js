fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => {
    console.log("👉 Response object:", res);
    return res.json();
  })
  .then(data => {
    console.log("👉 Data:", data);
    console.log("Title:", data.title);
  })
  .catch(err => {
    console.log("❌ Error:", err);
  });
