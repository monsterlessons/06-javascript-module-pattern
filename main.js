// var counter = 0;

// var getCounter = function () {
//   return counter;
// };

// var increaseCounter = function () {
//   counter ++;
// };

// var counterModule = {
//   getCounter: getCounter,
//   increaseCounter: increaseCounter
// };

var counterModule = (function (jQ) {
  var counter = 0;

  var getCounter = function () {
    return counter;
  };

  var increaseCounter = function () {
    counter ++;
  };

  return {
    getCounter: getCounter,
    increaseCounter: increaseCounter
  };

}(jQuery));
