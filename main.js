const PasswordEl = document.getElementById('Password');
const lengthEl = document.getElementById('length');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');


generateEl.addEventListener('click',() => {
    const length  = parseInt(lengthEl.value);
    PasswordEl.innerText = GeneratePassword(length);
});

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = PasswordEl.value;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});

function GeneratePassword(length)
{
    let password = "";
    for(let i = 4; i <= length; i += 4){
        password += getRandomUpper();
        password += getRandomSpecialChar();
        password += getRandomLower();
        password += getRandomNumber();
    }
    if(length % 4 === 1)
    {
        password += getRandomLower();
    }
    if(length % 4 === 2)
    {
        password += getRandomNumber();
        password += getRandomLower();
    }
    if(length % 4 === 3)
    {
        password += getRandomLower();
        password += getRandomNumber();
        password += getRandomSpecialChar();
    }
    PasswordEl.value=password.slice(0, length);
}


//const funcs = [getRandomLower(), getRandomNumber(), getRandomUpper(), getRandomSpecialChar()];

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecialChar() {
    const symbols = "@]#${%^(&*.|!}[)',"
    return symbols[Math.floor(Math.random() * 18)];
}
