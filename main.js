fetch('posts.json')
.then(res => res.json())
.then(data => {
  let box = document.getElementById("posts");
  data.forEach(post => {
    box.innerHTML += `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <hr>
    `;
  });
});
// ↓↓↓ Tic Tac Toe open karne ke liye ↓↓↓
function openGame() {
  window.location.href = "tictactoe.html";
}
