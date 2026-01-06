// ===============================
// SUPABASE CONFIG (ONLY EDIT THESE 2 LINES)
// ===============================

const SUPABASE_URL = "https://cjoupniubbkwhmlbzfek.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqb3Vwbml1YmJrd2htbGJ6ZmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MjE1NDQsImV4cCI6MjA4MzA5NzU0NH0.DkGna34dS0v63WtPQtoDSs61tEAlh-vlo3ZQ6iccWyg";

// ===============================
// DO NOT TOUCH BELOW CODE
// ===============================

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

async function loginAdmin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Login failed: " + error.message);
      return;
    }

    alert("Login successful");
    window.location.href = "admin-dashboard.html";

  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
}
