const { error } = require("console");
const fs = require("fs")


console.log("starting");

// fs.writeFileSync("badal.txt", "Badal is a good boy")

fs.writeFile("badal2.txt", "Badal is good boy2", ()=>{
    console.log("done");
    fs.readFile("badal2.txt", (error, data)=>{
        console.log(error, data.toString());
        
    })
})

fs.appendFile("badal.txt", "badalrobo", (e, d)=>{
    console.log(d);
    
})
console.log("ending");
