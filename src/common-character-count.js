const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount (s1, s2) {
  let count = 0;
  let first = s1.split(''); // разбиваем строку на массив для дальнейшего использования его методов
  let second = s2.split('');
  function replacer(x) {
    if (second.includes(x)) { // проверка на общие символы в обеих строках
      second.splice(second.indexOf(x), 1); // убираем все проверенные
      count++;
    }
  } 
  
  first.forEach(replacer);
      
  return count;
}

module.exports = {
  getCommonCharacterCount
};
