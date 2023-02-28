document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    document.getElementById("message").innerHTML = "Successfully Login";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").innerHTML = "Failed Login";
    document.getElementById("message").style.color = "red";
  }
});