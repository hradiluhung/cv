const nama = document.querySelector("#name-input .input-field");
const email = document.querySelector("#email-input .input-field");
const password = document.querySelector("#password-input .input-field");
const confirmPassword = document.querySelector("#password-confirm-input .input-field");
const daftarBtn = document.getElementById("daftar-btn");

function changeLine(fromInput, toInput){
  fromInput.addEventListener("keypress", function onEvent(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      toInput.focus();
    }
  });
}

changeLine(nama, email);
changeLine(email, password);
changeLine(password, confirmPassword);

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords don't match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
