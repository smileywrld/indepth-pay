let Login = document.querySelector('.Login2')
let Currency = document.querySelector('.Currency')
Currency.addEventListener('mouseover', function(){
    // Login.classList.remove('.Login2')
Login.classList.add('Login_js')
console.log('HI')
})
Currency.addEventListener('mouseleave', function(){
    Login.classList.remove('Login_js')
        Login.classList.add('.Login2')
})