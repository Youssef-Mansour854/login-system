let loginForm = document.getElementById("loginForm");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginAlert = document.getElementById("loginAlert");
let loginSuccessAlert = document.getElementById("loginSuccessAlert");

let allUsers = [];

if (localStorage.getItem("allUsers") !== null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    login();
});

function login() {
    let userData = {
        email: loginEmail.value,
        password: loginPassword.value
    };

    if (isLoginValid(userData)) {
        loginAlert.classList.add("d-none");
        loginSuccessAlert.classList.remove("d-none");
        loginSuccessAlert.classList.add("d-block");
        setTimeout(function() {
            window.location.href = './welcome.html'
        }, 2000)
    } else {
        loginSuccessAlert.classList.add("d-none");
        loginAlert.classList.remove("d-none");
        loginAlert.classList.add("d-block");
    }
}

function isLoginValid(userData) {
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == userData.email.toLowerCase()
        && allUsers[i].password.toLowerCase() == userData.password.toLowerCase()) {
            localStorage.setItem("userName" , allUsers[i].name)
            return true;
        }
    }
    return false;
}
