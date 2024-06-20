document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const iconClose = document.querySelector('.icon-close');
    const btnLoginPopup = document.querySelector('.btnlogin-popup');
    const wrapper = document.querySelector('.wrapper');

    // Function to show the login form and hide the register form
    function showLoginForm() {
        wrapper.style.display = 'flex';
        wrapper.classList.remove('active');
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    }

    // Function to show the register form and hide the login form
    function showRegisterForm() {
        wrapper.style.display = 'flex'; // Ensure wrapper is displayed
        wrapper.classList.add('active'); // Activate the wrapper
        loginForm.style.display = 'none'; // Hide login form
        registerForm.style.display = 'block'; // Show register form
    }
    

    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        showRegisterForm();
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });

    btnLoginPopup.addEventListener('click', function() {
        showLoginForm();
    });

    iconClose.addEventListener('click', function() {
        wrapper.style.display = 'none';
    });
});

