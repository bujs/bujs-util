'use strict'

const BigNumber = require('bignumber.js')

/**
 * Convert obj to string
 *
 * @param {*} obj
 * @param {number} base
 * @returns {*}
 * @public
 */
function bigNumberToString (obj, base) {
  // setup base
  base = base || 10

  // check if obj is type object, not an array and is not BigNumber
  if (typeof obj === 'object' && obj !== null && !Array.isArray(obj) && !(BigNumber.isBigNumber(obj))) {
    Object.keys(obj).forEach(function (key) {
      obj[key] = bigNumberToString(obj[key], base)
    })
  }

  // obj is an array
  if (Array.isArray(obj)) {
    // convert items in array
    obj = obj.map(function (item) {
      // convert item to a string if bignumber
      return bigNumberToString(item, base)
    })
  }

  // if obj is number, convert to string
  if (typeof obj === 'number') return obj + ''

  // if not an object bypass
  if (typeof obj !== 'object' || obj === null) return obj

  // if the object is not BigNumber, bypass
  if (!(BigNumber.isBigNumber(obj))) return obj

  // if object is bignumber, convert to string with base
  return obj.toString(base)
}

module.exports = {
  bigNumberToString
}
