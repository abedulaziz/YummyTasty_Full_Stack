document.getElementById("btn-login").addEventListener("click", function () {
  const form = document.querySelector("form");
  const formdata = new FormData(form);

  const logIn = fetch("http://localhost/YummyTasty_Full_stack/YummyTasty_Backend_laravel/public/api/login", {
    method: "POST", body: formdata});
  
  let reqProcessing = logIn.then((res) => 
      res.json()
    )
    .then((result) => {
      localStorage.setItem("user_id", result.data.id)
      localStorage.setItem("username", result.data.first_name)
      window.location.href = "./../../YummyTasty_Full_stack/YummyTasty_Frontend/pages/resturants.html";

    })

  reqProcessing.catch(() => {
    alert("Your email and/or password is wrong")
  })
});

