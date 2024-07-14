function getAsciiValue(char) {
    return char.charCodeAt(0);
  }
  

  let character = 'A';
  let asciiValue = getAsciiValue(character);
  
  console.log(`The ASCII value of '${character}' is: ${asciiValue}`);
  