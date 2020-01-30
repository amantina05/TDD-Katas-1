function wrap(string, colNum) {
  if (colNum === 0) {
    return '';
  } else if (string.length > 0) {
    return string;
  } else if (string.length >= colNum) {
    //loop through
    // for(let i = 0; i <= string.length; i++) {
    //   let curr = string[i]
    //   if (curr.lasIndexOf > -1) {
    //     curr.lasIndexOf.split()
    //   }
    // }
  } else {
    return '';
  }
}

module.exports = wrap;
