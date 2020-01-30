function wrap(string, colNum) {
  let finalWord = '';
  const stringArr = string.split(" ");

  for (let i = 0; i < stringArr.length; i++) {
    let countWordLength = 0;

    let currWord = stringArr[i]; //lorem
    let wordLength = currWord.length; //5
    countWordLength += wordLength;  //countWordLength = 5

    if (countWordLength <= colNum) {
      finalWord += `${currWord} ` + 1
    } else {
      finalWord += `\n${}`
      countWordLength = 0;
    }
  }
  return finalWord;
}
//word += "\n" + "newWord"
