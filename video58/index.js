// function nice(name) {
//     console.log("Hey " + name + " you are nice");
//     console.log("Hey " + name + " you are good");
//     console.log("Hey " + name + " your laptop is nice!");
//     console.log("Hey " + name + " your mobile is good too!");
// }
// nice("Raman");

// nice("Shivam");

// console.log("Hey Raman you are nice");
// console.log("Hey Raman you are good");
// console.log("Hey Raman your laptop is nice!");
// console.log("Hey Raman your mobile is good too!");

function sum(a, b, c=3) {
    // console.log(a + b);
    return a + b + c;
}
result1 = sum(4, 5);
result2 = sum(5, 6);
result3 = sum(6, 7, 0);

console.log("The sum of this two number is a & b is ",result1);
console.log("The sum of this two number is a & b is ",result2);
console.log("The sum of this two number is a & b is ",result3);


const func1 =(x)=>{
    console.log("I am an arrow function ",x);
}

func1(34);
func1(71);
func1(389);