//sign up handler if creating new user
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#user-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //after they create account redirect to homepage after login
      document.location.replace("/homepage");
    } else {
      alert(
        "An account with this Username or Email already exists. Please try again."
      );
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
