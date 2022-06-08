
const resturantsList = document.getElementById("resturantsList")

document.getElementById("username").textContent = localStorage.getItem("username").toUpperCase()  

const retrieveRestos = fetch("http://localhost/YummyTasty_Full_stack/YummyTasty_Backend_laravel/public/api/list_restaurants", {method: "GET"});

reqProcesses = retrieveRestos.then(res =>
  res.json()
).then(result => {
  for (let i=0; i< result.restaurants.length; i++) {
    let data = result.restaurants[i]

    let rest = document.createElement("div")
    rest.className = "resturant"
    rest.id = data.id;
    
    let resProfileImg = document.createElement("div")
    resProfileImg.className = "res_profile_img"
    
    let imgWrapper = document.createElement("div")
    imgWrapper.className = "img-wrapper"

    let img = document.createElement("img")
    img.src = data.profile_pic
  
    imgWrapper.appendChild(img)
    resProfileImg.appendChild(imgWrapper)
  
    let resAbout = document.createElement("div")
    resAbout.className = "res-about"

    let resName = document.createElement("h3")
    resName.innerText = data.name
    resName.className = "res_name"

    let describtion = document.createElement("p")
    describtion.innerText = data.description
    describtion.className = "describtion"

    let resDetails = document.createElement("p")
    resDetails.innerHTML = `<a href="#" id="resDirector">Learn More...</a>`
    resDetails.className = "res_details"

    resAbout.appendChild(resName)
    resAbout.appendChild(describtion)
    resAbout.appendChild(resDetails)

    rest.appendChild(resProfileImg)
    rest.appendChild(resAbout)

    resturantsList.appendChild(rest)
  }

  reqProcesses.catch(() => {
    alert("Something went wrong");
  })
})


resturantsList.addEventListener("click" , (e) => {
  target = e.target
  if (target.id === "resDirector") {
    
    localStorage.setItem("resturant_id", target.closest(".resturant").id)
    window.location.href = "./../pages/resturant_details.html"
  }

})

//redirect to editing profile 
document.getElementById("username").addEventListener("click",function(){
  window.location.href = "./user_profile.html";
});