document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const statusMsg = document.getElementById('statusMsg');
  
  try {
    const response = await fetch('https://h5.vahaflix.com/api/v2/email/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.code === 200 && data.success) {
      // Token handling (if any in future)
      localStorage.setItem('user_email', email);
      statusMsg.innerText = "Login successful! Redirecting...";
      window.location.href = "/public/logged-in.html";
    } else {
      statusMsg.innerText = "Login failed: " + data.message;
    }
  } catch (error) {
    console.error("Network error:", error);
    statusMsg.innerText = "Failed to connect to server.";
  }
});
