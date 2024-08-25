function createCard(title, cName, views, monthOld, duration, thumbnail) {
  let viewStr
  
  if(views<1000){
    viewStr= views
  }
    else if(views<1000000){
      viewStr= views/1000 + "K";
    }
    
    else if(views>1000000){
      viewStr= views/1000000 + "M";
    }
    
    let months
    if(monthOld<12){
      
    }
    else{
      months= monthOld/12 + "year ago";
    }
      
    
    

  let html = `<div class="card">
            <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${months} </p>
            </div>
        </div>`;
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #12",
  "RamanPradhan",
  570000,
  7,
  "31.22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);
