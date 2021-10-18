const login = document.getElementById('Login');
const Sign = document.getElementById('Sign');
const signUp = document.querySelector('.signUp');
const loginUp = document.querySelector('.loginUp');
const backbtn = document.getElementById('backBtn');



login.onclick = () => {
    signUp.classList.toggle('active');
    loginUp.classList.toggle('active');
};
Sign.onclick = () => {
    signUp.classList.toggle('active');
    loginUp.classList.toggle('active');
};