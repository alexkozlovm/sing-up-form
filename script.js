const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const name = document.getElementById('name');

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match');
    } else {
        confirmPassword.setCustomValidity('');
    }
}
function validateName() {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>=+]/;
    const numbers = /[0-9]/;

    if (specialCharacters.test(name.value)) {
        name.setCustomValidity('Name must not contain special characters');
    } else if (numbers.test(name.value)) {
        name.setCustomValidity('Name must not contain numbers');
    } else {
        name.setCustomValidity('');
    }
}
name.addEventListener("focusout", () => validateName());

confirmPassword.addEventListener("focusout", () => validatePassword());