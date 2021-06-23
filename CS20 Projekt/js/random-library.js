// Library of random functions

// Return random number between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
  }
  
  // Return random integer between low (inclusive) and high (exclusive)
  function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
  }
  
  function randomRGB() {
    let r = randomInt(0, 256);
    let g = randomInt(0, 256);
    let b = randomInt(0, 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  
  function randomFont() {
    let randNum = randomInt(1, 4);
    if (randNum === 1) {
      return "Arial";
    } else if (randNum === 2) {
      return "Roboto";
    } else if (randNum === 3) {
      return "Verdana";
    }
  }
  