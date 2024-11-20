let submit = document.getElementById("btn")
let userName = document.getElementById("name")
let email = document.getElementById('email')
let password = document.getElementById('password')
let conPassword = document.getElementById('conpassword')
let alertName = document.getElementById("alert-name")
let alertEmail = document.getElementById("alert-email")
let alertPassword = document.getElementById("alert-password")
let alertConPassword = document.getElementById("alert-conpassword")

submit.onclick = function(){
    if(userName.value === ''){
        alertName.innerHTML = 'Please Enter your Name'
    }else if (email.value === '') {
        alertEmail.innerHTML = 'Please Enter your E-mail'
    } else if(password.value === '' || password.value > "6") {
        alertPassword.innerHTML = 'Please Enter your Password'
    } else if(conPassword.value === '' || password.value != conPassword.value) {
        alertConPassword.innerHTML = 'Not The Same'
    }
}
