function telephoneCheck(str) {
// Make this into a switch statement
  if(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str)) { // 555-555-5555
    return true;
  }
  if(/^1 [0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str)) { // 1 555-555-5555
    return true;
  }
  if(/^1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(str)) { // 1 (555) 555-5555
    return true;
  }
 if(/^[0-9]{10}$/.test(str)) { // 5555555555
    return true;
  }
  if(/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(str)) { // (555)555-5555
    return true;
  }
  if(/^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(str)) { // 1(555)555-5555
    return true;
  }
  if(/^1 [0-9]{3} [0-9]{3} [0-9]{4}$/.test(str)) { // 1 555 555 5555
    return true;
  }

  return false;
}

