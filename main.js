
function addUser() {
    x = document.getElementById("player1_name_input").value;
  y = document.getElementById("player2_name_input").value;
  
      localStorage.setItem("player1_name",x);
      localStorage.setItem("player2_name", y);
  
      window.location = "index1.html";
  }
  
  