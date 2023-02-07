// authors: Kyle Stevens, Dennis Hsu
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentElement) {
  // if current element is undefined
  //  set current element to document body
  if (currentElement === undefined) {
    currentElement = document.body;
  }

  // make a result array
  var targetElements = [];

  // if classname is found in current elements classlist
  //  add current element to result array
  if (currentElement.classList && currentElement.classList.contains(className)) {
    targetElements.push(currentElement);
  }

  // for each child node in current element
  //  result array equals result array concat to calling this function on this element
  for (var i = 0; i < currentElement.childNodes.length; i++) {
    targetElements = targetElements.concat(getElementsByClassName(className, currentElement.childNodes[i]));
  }

  // return result array
  return targetElements;
};
