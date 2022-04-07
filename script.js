const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#pwd-confirm");
const errorMessage = document.querySelector(".error-message");

let userPassword = "";


function checkPw () {
  if (confirmPasswordField.value !== userPassword) {
    passwordField.classList.add("error");
    confirmPasswordField.classList.add("error");
    errorMessage.hidden = false;
  } else {
    passwordField.classList.remove("error");
    confirmPasswordField.classList.remove("error");
    errorMessage.hidden = true;
  }
}

passwordField.addEventListener("focusout", () => {
  userPassword = passwordField.value;
});

confirmPasswordField.addEventListener("focusout", checkPw)

passwordField.addEventListener("focusout", checkPw);