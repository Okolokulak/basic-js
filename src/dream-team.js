const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) return false
  if (Array.isArray(members) == false) return false
  let names = members.filter(entry => typeof entry === 'string')
  let noSpace = names.map(letter => letter.trim())
  return noSpace.map(letter => letter[0])
  .sort((a,b) => a.localeCompare(b)).join("").toUpperCase()

}

module.exports = {
  createDreamTeam
};
