console.log("HELLO WORLD");

const signupHandler = async function (event) {
  event.preventDefault();
  console.log("HELLO WORLD from the signup handler");

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  console.log(username);
  console.log(email);
  console.log(password);

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  }
};

const loginHandler = async function (event) {
  event.preventDefault();
  console.log("HELLO WORLD from the login handler");

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .getElementById("signup-form")
  .addEventListener("submit", signupHandler);

document.getElementById("login-form").addEventListener("submit", loginHandler);
