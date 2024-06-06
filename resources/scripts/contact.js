let emailText = document.getElementById("email-text");
let emailButton = document.getElementById("email-button");
let copyEmail = document.getElementById("email-txt");

emailButton.addEventListener("click", function () {
    if (emailText.style.display === "none") {
        emailText.style.display = "block";
    } else {
        emailText.style.display = "none";
    }
});
