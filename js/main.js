let registerForm = document.getElementById("registerForm");
let signName = document.getElementById("signname"); 
let signEmail = document.getElementById("signemail"); 
let signPassword = document.getElementById("signpassword"); 
let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");

let allUsers = [];

if (localStorage.getItem("allUsers") !== null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

registerForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    validateInputs();
});

function validateInputs() {
    let valid = true;

    let namePattern = /^[a-zA-Z\s]{2,}$/; 
    if (namePattern.test(signName.value)) {
        nameAlert.classList.add("d-none");
    } else {
        nameAlert.classList.remove("d-none");
        valid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    if (emailPattern.test(signEmail.value)) {
        emailAlert.classList.add("d-none");
    } else {
        emailAlert.classList.remove("d-none");
        valid = false;
    }

    if (signPassword.value.length >= 8) {
        passwordAlert.classList.add("d-none");
    } else {
        passwordAlert.classList.remove("d-none");
        valid = false;
    }

    if (valid) {
        addUser();
    } else {
        successAlert.classList.add("d-none");
    }
}

function addUser() {
    let newUser = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value
    };

    if (isExist(newUser)) {
        existAlert.classList.remove("d-none");
        successAlert.classList.add("d-none");
    } else {
        allUsers.push(newUser);
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        successAlert.classList.remove("d-none");
        existAlert.classList.add("d-none");
        setTimeout(function () {
            window.location.href = './login.html'
        }, 2000)
    }
}

function isExist(user) {
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() === user.email.toLowerCase()) {
            return true;
        }
    }
    return false;
}
