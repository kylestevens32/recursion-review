// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // @authors Pair Programming: Kyle Stevens, Dennis Hsu

  // your code goes here
  // input: object, array, nested array/objects, primitive values
  // output: string

  // edge cases: null
  // function or undefined, skip it if in object

  // base case: no more nesting, inner most value

  // if if its a number, convert it to string
  // if it's a floating decimal number?
  // if its a boolean, convert it to string
  // if it's a string, return it
  // if it's null (object), return string null
  // if it's an array (object), return brackets and commas between values
  // check for nested; do recursion as necessary
  // if it's an object, return key value pair with colons
  // check object for nesting; do recursion as necessary

  if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
    return obj.toString();
  } else if (typeof(obj) === 'string') {
    return '\"' + obj + '\"';
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    var resultString = '[';
    var resultArr = [];
    for (var i = 0; i < obj.length; i += 1) {
      resultArr.push(stringifyJSON(obj[i]));
    }
    resultString = resultString + resultArr.join(',') + ']';
    return resultString;
  } else if (typeof(obj) === 'object') {
    var resultString = '{';
    var resultArr = [];
    for (var key in obj) {
      if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
        var pair = '\"' + key + '\":' + stringifyJSON(obj[key]);
        resultArr.push(pair);
      }
    }
    resultString = resultString + resultArr.join(',') + '}';
    return resultString;
  }

};
