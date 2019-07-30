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
const database = firebase.database()
database.ref().set({
    name: 'Yuvraj Singh',
    age: 19,
    isSingle: false,
    location:{
      city:'Pune',
      country:'India'
    }
}).then(()=>{
  console.log('Data is saved')
}).catch((e)=>{
  console.log('This failed.',e)
})

// database.ref().set('This is my data')

// database.ref('age').set(20)
// database.ref('location/city').set('Vellore')
// database.ref('attributes').set({
//   heigth: '6ft',
//   weight: '58kg'
// }).then(()=>{
//   console.log('Edited')
// }).catch((e)=>{
//   console.log('Yeah, not happening',)
// })

// database.ref('isSingle')
// .remove()
// .then(()=>{
//   console.log('done!')
// }).catch((e)=>{
//   console.log(e)
// })

// database.ref('isSingle')
// .set(null)
// .then(()=>{
//   console.log('done!')
// }).catch((e)=>{
//   console.log(e)
// })


database.ref().update({
  isSingle: true,
  name: 'Yuvi',
  job: 'MERN Stack developer',
  "location/city": 'Vellore'
})