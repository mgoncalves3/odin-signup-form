const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#pwd-confirm");
const errorMessage = document.querySelector(".error-message");

let userPassword = "";


function checkPw () {
  if (confirmPasswordField.value !== userPassword) {
    passwordField.classList.add("error");
    confirmPasswordField.classList.add("error");
    errorMessage.toggleAttribute("hidden");
  } else {
    passwordField.classList.remove("error");
    confirmPasswordField.classList.remove("error");
    errorMessage.toggleAttribute("hidden");
  }
}

passwordField.addEventListener("input", () => {
  userPassword = passwordField.value
});

confirmPasswordField.addEventListener("focusout", checkPw)

passwordField.addEventListener("focusout", checkPw);