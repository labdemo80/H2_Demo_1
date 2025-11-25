function registerUser(event) {
  event.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration successful!");
  window.location.href = "login.html";
}

function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Register first!");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "../dashboard/dashboard.html";
  } else {
    alert("Incorrect email or password!");
  }
}
