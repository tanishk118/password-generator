const password = document.getElementById("password");

const length = document.getElementById("length");

const uppercase = document.getElementById("uppercase");

const lowercase = document.getElementById("lowercase");

const numbers = document.getElementById("numbers");

const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");

const copyBtn = document.getElementById("copyBtn");

const strengthText = document.getElementById("strengthText");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lower = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";

const symbol = "!@#$%^&*()_+{}[]<>?/";

generateBtn.addEventListener("click", ()=>{

let characters="";

if(uppercase.checked) characters+=upper;

if(lowercase.checked) characters+=lower;

if(numbers.checked) characters+=number;

if(symbols.checked) characters+=symbol;

if(characters===""){

alert("Select at least one option");

return;

}

let pass="";

for(let i=0;i<length.value;i++){

pass+=characters.charAt(Math.floor(Math.random()*characters.length));

}

password.value=pass;

checkStrength(pass);

});

copyBtn.addEventListener("click", ()=>{

navigator.clipboard.writeText(password.value);

alert("Password Copied!");

});

function checkStrength(pass){

let strength=0;

if(pass.length>=8) strength++;

if(/[A-Z]/.test(pass)) strength++;

if(/[0-9]/.test(pass)) strength++;

if(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(pass)) strength++;

if(strength<=2){

strengthText.innerHTML="Weak";

strengthText.style.color="red";

}

else if(strength==3){

strengthText.innerHTML="Medium";

strengthText.style.color="yellow";

}

else{

strengthText.innerHTML="Strong";

strengthText.style.color="lightgreen";

}

}