// step:1 add event on click
document.getElementById('submit-btn').addEventListener('click', ()=> {
    // step:2 get the email field
    // always remember to use .value to get text from input field
    const emailField = document.getElementById('email');
    const email = emailField.value;
    // step:3 get the password
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    
    // DO NOT VERIFY EMAIL AND PASSWORD ON THE CLIENT SIDE
    // step:4 verify email and password
    if(email === 'shakil@gmail.com' && password === 'shakil123') {
        location.href = "../bank/index.html";
    }
    else {
        alert(' Tui password vule gesot. Toke ami tejjon sontan kore dilam.')
    }
})