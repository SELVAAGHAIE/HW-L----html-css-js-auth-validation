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
            validatingRegisterForm();
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
        if (password.trim() === '') {
            passwordError.textContent = 'Password cannot be empty';
            passwordError.style.display = 'block';
            validate = false;
        } else if (!validatePassword(password)) {
            passwordError.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
            passwordError.style.display = 'block';
            validate = false;
        }else {
            passwordError.style.display = 'none';
        }

        if (validate) {
            alert('Login successful');
        }
    }

    function validatingRegisterForm() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('registerEmailError');
        const passwordError = document.getElementById('registerPasswordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        let validate = true;

        if (username.trim() === '') {
            usernameError.textContent = 'Username cannot be empty';
            usernameError.style.display = 'block';
            validate = false;
        } else {
            usernameError.style.display = 'none';
        }

        if (!validateEmail(email)) {
            emailError.textContent = 'Invalid email address';
            emailError.style.display = 'block';
            validate = false;
        } else {
            emailError.style.display = 'none';
        }

        if (!validatePassword(password)) {
            passwordError.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
            passwordError.style.display = 'block';
            validate = false;
        } else {
            passwordError.style.display = 'none';
        }

        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordError.style.display = 'block';
            validate = false;
        } else {
            confirmPasswordError.style.display = 'none';
        }

        if (validate) {
            alert('Registration successful');
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