import firebase from 'firebase';
export 
const firebaseConfig = {
    apiKey: "AIzaSyBZv4Aqh7KKX1vuuL_V5ex2UgaPHd0LwRA",
    authDomain: "lgbtq-app-fd117.firebaseapp.com",
    databaseURL: "https://lgbtq-app-fd117-default-rtdb.firebaseio.com",
    projectId: "lgbtq-app-fd117",
    storageBucket: "lgbtq-app-fd117.appspot.com",
    messagingSenderId: "686941762032",
    appId: "1:686941762032:web:5868d19c55eb1edf8bed35"
  };
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
