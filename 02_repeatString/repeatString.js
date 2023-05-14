const repeatString = function(word, num) {
  let string = "";
  if (num <= -1) {
    return 'ERROR';
  }
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      string += word;
    }
  } else if (num = 0) {
    string = '';
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
