const table = document.getElementById("reviews");


axios({
  method: "get",
  url: "./../apis/reviewsonprogress.php",
})
  .then(function (response) {
    console.log(response);

    for (let i = 0; i < response.data.length; i++) {
      let data = response.data[i];

      // Create an empty <tr> element and add it to the 1st position of the table:
      let row = table.insertRow(-1);
      row.classList.add("table_row")
      row.setAttribute("data-user_id", data.user_id)
      row.setAttribute("data-restaurant_id" ,data.restaurant_id)

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);

      // Add some text to the new cells:
      cell1.innerHTML = data.email;
      cell2.innerHTML = data.restaurant_name;
      cell3.innerHTML = data.description;
      cell4.innerHTML = data.rate;
      cell5.id = "status";
      cell5.innerHTML = "<div><i class='fa-solid fa-circle-check green' id='approve'></i><i class='fa-solid fa-circle-xmark red' id= 'delete'></i></div>";
    }
  })
  .catch((err) => {
    alert("Something went wrong.");
    console.log(err);
  });


table.addEventListener("click",ev => {
  target = ev.target

  if (target.id === "approve") {

    let approveReq = new FormData()
    approveReq.append("user_id", target.closest(".table_row").getAttribute("data-user_id"))
    approveReq.append("restaurant_id", target.closest(".table_row").getAttribute("data-restaurant_id"))

    let approveRev = axios({
      method: "post",
      url: "./../apis/approved-review.php",
      data: approveReq,
    })

    approveRev.then(res => {
      console.log(res)
    })
  }

  else if (target.id === "delete") {

    target = ev.target

    let approveReq = new FormData()
    approveReq.append("user_id", target.closest(".table_row").getAttribute("data-user_id"))
    approveReq.append("restaurant_id", target.closest(".table_row").getAttribute("data-restaurant_id"))

    let approveRev = axios({
      method: "post",
      url: "./../apis/delete-review.php",
      data: approveReq,
    })

    approveRev.then(res => {
      console.log(res)
    })
  }

})