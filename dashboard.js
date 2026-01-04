<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

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

async function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Title aur content likho");
    return;
  }

  const { error } = await supabaseClient
    .from("posts")
    .insert([
      {
        title: title,
        content: content,
        is_published: true
      }
    ]);

  if (error) {
    alert("Error: " + error.message);
  } else {
    alert("Post added successfully");
  }
}
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
