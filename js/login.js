
//step-1: submit button click event
document.getElementById('btn-submit').addEventListener('click', function(){
//step-2: get the email address
 const emailField = document.getElementById('email-field');
 const email = emailField.value;

 //Step - 3: get the password
 const passwordField = document.getElementById('password-field');
 const password = passwordField.value;

 //step-4: verify email and password

 if(email === 'ibrahimkayum017@gmail.com' && password === '123456'){
    window.location.href = 'bank.html';
 }else{
    alert('Please provide right email and password');
 }

 

 emailField.value = '';
 passwordField.value = '';
})