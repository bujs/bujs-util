'use strict'

const BigNumber = require('bignumber.js')
const util = require('../lib')

/* eslint-env jest */
test('bigNumberToString', () => {
  const obj = {
    bigNumber: new BigNumber('1234567'),
    string: 'test',
    number: 123,
    stringNumber: '345543',
    array: [new BigNumber('222'), 3]
  }
  const newObj = util.bigNumberToString(obj)

  expect(newObj.bigNumber).toBe('1234567')
  expect(newObj.string).toBe('test')
  expect(newObj.number).toBe('123')
  expect(newObj.stringNumber).toBe('345543')
  expect(newObj.array[0]).toBe('222')
  expect(newObj.array[1]).toBe('3')
})
