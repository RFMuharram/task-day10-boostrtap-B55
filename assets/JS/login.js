const loginForm = document.querySelector(".login-form");
const regisForm = document.querySelector(".regist-form");
const registLink  = document.querySelector(".regist-link");
const loginLink = document.querySelector(".login-link");

registLink.onclick=()=>{
    regisForm.classList.add('active');
    loginForm.classList.add('active');
}
loginLink.onclick=()=>{
    regisForm.classList.remove('active');
    loginForm.classList.remove('active');
}