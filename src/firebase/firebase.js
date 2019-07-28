import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC5-LH1hQlwANp5HhcRbqPPUSuySPizLLA",
  authDomain: "expensify-405bb.firebaseapp.com",
  databaseURL: "https://expensify-405bb.firebaseio.com",
  projectId: "expensify-405bb",
  storageBucket: "expensify-405bb.appspot.com",
  messagingSenderId: "1031724303254",
  appId: "1:1031724303254:web:b8db9b3e1e9a1f19"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Yuvraj Singh'
})
