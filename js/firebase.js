import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ================= FIREBASE CONFIG =================

const firebaseConfig = {

  apiKey: "AIzaSyARto6dn6bkymFwXHU2EL206XHzalS8DwU",

  authDomain: "neurolearnai-bd7be.firebaseapp.com",

  projectId: "neurolearnai-bd7be",

  storageBucket: "neurolearnai-bd7be.firebasestorage.app",

  messagingSenderId: "258838856265",

  appId: "1:258838856265:web:b80970716f7a054e4fb598"

};


// ================= INITIALIZE FIREBASE =================

const app = initializeApp(firebaseConfig);


// ================= AUTH =================

const auth = getAuth(app);


// ================= FIRESTORE DATABASE =================

const db = getFirestore(app);


// ================= EXPORT =================

export { auth, db };