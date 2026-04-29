const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const strengthText = document.getElementById("strengthText");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+";

function generatePassword() {
    let chars = "";
    let password = "";

    if (uppercase.checked) chars += upperChars;
    if (lowercase.checked) chars += lowerChars;
    if (numbers.checked) chars += numberChars;
    if (symbols.checked) chars += symbolChars;

    if (chars === "") {
        alert("Select at least one option!");
        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordField.value = password;
    updateStrength();
}

function updateStrength() {
    let length = lengthSlider.value;
    let score = 0;

    if (uppercase.checked) score++;
    if (lowercase.checked) score++;
    if (numbers.checked) score++;
    if (symbols.checked) score++;

    if (length >= 12 && score >= 3) {
        strengthText.textContent = "Strong 💪";
        strengthText.style.color = "lightgreen";
    } 
    else if (length >= 8) {
        strengthText.textContent = "Medium ⚡";
        strengthText.style.color = "yellow";
    } 
    else {
        strengthText.textContent = "Weak ❌";
        strengthText.style.color = "red";
    }
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordField.value);
    copyBtn.textContent = "Copied!";
    
    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);
});

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", generatePassword);

generatePassword();