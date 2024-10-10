import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGnVtK5Wze8oLNW4RIe0ENZgtHMa3J7ZU",
  authDomain: "paez-sueiro-cwm-parcial1.firebaseapp.com",
  projectId: "paez-sueiro-cwm-parcial1",
  storageBucket: "paez-sueiro-cwm-parcial1.appspot.com",
  messagingSenderId: "14180494162",
  appId: "1:14180494162:web:f5a22bd175ae02e565688b"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
