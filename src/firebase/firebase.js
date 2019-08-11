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
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  googleAuthProvider,
  database as default
}









//  //child_remove
//  database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key, snapshot.val())
//  })

//  //child_changed
//  database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
//  })

// //child_added
// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

// database.ref('expenses')
//         .once('value')
//         .then((snapshot)=>{
//           const expenses = [];
//           snapshot.forEach((childSnapshot) => {
//             expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//             })
//           });
//           console.log(expenses)
//         });

// database.ref('expenses').on('value',(snapshot)=>{
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//       })
//   });
//   console.log(expenses)
// })


// database.ref('expenses').push({
//     description: 'Zoomcar',
//     note: 'i20',
//     amount:'4000',
//     createdAt: '5-aug-2019'
// })

// database.ref('expenses').push({
//   description: 'Airbnb',
//   note: 'Smondo 2.0',
//   amount:'6000',
//   createdAt: '3-aug-2019'
// })

// database.ref('expenses').push({
//   description: 'Ishika is bae',
//   note: 'Ishi!',
//   amount:'700',
//   createdAt: '2 aug 2019'
// })






// database.ref(notes/-LlGqBjebYNKrTfllwuI).remove()
// database.ref('notes').push({
//   title: 'NodeJS',
//   body: 'Promises!'
// })


// database.ref().on('value',(snapshot)=>{
//   console.log(snapshot.val())
// },(e)=>{
//   console.log('Error',e)
// })

// setTimeout(() => {
//   database.ref('age').set(20)
// }, 3500);

// setTimeout(() => {
//   database.ref('age').set(21)
// }, 7000);

// setTimeout(() => {
//   database.ref().off()
// }, 10000);

// setTimeout(() => {
//   database.ref('age').set(23)
// }, 13500);


// database.ref("location/city")
//   .once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e)=>{
//     console.log(e)
//   })


// database.ref().set({
//     name: 'Yuvraj Singh',
//     age: 19,
//     isSingle: false,
//     location:{
//       city:'Pune',
//       country:'India'
//     }
// }).then(()=>{
//   console.log('Data is saved')
// }).catch((e)=>{
//   console.log('This failed.',e)
// })

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


// database.ref().update({
//   isSingle: true,
//   name: 'Yuvi',
//   job: 'MERN Stack developer',
//   "location/city": 'Vellore'
// })