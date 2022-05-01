const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === false) throw new Error("'arr' parameter must be an instance of the Array!");

  function disNext(x) {
    let index = x.indexOf('--discard-next')
    x.splice(index, 2)
  }

  function disPrev(x) {
    let index = x.indexOf('--discard-prev')
    if (x[0] == '--discard-prev') {x.shift()}
   else {x.splice(index -1, 2)}
  }

  function doubleNext(x) {
    let index = x.indexOf('--double-next')
    x.splice(index, 1, x[index + 1])
  }

  function doublePrev(x) {
    let index = x.indexOf('--double-prev')
    if (index == 0) x.shift()
    else x.splice(index, 1,  x[index - 1])
  }

 // if (arr.includes("--discard-next")) disNext(arr);
//  if (arr.includes('--discard-prev')) disPrev(arr);
 // if (arr.includes("--double-next")) doubleNext(arr);
 // if (arr.includes("--double-prev")) doublePrev(arr);

  switch (arr) {
    case arr.includes("--discard-next"):
      disNext(arr)
      
    
    case arr.includes('--discard-prev'):
      disPrev(arr)
      

    case arr.includes("--double-next"):
      doubleNext(arr)
      

    case arr.includes("--double-prev"):
      doublePrev(arr)
      

    }
    return arr
  }



module.exports = {
  transform
};
