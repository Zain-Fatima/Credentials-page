const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btn = document.querySelector('.btnlogo');
const close = document.querySelector('.icon-close');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    loginForm.style.transform = 'translateX(-400px)';
    registerForm.style.transform = 'translateX(0)';
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    loginForm.style.transform = 'translateX(0)';
    registerForm.style.transform = 'translateX(400px)';
});

btn.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
