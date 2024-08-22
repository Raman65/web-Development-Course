let arr = [1,3, 35, 46, 43]

// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((e, index, array)=>{
    return e**2;
})

console.log(newArr);
const greaterThenFive = (e)=>{
    if(e>5){
        return true
    }
    return false
}
console.log(arr.filter(greaterThenFive));

let arr2 = [1,2,3,4,5,6]

const red =(a, b)=>{
    return a+b
}

console.log(arr2.reduce(red));

console.log(Array.from("Raman"));
