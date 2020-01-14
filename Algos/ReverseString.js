/* Create a function that reverses a string:
'Hi my name is Henc' should be:
'cneH si eman ym iH' */

function reverse(string) {
  let strArr = string.split("");
  let result = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    result += strArr[i];
  }
  return result;
}

const str = "Hi my name is Henc";
reverse(str);
