document.getElementById("signup").addEventListener("click",  ()=> {
  var form = document.querySelector("form");
  var formdata = new FormData(form);

  // axios({

  //   method: "post",
  //   url: "./../apis/signup.php",
  //   data: formdata,

  // }).then(function (response){

  //   if (response.data.response == "success") {
  //     console.log(response.data)
  //     localStorage.setItem("user_id", response.data.user_id)
  //     localStorage.setItem('username', response.data.name)
  //     alert("welcome to our site");
  //     window.location.href = "./resturants.html";
  //     return false;
  //   } else {
  //     alert("Input all required fields please.");
  //   }})

    const signUp = fetch("http://localhost/YummyTasty_Full_stack/YummyTasty_Backend_laravel/public/api/signup", {
      method: "POST", body: formdata});
    
    let reqProcessing = signUp.then(res => 
        res.json()
      )
      .then((result) => {
        console.log(result);
        localStorage.setItem("user_id", result.data.user_id)
        localStorage.setItem('username', result.data.name)
        window.location.href = "./../../YummyTasty_Full-stack/YummyTasty_Frontend/pages/resturants.html";
  
      })
  
    reqProcessing.catch(() => {
      alert("Your email and/or password is wrong")
    })
});
