const container = document.querySelector('.container')
const btnSignIn = document.querySelector('.btnSign-in')
const btnSignUp = document.querySelector('.btnSign-up')

btnSignIn.addEventListener('click', () => {
    container.classList.add('active')
})

btnSignUp.addEventListener('click', () => {
    container.classList.remove('active')
})

function signup(e) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        name: name,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    alert("Dang ki thanh cong");
}

function login(e) {
    event.preventDefault();

        var email = document.getElementById("emaill").value;
    var password = document.getElementById("passwordd").value;
    var user = localStorage.getItem(em);
    var data = JSON.parse(user);
    if (user == null) {
        alert("Vui long nhap day du thong tin dang nhap");

    } else if (email == data.email && password == data.password) { 
        alert("Dang nhap thanh cong");
        window.location.href = "index.html";
    } else {
        alert("Dang nhap khong thanh cong");
    }
 }