const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //resolve('This is my resolved data') 
        reject('You got rejected here too XD')
    }, 1500);
})

console.log('before')

promise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})

console.log('after')
