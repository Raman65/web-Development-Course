console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No rendom number is not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes i am done");
      resolve("Raman");
    }, 3000);
  }
});
let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No rendom number is not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes i am done 2");
      resolve("Raman 2");
    }, 3000);
  }
});


let p3=Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a);
    
}).catch((e)=>{
    console.log(e);
    
})


// prom1.then((a) => {
//   console.log(a);
// }).catch((err)=>{
//     console.log(err);
    
// })

