let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
  const box = document.getElementById("posts");
  box.innerHTML = "";

  posts.forEach((post, index) => {
    box.innerHTML += `
      <h4>${post.title}</h4>
      <p>${post.content}</p>
      <button onclick="deletePost(${index})">Delete</button>
      <hr>
    `;
  });

  localStorage.setItem("posts", JSON.stringify(posts));
}

function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Title aur content likho");
    return;
  }

  posts.push({ title, content });
  renderPosts();

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function deletePost(index) {
  posts.splice(index, 1);
  renderPosts();
}

renderPosts();
