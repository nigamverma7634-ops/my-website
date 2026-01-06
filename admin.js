async function loginAdmin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Email aur password required hai");
    return;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    alert("Login failed: " + error.message);
    console.error(error);
  } else {
    // ✅ Login success → dashboard
    window.location.href = "dashboard.html";
  }
}
