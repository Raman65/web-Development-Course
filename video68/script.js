console.log("Raman");

// let ramanpradhan = document.getElementsByClassName("box")
// console.log(ramanpradhan);

// ramanpradhan[2].style.backgroundColor ="red"



// document.getElementById("redbox").style.backgroundColor = "blue"

// document.querySelector(".box").style.backgroundColor = "gray";
console.log(document.querySelectorAll(".box"));
 
document.querySelectorAll(".box").forEach(e=>{
    console.log(e);
    e.style.backgroundColor = "gray";
})