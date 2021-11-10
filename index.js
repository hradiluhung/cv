const nama = document.querySelector("#name-input .input-field");
const email = document.querySelector("#email-input .input-field");
const password = document.querySelector("#password-input .input-field");
const confirmPassword = document.querySelector("#password-confirm-input .input-field");
const agreementCheck = document.getElementById("agreement-check");
const submitBtn = document.getElementById("submit-btn");

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

let inputData = [[nama, "Name"], [email, "Email"], [password, "Password"], [confirmPassword, "Password Confirm"], [agreementCheck, "Privacy Policy Agreement"]];
let kosong = [];
let printAlert = "";

submitBtn.addEventListener("click", function(event){
  if(nama.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "" || agreementCheck.checked == false){
    event.preventDefault();
    printAlert = "";
    kosong = [];
    for(let i = 0 ; i < inputData.length; i++){
      if(inputData[i][0].value=="" || inputData[i][0].checked == false){
        kosong.push(inputData[i][1]);
      }
    }
    for(let i = 0; i < kosong.length; i++){
      if(i == kosong.length - 1){
        printAlert += kosong[i] + " ";
      }else{
        printAlert += kosong[i] + ", ";
      }
    }
    alert(printAlert + "must be inputted");
    return false;
  }else{
    return true;
  }
})
