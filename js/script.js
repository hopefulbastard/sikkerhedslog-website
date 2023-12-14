/* Log in */

var loggedIn;

function loggedInStatus(){
    loggedIn = localStorage.getItem("LoggedUser") || null;
    if(loggedIn == null){
        location.replace("index.html");
    }
}

function attemptLogin() {
    // Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
/*  if (username === "karzan" && password === "magnus") {
        location.replace("sikkerhedslog.html")
    } else {
        document.getElementById("loginMessage").innerHTML = "Invalid username or password";
    }*/

    if (username === "karzan" && password === "magnus"){
        localStorage.setItem("LoggedUser", "Karzan");
        location.replace("sikkerhedslog.html");
    }

} 

function logOut(){
    localStorage.removeItem("LoggedUser");
}

/* Sikkerhedslog */

const url = "http://localhost:5165/api/SikkerhedsLogs";

async function GetAll(){
    const response = await fetch(url);
    const logs = await response.json();

    if(logs != null){
        sikkerhedslog = document.getElementById("sikkerhedslog");

        logs.forEach((log) => {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.innerHTML = `${log.id}`;
            td2.innerHTML = `${log.tidspunkt}`;

            tr.appendChild(td1);
            tr.appendChild(td2);

            sikkerhedslog.appendChild(tr);
        }); 
    }


}

/* Kontrol */

var kontrolValue;

function Kontrol(){
    kontrolValue = localStorage.getItem("Kontrol") || "Off";
    if(kontrolValue == "On"){
        document.getElementById("onoff").value = "On";
    }
}

function OnOff(){

    kontrolValue = localStorage.getItem("Kontrol") || "Off";

    currentValue = document.getElementById('onoff').value;
    if(kontrolValue == "Off"){
        document.getElementById('onoff').value = "On";
        localStorage.setItem("Kontrol", "On");
    }
    else{
        document.getElementById('onoff').value = "Off";
        localStorage.setItem("Kontrol", "Off");
    }
}

/* Tracker */

var trackerValue;

//Henter trackerValue fra local storage. Hvis ingen tal findes, sættes trackerValue til 0.
function Tracker(){
    trackerValue = localStorage.getItem("trackerValue") || 0;
    trackerValue = parseInt(trackerValue);

    if(trackerValue == 0){
        trackerValue = 0;
        localStorage.setItem("trackerValue", "0");
    }

    document.getElementById('tracker').value = trackerValue;
}

//+1 til værdien af tracker og localstorage.
function TrackerAdd(){
    trackerValue = trackerValue + 1;
    document.getElementById('tracker').value = trackerValue;
    localStorage.setItem("trackerValue", trackerValue);
}
    
//Nulstiller værdien af tracker og localstorage.
function TrackerReset(){
    trackerValue = 0;
    document.getElementById('tracker').value = trackerValue;
    localStorage.removeItem("trackerValue");
}
    