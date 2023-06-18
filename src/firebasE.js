import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7PcfxZtu6ecl4b7CKZG1CgEU7T--N9ks",
  authDomain: "disney-plus-clone-10594.firebaseapp.com",
  projectId: "disney-plus-clone-10594",
  storageBucket: "disney-plus-clone-10594.appspot.com",
  messagingSenderId: "1007871303374",
  appId: "1:1007871303374:web:69cf5ecc039c2edaa97a9f",
  measurementId: "G-PGCNP3WCES",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = initializeApp(firebaseConfig);

const storage = getStorage(app, "gs://disney-plus-clone-10594.appspot.com");

function listAllValues() {
  const storageRef = ref(storage);

  var listRef = storageRef.root;
  const fireMovie = listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {});
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          console.log(url);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

export var auth = getAuth(app);

export { app, listAllValues };
// export default auth;
