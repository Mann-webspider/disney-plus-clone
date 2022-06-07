import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7PcfxZtu6ecl4b7CKZG1CgEU7T--N9ks",
  authDomain: "disney-plus-clone-10594.firebaseapp.com",
  projectId: "disney-plus-clone-10594",
  storageBucket: "disney-plus-clone-10594.appspot.com",
  messagingSenderId: "1007871303374",
  appId: "1:1007871303374:web:69cf5ecc039c2edaa97a9f",
  measurementId: "G-PGCNP3WCES",
};

var app = initializeApp(firebaseConfig);
export var auth = getAuth(app);

export { app };
// export default auth;
