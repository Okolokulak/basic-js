const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator === undefined
    ? options.separator = "+"
    : options.separator = String(options.separator);
  options.additionSeparator === undefined
    ? options.additionSeparator = "|"
    : options.additionSeparator = String(options.additionSeparator);
  //даём дефолтные значения, указанные в задаче и удостоверяемся, что пришедшее станет строкой

  function repeat(str, separator, repeatTimes) {
    if (str === undefined) str = "";
    if (repeatTimes === undefined) repeatTimes = 1; // опять задаём дефолт
    let arr = new Array;

    for (let i = 0; i < repeatTimes; i++) {
      arr.push(String(str));
    }
    let result = arr.join(separator);

    return result;
  }

  let addition = repeat(
    options.addition,
    options.additionSeparator,
    options.additionRepeatTimes
  ); //сначала генерируем допольнительное, чтобы потом использовать в генерации основы


  let main = repeat(
    str,
    addition + options.separator,
    options.repeatTimes
  ); //используем доп. для генерации основной строки
  
  let full = main + addition; 
  
  return full;
}

module.exports = {
  repeater,
};
