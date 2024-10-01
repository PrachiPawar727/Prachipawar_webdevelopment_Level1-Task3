document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // You can replace the alert with your custom popup
    alert("Your form has been submitted successfully.");
  
    // Clear the form after submission
    document.getElementById("myForm").reset();
  });
  