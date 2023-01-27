
window.onload = function loginForm() {
    "use strict";
    var formHandle = document.forms.login_information;
    var usernameValue = formHandle.UserName;
    var passwordValue = formHandle.Password;
    var output = document.getElementById("output");
    var usernameOutput = document.getElementById("output__username");
    var passwordOutput = document.getElementById("output__password");
    formHandle.onsubmit = function loginInformationForm() {
        if (usernameValue.value === "") {
            usernameValue.classList.add("login__txt_error");
            usernameValue.focus();
            return false;
        }
        if (passwordValue.value === "") {
            passwordValue.classList.add("login__txt_error");
            passwordValue.focus();
            return false;
        }
        output.style.display = "block";
        usernameOutput.innerHTML = usernameValue.value;
        passwordOutput.innerHTML = passwordValue.value;
        return false;
    };
};