import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const welcomeUser =
document.getElementById("welcomeUser");

const logoutBtn =
document.getElementById("logoutBtn");

const quizScore =
document.getElementById("quizScore");

const dsaProgress =
document.getElementById("dsaProgress");

const webProgress =
document.getElementById("webProgress");

const dsaBtn =
document.getElementById("dsaBtn");

const webBtn =
document.getElementById("webBtn");


// CHECK AUTH

onAuthStateChanged(auth,(user)=>{

  if(user){

    // USER EMAIL

    welcomeUser.innerText =
    `Welcome, ${user.email}`;

    // QUIZ SCORE

    const savedScore =
    localStorage.getItem("quizScore");

    if(savedScore){

      quizScore.innerText =
      savedScore;

    }

    else{

      quizScore.innerText = 0;

    }

    // COURSE PROGRESS

    let dsa =
    localStorage.getItem("dsaProgress") || 0;

    let web =
    localStorage.getItem("webProgress") || 0;

    dsaProgress.innerText =
    `Progress: ${dsa}%`;

    webProgress.innerText =
    `Progress: ${web}%`;

  }

  else{

    window.location.href =
    "login.html";

  }

});


// LOGOUT

logoutBtn.addEventListener("click",

async()=>{

  await signOut(auth);

  window.location.href =
  "login.html";

});


// DSA COURSE BUTTON

dsaBtn.addEventListener("click",()=>{

  let progress =
  parseInt(
    localStorage.getItem("dsaProgress")
  ) || 0;

  if(progress < 100){

    progress += 10;

  }

  localStorage.setItem(
    "dsaProgress",
    progress
  );

  dsaProgress.innerText =
  `Progress: ${progress}%`;

});


// WEB COURSE BUTTON

webBtn.addEventListener("click",()=>{

  let progress =
  parseInt(
    localStorage.getItem("webProgress")
  ) || 0;

  if(progress < 100){

    progress += 10;

  }

  localStorage.setItem(
    "webProgress",
    progress
  );

  webProgress.innerText =
  `Progress: ${progress}%`;

});