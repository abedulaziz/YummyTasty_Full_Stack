axios({

  method: "post",
  url: "./../apis/signup.php",
  data: formdata,

}).then(function (response) {

  if (response.data.response == "success") {
    alert("welcome to our site");
    window.location.href = "./resturants.html";
    return false;
  } else {
    alert("try different email or password");
    
  }
});