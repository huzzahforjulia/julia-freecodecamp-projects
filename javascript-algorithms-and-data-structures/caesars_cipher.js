function rot13(str) {
  let ciphered = "";

  for(let i=0; i<str.length; i++) {
    if(!str[i].match(/[A-Z]/i)) { // If character is not a letter
      ciphered += str[i];
    }
    else { // Decode the letter
      if(str[i].charCodeAt(0) - 13 - 65 >= 0) {
        ciphered += String.fromCharCode(str[i].charCodeAt(0) - 13);
      }
      else {
        ciphered += String.fromCharCode(str[i].charCodeAt(0) - 13 + 26);
      }
    }
  }
  return ciphered;
}
