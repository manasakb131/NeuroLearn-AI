import { auth }
from "./firebase.js";

import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword

}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ================= SIGNUP =================

const signupForm =
document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",

async(e)=>{

e.preventDefault();

const email =
document.getElementById("signupEmail").value;

const password =
document.getElementById("signupPassword").value;

try{

await createUserWithEmailAndPassword(
auth,
email,
password
);

alert("Account Created Successfully");

window.location.href =
"login.html";

}

catch(error){

alert(error.message);

}

});

}


// ================= LOGIN =================

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",

async(e)=>{

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

alert("Login Successful");

window.location.href =
"dashboard.html";

}

catch(error){

alert(error.message);

}

});

}


// ================= SHOW PASSWORD =================

const togglePassword =
document.querySelector(".toggle-password");

if(togglePassword){

togglePassword.addEventListener("click",()=>{

const passwordInput =
document.querySelector("input[type='password'], input[type='text']");

if(passwordInput.type === "password"){

passwordInput.type = "text";

togglePassword.innerHTML = "🙈";

}

else{

passwordInput.type = "password";

togglePassword.innerHTML = "👁";

}

});

}