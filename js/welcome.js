let welcome = document.getElementById("welcome")

addEventListener('load', function() {
    displayUserName()
})

function displayUserName() {
    if (localStorage.getItem("userName") !== null) {
        welcome.innerHTML = `welcome ${localStorage.getItem("userName")}`
    }
}