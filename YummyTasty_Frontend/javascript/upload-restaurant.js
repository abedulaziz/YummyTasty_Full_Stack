document.getElementById("upload-restaurant").addEventListener("click",  ()=> {
    
    
    const resName = document.getElementById("resName").value;
    const resDesc = document.getElementById("resDesc").value;
    const resAddress = document.getElementById("resAddress").value;
    const profilePic = document.getElementById("profilePic").files[0].name;
    
    var formdata = new FormData();
    formdata.append('resName', resName);
    formdata.append('resDesc', resDesc);
    formdata.append('resAddress', resAddress);
    formdata.append('profilePic', profilePic);
  
    axios({
  
      method: "post",
      url: "./../apis/add-restaurant.php",
      data: formdata,
  
    }).then(function (response){
        console.log(response)
  
      if (response.data.response === "success") {
        document.getElementById("status").innerText = "restaurant uploded successfuly !";  
        document.getElementById("status").style.display = "block";
        document.getElementById("resName").value = "";
        document.getElementById("resDesc").value = "";
        document.getElementById("resAddress").value = "";
        document.getElementById("profilePic").value = "";
      } else {
          document.getElementById("status").innerText = "wrong input!";  
        alert("Error! wrong input fill all the required * field");
      };})
  });
  