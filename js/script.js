function attemptLogin() {
    // Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "karzan" && password === "magnus") {
    
    location.replace("sikkerhedslog.html")
        } else {
            document.getElementById("loginMessage").innerHTML = "Invalid username or password";
        }
    }
    
