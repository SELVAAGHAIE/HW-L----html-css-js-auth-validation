document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validateLoginForm();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validateRegisterForm();
        });
    }
    
    function validateLoginForm() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const emailError = document.getElementById('loginEmailError');
        const passwordError = document.getElementById('loginPasswordError');
        let valid = true;
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