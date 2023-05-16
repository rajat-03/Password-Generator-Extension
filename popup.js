function generatePassword() {
    let length = document.getElementById("length").value;
    let useLetters = document.getElementById("letters").checked;
    let useNumbers = document.getElementById("numbers").checked;
    let useSymbols = document.getElementById("symbols").checked;
    let password = "";
    let characters = "";
    
    if (useLetters) {
      characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (useNumbers) {
      characters += "0123456789";
    }
    if (useSymbols) {
      characters += "@#$%";
    }
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("password").value = password;
  }
  
  function copyToClipboard() {
    let password = document.getElementById("password").value;
    navigator.clipboard.writeText(password);
  }
  
  document.getElementById("generate").addEventListener("click", generatePassword);
  document.getElementById("copy").addEventListener("click", copyToClipboard);
  