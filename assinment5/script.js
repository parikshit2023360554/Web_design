// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting

        // Clear previous error messages
        document.querySelectorAll('.error').forEach((el) => {
            el.style.display = 'none';
            el.classList.remove('show-error');
        });

        // Validate inputs
        const isValidName = validateName();
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const isValidPhone = validatePhone();

        if (isValidName && isValidEmail && isValidPassword && isValidPhone) {
            alert('Form submitted successfully!');
            // You can add form submission logic here (e.g., sending data to a server)
        }
    });

    function validateName() {
        const name = document.getElementById('name').value.trim();
        if (name.length < 3) {
            showError('nameError', 'Name must be at least 3 characters long.');
            return false;
        }
        return true;
    }

    function validateEmail() {
        const email = document.getElementById('email').value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            showError('emailError', 'Please enter a valid email.');
            return false;
        }
        return true;
    }

    function validatePassword() {
        const password = document.getElementById('password').value.trim();
        if (password.length < 6) {
            showError('passwordError', 'Password must be at least 6 characters long.');
            return false;
        }
        return true;
    }

    function validatePhone() {
        const phone = document.getElementById('phone').value.trim();
        const regex = /^\d{10}$/;
        if (!regex.test(phone)) {
            showError('phoneError', 'Phone number must be 10 digits.');
            return false;
        }
        return true;
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.classList.add('show-error');
    }
});
