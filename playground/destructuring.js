// const person ={ 
//     name: "Yuvraj",
//     age: 19,
//     location:{
//         city:'Pune',
//         temp: 20
//     }

// }

// const book= {
//     title: "Looking for Alaska",
//     author: "John Green",
//     publisher:{
//         name: 'Penguin',
//     }
// }

// const {title,author} = book
// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

//
// const address = ['Kalyani Nagar','Pune',, '411014']
// const [street, city, state='New York', zip] = address;
// console.log(`You are in ${city}, ${state}`)
//

const item = ['Coffee (hot)','₹10','₹20','₹25']
const [name,,medium] = item

console.log(`A medium ${name} costs ${medium}`)