module.exports = function check(str, bracketsConfig) {
  let bracketPairCount = bracketsConfig.length;
  let openBrackets = new Array(bracketPairCount);
  let closeBrackets = new Array(bracketPairCount);
  
  for (let i = 0; i < bracketPairCount; i++) {
    openBrackets[i] = bracketsConfig[i][0];
    closeBrackets[i] = bracketsConfig[i][1];
  }

  let stack = new Array();
  
  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (openBrackets.includes(c))
      if (closeBrackets.includes(c) && stack[stack.length-1] === c)
        stack.pop();
      else
        stack.push(c);
    else {
      let index = closeBrackets.indexOf(c);
      if (stack.pop() !== openBrackets[index])
        return false;
      }
  };

  return stack.length === 0;
}