 // PROMISE 

// let data = 1;
// console.log(data)

// data = 2;
// setTimeout(()=>{
//     console.log(data)
// },2000)


// data=3;
// console.log(data)



// CREATING OWN PROMISE

// let data = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('code has been executed')
//         reject('Some issues in code ')
//     })

// })
// console.log(data)

// CODE USED FOR RESOLVE THE PROMISE WHICH COMES DURING console.log(data) with catch and then

// data.then((item)=>{
//     console.log(item)
// }).catch((error)=>{
//     console.warn('error happing ',error)
// })

//let data1  =  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=3ad96fdc72036f2fe4d7aa4074d78a95&language=en-US&page=1")
//console.log(data1)

// DURING CALLING DATE FROM API TWO ALWAYS COMES SO IT HAS BE RESOLVE

// data1.then((item)=>{   different output will come in this case 
//     console.log('first output'item)
// })


// data1.then((item)=>{
//    return item.json()
// }).then((result)=>{
//     console.log("Second",result)
// })




// PROMISE CHAIN


// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//         reject('error comming catch block')
//     })
// })

// data.then((item)=>{
//     console.log('FIRST PROMISE',item)
//     return item *10
// }).then((multi)=>{
//     console.log('SECOND PROMISE', multi)
// }).catch((err)=>{
// console.log('this error in 62',err)
// })



// PROMISE WITH FINAL KEYWORD   (ERROR HANDLING)
// let data2 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//      resolve(10)
//       reject(10)
//     },2000) 
// })
// data2.finally((ft)=>{
//     console.log('through finalyy ',ft)
// })
// data2.then((tt)=>{
//     console.log(tt)
//  })
//  .catch((err)=>{
//     console.log('data comes in catch thrugh reject ',err)
// })


// PROMISE WITH ALL , ALLSETTLED , RACE

// ALL

// let data3 = Promise.all([
//     new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve('two second')
//        },2000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve('three second')
//         },3000)
//      }),
//      new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve('four second')
//         },4000)
//      })
// ])


// data3.then((st)=>{
//     console.log('Then block',st)
// }).catch((cst)=>{
//     console.log('catch block',cst)
// })

//ALL SETTELED 

// let data3 = Promise.allSettled([
//     new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve('two second')
//        },2000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          reject('three second')
//         },3000)
//      }),
//      new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve('four second')
//         },4000)
//      })
// ])


// data3.then((st)=>{
//     console.log('Then block',st)
// }).catch((cst)=>{
//     console.log('catch block',cst)
// })


// RACE

// let data3 = Promise.race([
//     new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve('two second')
//        },2000)
//     }),
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve('three second')
//         },3000)
//      }),
//      new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve('four second')
//         },4000)
//      })
// ])


// data3.then((st)=>{
//     console.log('Then block',st)
// }).catch((cst)=>{
//     console.log('catch block',cst)
// })