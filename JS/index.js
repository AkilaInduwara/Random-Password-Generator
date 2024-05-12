//declare password length
const length = 8;

//Declare all characters as variables
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!~@#$%^&*()_-+={[}]|\:;'<,>.?/";

//get all characters together
const allChar = upperCase + lowerCase + number + symbol ;



/*-----------------------------------------------------------------------
create a function to display a password when click the generate button.
-------------------------------------------------------------------------*/
const submitBtn = document.querySelector("button");

submitBtn.onclick = function(){
    createPassword();
};

function createPassword(){

    let password = ""; //var type should be let. cuz password always need to be change.

    //need first letter as upperCase;
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];

    //rest of the letter
    while(length > password.length){

        password = password + allChar[Math.floor(Math.random() * allChar.length)];
        

    }
    // console.log(password);

    //display generated password in text field.
    document.getElementById("passwordTxt").value = password;

}



/*-----------------------------------------------------------------------
create a function to copy the password to the clipboard when click the file copy icon.
-------------------------------------------------------------------------*/

const fileCopy = document.getElementById("fileCopyBtn");

fileCopy.onclick = function(){
    copyPassword();
}

function copyPassword(){
    //All select the password in the text field;
    document.getElementById("passwordTxt").select();

    //copy selected password to the clipbord;
    document.execCommand("copy");

}