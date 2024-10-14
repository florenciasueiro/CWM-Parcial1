import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCGnVtK5Wze8oLNW4RIe0ENZgtHMa3J7ZU",
  authDomain: "paez-sueiro-cwm-parcial1.firebaseapp.com",
  projectId: "paez-sueiro-cwm-parcial1",
  storageBucket: "paez-sueiro-cwm-parcial1.appspot.com",
  messagingSenderId: "14180494162",
  appId: "1:14180494162:web:f5a22bd175ae02e565688b"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
