const CLIENT_ID = "PASTE_YOUR_CLIENT_ID";
const ADMIN_USERNAME = "yourgithubusername";

function login() {
  window.location = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo`;
}
