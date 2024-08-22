console.log("Hello i am conditional tutorial");

let age = 8;
// let grace = 2;

// age+=grace;

// console.log(age);

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age % grace);
// console.log(age ** grace);


if(age>=18){
    console.log("You can drive");
}
else if(age == 0){
    console.log("Are you kidding?");
}
else{
    console.log("You can not drive");
}
let a = 9;
let b = 10;
/*
translate tp:
if(a>b){
let c=a-b;
}
else{
let c=b-a
}
*/
let c = a>b ?(a-b):(b-a);
console.log(c);
