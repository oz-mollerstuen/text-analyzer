//bus logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.trim().split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurencesInText(word, text) {
  const textArray = text.split(' ');
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function offensiveWords(word, text) {
    let badWords = text.split(' ');
    let badArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    badWords.forEach(function(element, i) {
      if (badArray.includes(element)) {
        console.log(badWords.splice(i, 10));
      } else {
        console.log(text);
      }
        
    });
    console.log(badWords)
    return badWords.join(" ") 
  }

  console.log(offensiveWords("Hey biffaroni You're such a zoinks"))

