const container = document.querySelector('.container')
const btnSignIn = document.querySelector('.btnSign-in')
const btnSignUp = document.querySelector('.btnSign-up')

btnSignIn.addEventListener('click', () => {
    container.classList.add('active')
})

btnSignUp.addEventListener('click', () => {
    container.classList.remove('active')
})

function loginform(e) {
    event.preventDefault();
    var name = document.getElementById("name").;
    var email = document.getElementById("email");
    var password = document.getElementById("password");
}