/**
 * @return {Function}
 */

// Defind function
const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// Apply function
const f = createHelloWorld();
console.log(f());
