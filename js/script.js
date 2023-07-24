const emailBar = document.getElementById('email');
const userBar = document.getElementById('user');
const passwordBar = document.getElementById('pass');
const passwordBar2 = document.getElementById('pass2');
const submitButton = document.querySelector(".btn-primary");
const checkBox = document.getElementById('terms');

emailBar.addEventListener("keyup", emailValidity);
userBar.addEventListener("keyup", userValidity);
passwordBar.addEventListener("keyup", passwordValidity);
passwordBar2.addEventListener("keyup", passwordMatch);
submitButton.addEventListener("click", validate); 
document.getElementsByName("form")[0].addEventListener("submit", validate);
document.getElementsByName("form")[0].addEventListener("reset", clearError);

function emailValidity  () {
    let email = emailBar.value;
    const errorMessage1 = document.getElementById("errorMessage1");
    //Make sure they typed a real email address
    if (email.indexOf('@') === -1) {
        if (errorMessage1) { //if there is already an error message, delete it.
            errorMessage1.remove();
            emailBar.style.borderColor = '';
        }
        //Give the error message.
        const warning = document.createElement('div');
        warning.id = 'errorMessage1';
        warning.className = 'error-message';
        warning.innerHTML = "This is not a valid email address";
        warning.style.color = 'red';
        emailBar.style.borderColor = 'red';
        document.getElementById('emailDiv').appendChild(warning);
    } else { //If there was an error message and you now have a valid email, delete the message.
        if (errorMessage1) {
            errorMessage1.remove();
            emailBar.style.borderColor = '';
        }
    }
}

function userValidity () {
    let username = userBar.value.toLowerCase();
    const errorMessage2 = document.getElementById('errorMessage2');
    //username must be less than 20 characters
    if (username.length > 20 || username.length < 1) {
        if (errorMessage2) { //if there is already an error message, delete it.
            errorMessage2.remove();
            userBar.style.borderColor = '';
        }
        //Give the error message.
        const warning = document.createElement('div');
        warning.id = 'errorMessage2';
        warning.className = 'error-message';
        warning.innerHTML = "Username must be 20 or less characters";
        warning.style.color = 'red';
        userBar.style.borderColor = 'red';
        document.getElementById('userDiv').appendChild(warning);
    } else { //If there was an error message and you now have a username that's less than 20 characters, delete the message.
        if (errorMessage2) {
            errorMessage2.remove();
            userBar.style.borderColor = '';
        }
    }
}
//
function passwordValidity () {
    let password = passwordBar.value;
    const errorMessage3 = document.getElementById('errorMessage3');
    //Password should be at least 6 characters long, 1 uppercase, and 1 lowercase
    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        if (errorMessage3) { //if there is already an error message, delete it.
            errorMessage3.remove();
            passwordBar.style.borderColor = '';
        }
        //Give the error message.
        const warning = document.createElement('div');
        warning.id = 'errorMessage3';
        warning.className = 'error-message';
        warning.innerHTML = "Password must contain at least 6 characters, with at least one uppercase and one lowercase character.";
        warning.style.color = 'red';
        passwordBar.style.borderColor = 'red';
        document.getElementById('passDiv').appendChild(warning);
    } else { //If there was an error message and you now have a good password, delete the message.
        if (errorMessage3) {
            errorMessage3.remove();
            passwordBar.style.borderColor = '';
        }
    }
}

function passwordMatch () {
    let password = passwordBar.value;
    let password2 = passwordBar2.value;
    const errorMessage4 = document.getElementById('errorMessage4');
    //Do both passwords match
    if (password !== password2) {
        if (errorMessage4) { //if there is already an error message, delete it.
            errorMessage4.remove();
            passwordBar2.style.borderColor = '';
        }
        //Give the error message.
        const warning = document.createElement('div');
        warning.id = 'errorMessage4';
        warning.className = 'error-message';
        warning.innerHTML = "Both passwords must match.";
        warning.style.color = 'red';
        passwordBar2.style.borderColor = 'red';
        document.getElementById('pass2Div').appendChild(warning);
    } else { //If there was an error message and you now have a good password, delete the message.
        if (errorMessage4) {
            errorMessage4.remove();
            passwordBar2.style.borderColor = '';
        }
    }
}

function agreedToTerms () {
    if (!checkBox.checked) {
        const errorMessage5 = document.createElement('div');
        errorMessage5.id = 'error-message5';
        errorMessage5.className = 'error-message';
        errorMessage5.innerText = 'Please agree to the terms and conditions';
        errorMessage5.style.color = 'red';
        document.querySelector('.form-check').appendChild(errorMessage5);
        } else {
        const errorMessage5 = document.getElementById('error-message5');
        if (errorMessage5) {
            errorMessage5.remove();
        }
    }
}

//Not sure if I actually need this one, but it came with the inline HTML code at line 14
function validate(event) {
    //event.preventDefault();
    emailValidity();
    userValidity();
    passwordValidity();
    passwordMatch();
    agreedToTerms();

    const errorMessageCount = document.querySelectorAll('.error-message').length;

    if (errorMessageCount == 0) {
        return true;
    }
    else {
        return false;
    }
}

function clearError() {
    document.getElementById('errorMessage1').remove();
    emailBar.style.borderColor = '';
    document.getElementById('errorMessage2').remove();
    userBar.style.borderColor = '';
    document.getElementById('errorMessage3').remove();
    passwordBar.style.borderColor = '';
    document.getElementById('errorMessage4').remove();
    passwordBar2.style.borderColor = '';
    document.getElementById('errorMessage5').remove();
}