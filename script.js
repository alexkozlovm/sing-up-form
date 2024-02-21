const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message'); // Reference to the error message display

function validateForm() {
    let isValid = true;
    const errors = [];

    if (password.value.length < 8) {
        isValid = false;
        errors.push("*Password must be at least 8 characters long");
    }

    if (confirmPassword.value !== password.value) {
        isValid = false;
        errors.push("*Password and Confirm Password do not match");
    }

    if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
        isValid = false;
        errors.push("*Name can only contain letters and spaces");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        isValid = false;
        errors.push("*Invalid email address");
    }


    if (!isValid) {
        // Display error messages
        errorMessage.innerHTML = ""; // Clear previous error messages
        errors.forEach(error => {
            errorMessage.innerHTML += `<p>${error}</p>`; // Append new error messages
        });
    }

    return isValid;
}

function submitForm() {
    // Submit the form
    alert("Form submitted successfully");
    location.reload(); // Reload the page to clear the form
}

// Example usage:
// Add an event listener to the form submit button or form submit event
// For example, assuming you have a form with id "signup-form" and a submit button with id "submit-button"
const form = document.getElementById('signup-form');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission if validation fails
    if (validateForm()) {
        submitForm(); // Submit the form if validation passes
    }
});