import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC3sBlQZievB8Di5l_JdUYYUrfY524u8Y",
  authDomain: "apptarefas-266f2.firebaseapp.com",
  projectId: "apptarefas-266f2",
  storageBucket: "apptarefas-266f2.appspot.com",
  messagingSenderId: "755739729254",
  appId: "1:755739729254:web:26ba6df61bc8dc2e1efca7",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
