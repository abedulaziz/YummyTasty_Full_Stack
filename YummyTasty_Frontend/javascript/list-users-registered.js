try {
  
  axios({
  
    method: "get",
    url: './../apis/users-registered.php',
  
  }).then(function (response) {
    let table = document.getElementById("users");
    for (let i = 0; i< response.data.length; i++) {
    
        let data = response.data[i];
        console.log(data);

        // Create an empty <tr> element and add it to the 1st position of the table:
        let row = table.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        // Add some text to the new cells:
        cell1.innerHTML = data.first_name;
        cell2.innerHTML = data.last_name;
        cell3.innerHTML = data.email;
        cell4.innerHTML = data.phone_number;

    }
  });
} catch(err) {
  alert("Something went wrong.")
}



