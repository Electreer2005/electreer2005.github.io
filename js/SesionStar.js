const LoginContenedor = document.getElementById('LoginContenedor');
const RegisterContenedor = document.getElementById('RegisterContenedor');
const ShowRegister = document.getElementById('ShowRegister');
const ShowLogin = document.getElementById('ShowLogin');

ShowRegister.addEventListener('click', function() {
    LoginContenedor.style.display = 'none';
    RegisterContenedor.style.display = 'block';
})

ShowLogin.addEventListener('click', function() {
    RegisterContenedor.style.display = 'none';
    LoginContenedor.style.display = 'block';
})