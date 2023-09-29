// step 1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2 : get the email address inside the email input filed
    // note: always rememder to use .value to get text from an input filed
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    
    // step-3 : get password inside the password input filed
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    
    // DANGER : DO NOT VERIFY email password on the client side
    // step-4 : verify email & password
    if (email === 'santo@gmail.com' && password === 'gopon') {
        window.location.href = 'bank.html'
    }else{
        alert('invalid user & password');
    }


})