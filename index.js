document.getElementById('submit-button').addEventListener('click',function () {
    const userField=document.getElementById('user-email');
    const GetUserInfo=userField.value;
    //get password
    const passwordField=document.getElementById('password-input');
    const givePassword= passwordField.value;
    if (GetUserInfo=="putul@gmail.com" && givePassword=="1234") {
        window.location.href='banking.html';
    }
})

