const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
    "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"];

const charactersWithoutNumbers = characters.slice(0,52).concat(characters.slice(62));
const charactersWithoutSymbols = characters.slice(0,62);
const charactersOnlyLetters = characters.slice(0,52);

let passwordOne = document.getElementById("password1")
let passwordTwo = document.getElementById("password2")
let lengthInput = document.getElementById("length")
let lengthVal = document.getElementById("lengthval")
let includeNumbers = document.getElementById("numbers")
let includeSymbols = document.getElementById("symbols")


function updateValue() {
    let length = lengthInput.value
    lengthVal.textContent = length
    
}
function generatePassword() {
    let passwordLength = lengthInput.value
    let password1 = ""
    let password2 = ""
    let characterArray = characters

    if (!includeNumbers.checked && includeSymbols.checked) {
        characterArray = charactersWithoutNumbers
    } else if (includeNumbers.checked && !includeSymbols.checked) {
        characterArray = charactersWithoutSymbols
    } else if (!includeNumbers.checked && !includeSymbols.checked) {
        characterArray = charactersOnlyLetters
    }
    
    for (let i=0; i<passwordLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * characterArray.length)
        let randomIndex2 = Math.floor(Math.random() * characterArray.length)
        password1 += characterArray[randomIndex1]
        password2 += characterArray[randomIndex2]
    }
    passwordOne.textContent = password1
    passwordTwo.textContent = password2
}