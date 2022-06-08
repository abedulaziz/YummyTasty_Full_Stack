
document.getElementById("username").textContent = localStorage.getItem("username").toUpperCase()

userID = new FormData()
userID.append("user_id", localStorage.getItem("user_id"))

let retrieveUserInfo = axios({
  method: "post",
  url: "./../apis/user-profile.php",
  data: userID
})

retrieveUserInfo.then(res => {
  info = res.data

  document.querySelector(".user_info_details .first_name .user_fname").textContent = info.first_name

  document.getElementById("usernameHead").textContent = `${info.first_name} ${info.last_name}`

  document.querySelector(".user_info_details .Last_name .user_lname").textContent = info.last_name
  document.querySelector(".user_info_details .email .user_email").textContent = info.email

  document.getElementById("userEmail").textContent = info.email

  document.querySelector(".user_info_details .gender .user_gender").textContent = info.gender

  if (info.gender === "female") {
    document.querySelector(".user-profile .profile_img_wrapper img").src = "./../assets/user_profile_image/female_profile_image.jpg"
  }
  else {
    document.querySelector(".user-profile .profile_img_wrapper img").src = "./../assets/user_profile_image/male_profile_image.jpg"
  }

})


const overlay = document.querySelector(".overlay")
const editButton = document.getElementById("editProfile")
const editInfo = document.getElementById("editInfo")

const submitButt = document.getElementById("editInfoButt"),
      cancelButt = document.getElementById("cancelEdit")

cancelButt.addEventListener("click", ()=> {
  editInfo.style.display= "none"
  overlay.style.display= "none"
})

editButton.addEventListener("click", () => {
  overlay.style.display= "block"
  editInfo.style.display = "block"

  submitButt.addEventListener("click",() => {

    let fName = document.getElementById("fname"),
        lName = document.getElementById("lname"),
        email = document.getElementById("email"),
        password = document.getElementById("password")
    if (fName.value === "" ||lName.value === "" ||email.value === "" ||password.value === "") {
      alert("Please input all required fields")
    }
    else {
      
      updataForm = document.getElementById("editInfo")
      const updateInfo = new FormData(updataForm)
      updateInfo.append("user_id", localStorage.getItem("user_id"))
    
      let editRequest = axios({
        method: "post",
        url: "./../apis/update-profile-user.php",
        data: updateInfo
      })
    
      editRequest.then(res => {
        console.log(res)
      })

      let formChildren = editInfo.querySelectorAll("div:not(:last-child) input")
      formChildren.forEach(input => {
        input.value = ""
      })

      editInfo.style.display= "none"
      overlay.style.display= "none"
    }
    
  })
})
