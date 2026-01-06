async function loginAdmin(event) {
  event.preventDefault(); // 🔥 PAGE RELOAD STOP

  alert("loginAdmin function chala ✅");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email aur password required hai");
    return;
  }

  const { data, error } =
    await window.supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });

  if (error) {
    alert("Login failed: " + error.message);
    console.error(error);
  } else {
    alert("Login success ✅ Dashboard open hoga");
    window.location.href = "dashboard.html";
  }
}
