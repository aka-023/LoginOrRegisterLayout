function reg(){
    let loginContainer = document.getElementById("login");
    let regContainer = document.getElementById("reg");
    loginContainer.style.visibility = "hidden";
    regContainer.style.visibility = "visible";
}

function login(){
    let loginContainer = document.getElementById("login");
    let regContainer = document.getElementById("reg");
    // regContainer.classList.add("appear");
    regContainer.style.visibility = "hidden";
    loginContainer.style.visibility = "visible";
}

function submit(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;

    if(email == "" || password == ""){
        alert("please enter the details....");
    }
}