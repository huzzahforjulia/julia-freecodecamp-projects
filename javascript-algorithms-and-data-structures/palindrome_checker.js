function palindrome(str) {
  str = str.replace(/[^a-z0-9+]+/gi, "").toLowerCase();
  let reverseStr = "";
  for(let i=str.length-1; i>=0; i--) {
    reverseStr += str[i];
  }
  console.log(str, reverseStr);
  return reverseStr === str;
}
