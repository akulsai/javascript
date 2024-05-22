let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");
function signIn() {
    let inputValue = inputElement.ariaValueMax;
    let verifyText = "Hi " + inputValue + ", verifying your account...";
    signInTextElement.textcontent = verifyText;
}