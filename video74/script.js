let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    // alert("I was Cliked")
    document.querySelector(".box").innerHTML = "<b> Yayy you are clicked </b> Enjoyed your clicked"
})

button.addEventListener("contextmenu", ()=>{
   alert("Don't right click please")
})

document.addEventListener("keydown", (e)=>{
  console.log(e, e.key, e.keyCode);
  
})