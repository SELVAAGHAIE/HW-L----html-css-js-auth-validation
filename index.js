document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validatingLoginForm();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validateRegisterForm();
        });
    }
    
    function validatingLoginForm() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const emailError = document.getElementById('loginEmailError');
        const passwordError = document.getElementById('loginPasswordError');
        let validate = true;

        if (email.trim() === '') {
            emailError.textContent = 'Email cannot be empty';
            emailError.style.display = 'block';
            validate = false;
        }
        else if (!validateEmail(email)) {
            emailError.textContent = 'Invalid email address';
            emailError.style.display = 'block';
            validate = false;}
        else {
            emailError.style.display = 'none';
        }

    }
    function validateEmail(email) {
        const re =/[a-zA-Z0-9.-]+@[a-z-]+\.(com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }
});