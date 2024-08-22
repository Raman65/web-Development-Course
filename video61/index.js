let random = Math.random()
console.log(random);
let a = prompt("Enter 1st number")
let c = prompt("Enter operation")
let b = prompt("Enter 2nd number")


let obj = {
    "=":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}



if(random > 0.1){
    
    
    console.log(`The result is ${a} ${c} ${b}`);
    
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
}
