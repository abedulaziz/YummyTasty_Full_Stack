document.getElementById("signup").addEventListener("click",  ()=> {
  var form = document.querySelector("form");
  var formdata = new FormData(form);

  axios({

    method: "post",
    url: "./../apis/signup.php",
    data: formdata,

  }).then(function (response){

    if (response.data.response == "success") {
      console.log(response.data)
      localStorage.setItem("user_id", response.data.user_id)
      localStorage.setItem('username', response.data.name)
      alert("welcome to our site");
      window.location.href = "./resturants.html";
      return false;
    } else {
      alert("Input all required fields please.");
    }})
});
