const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  if (!backyard) return false;
  if (backyard.isArray == false) return false;
  let cats = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      //let cats = new RegExp ("^^", "")
      if (backyard[i][j] === '^^') {
        cats++
      }
    }
  }
  return cats
}

module.exports = {
  countCats,
};
