
const addReview = document.getElementById("addReview"),
reviewsContainer = document.querySelector(".reviews .content .res_reviews")

document.getElementById("username").textContent = localStorage.getItem("username")

document.querySelector(".reviews .add-review .username").textContent = localStorage.getItem("username")

if (true) {
addReview.addEventListener("click", addReviewWidget)
}

function addReviewWidget() {

  var currUserReview = document.createElement("div")
  currUserReview.classList.add("current_user_review")

  let reviewHead = document.createElement("h4")
  reviewHead.classList.add("rev_head")
  reviewHead.innerText = "Your Review:"

  let description = document.createElement("textarea")
  description.id = "description"
  description.setAttribute("name", "description")

  let reviewRate = document.createElement("div")
  reviewRate.classList.add("rev_rate")
  for (let i =0; i<5; i++) {
  let star =document.createElement("i")
  star.classList.add("fa-regular", "fa-star")
  star.id = i+1
  reviewRate.appendChild(star)
  }

  let starsRate = 1

  reviewRate.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("fa-star")) {
      for (let z =0; z < parseInt(ev.target.id); z++) {
        starsRate = parseInt(ev.target.id)

        reviewRate.children[z].classList.remove("fa-regular")
        reviewRate.children[z].classList.add("fa-solid")

      }

      for (let f=parseInt(ev.target.id); f<5; f++) {
        reviewRate.children[f].classList.add("fa-regular")
        reviewRate.children[f].classList.remove("fa-solid")
      }
    }
  })

  let reviewStatus = document.createElement("div")
  reviewStatus.className = "rev_status"

  let cancel = document.createElement("div")
  cancel.className = "cancel"
  cancel.innerText = "Cancel"
  let submit = document.createElement("div")
  submit.className = "submit"
  submit.innerText = "Submit"

  reviewStatus.appendChild(cancel)
  reviewStatus.appendChild(submit)

  currUserReview.appendChild(reviewHead)
  currUserReview.appendChild(description)
  currUserReview.appendChild(reviewRate)
  currUserReview.appendChild(reviewStatus)

  reviewsContainer.insertBefore(currUserReview, reviewsContainer.firstChild)
  addReview.removeEventListener("click", addReviewWidget)

  submit.addEventListener("click",() => {
    if (description.value != "") {
      
      console.log(starsRate)

      let currReview = new FormData()
      currReview.append("restaurant_id", localStorage.getItem("resturant_id"))
      currReview.append("user_id", localStorage.getItem("user_id"))
      currReview.append("description", description.value)
      currReview.append("rate", starsRate)

      let submitReq = axios({
        method: "post",
        url: "./../apis/add-review.php",
        data: currReview
      })

      submitReq.then(res => {
        reviewsContainer.removeChild(currUserReview)
        addReview.classList.add("reviewed")
        
      }).catch(err => console.log(err))

    }
  })
cancel.addEventListener("click",() => cancelReview(currUserReview))
}


const resturantData = new FormData()
resturantData.append("restaurant_id", localStorage.getItem("resturant_id"))


let resturantReq = axios({
method: "post",
url: './../apis/restaurant.php',
data: resturantData
})

let reviewsRed = axios({
method: "post",
url: './../apis/list-approved-review.php',
data: resturantData
})

axios.all([resturantReq, reviewsRed]).then(axios.spread((...responses) => {
  const resturantRes = responses[0].data,
        reviewsRes = responses[1].data;

  console.log(resturantRes)
  document.getElementById("resturant_img").src = resturantRes.profile_pic;
  document.getElementById("resName").textContent = resturantRes.restaurant_name;
  document.getElementById("resAddress").textContent = resturantRes.address;
  document.getElementById("resDescription").textContent = resturantRes.description;
  let avgReview = 0;//avarge stars
  console.log(reviewsRes)
  let i = 0
  for (i =0; i< reviewsRes.length; i++) {
    let review = document.createElement('div')
    review.className = "review"

    let username = document.createElement('h3')
    username.className = "username"
    username.textContent = reviewsRes[i].first_name + " " +reviewsRes[i].last_name

    let revRate = document.createElement('div')
    revRate.classList.add("review_rate")
    avgReview=avgReview+reviewsRes[i].rate//avarge stars
    solidStarsCounter = 1
    for (let j = 0; j< 5; j++) {
      let star = document.createElement("i")
      if (solidStarsCounter <= reviewsRes[i].rate) {
        star.classList.add("fa-star", "fa-solid")
        solidStarsCounter++
      }
      else star.classList.add("fa-star", "fa-regular")
      revRate.appendChild(star)
    }

    let userFeedback = document.createElement("div")
    userFeedback.className = "user_feedback"
    userFeedback.textContent = reviewsRes[i].description;

    review.appendChild(username)
    review.appendChild(revRate)
    review.appendChild(userFeedback)

    reviewsContainer.appendChild(review)

  }
  avgReview=avgReview/i
  document.getElementById("stars").innerHTML = avgReview +" "
}))



  
function cancelReview(container) {
reviewsContainer.removeChild(container)
addReview.addEventListener("click", addReviewWidget)
}

//redirect to editing profile 
document.getElementById("username").addEventListener("click",function(){
  window.location.href = "./user_profile.html";
});