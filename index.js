// time O(n) and Space n(n)
function balancedBrackets(string) {
  //we have three ways in which our stack will be inbalance
  //1) when your last character is still there and the stack is empty
  //2) when your stack is not empty but character is finish
  //2) when character doesn't match the pop one
  let stack = [];
  const openingBrackets = "([{";
  const closingBrackets = ")]}";
  const matchingBrackets = { ")": "(", "]": "[", "}": "{" };
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        return stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
