// ===============================
// SUPABASE CONFIG (ONLY EDIT THESE 2 LINES)
// ===============================

const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_YOUR_ANON_PUBLIC_KEY_HERE";

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
