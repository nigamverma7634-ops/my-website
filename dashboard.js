const SUPABASE_URL = "https://cjoupniubbkwhmlbzfek.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

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
    alert(error.message);
  } else {
    alert("Post added successfully");
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    loadPosts();
  }
}

async function loadPosts() {
  const { data } = await supabaseClient
    .from("posts")
    .select("*")
    .order("id", { ascending: false });

  const box = document.getElementById("posts");
  box.innerHTML = "";

  data.forEach(post => {
    box.innerHTML += `
      <h4>${post.title}</h4>
      <p>${post.content}</p>
      <hr>
    `;
  });
}

loadPosts();
