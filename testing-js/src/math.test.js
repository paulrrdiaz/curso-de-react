const { sum, asyncSum, subtract } = require('./math')

const sumTest = () => {
  let result = sum(2, 3)
  let final = 5
  expect(result).toBe(final)
}

test('Sum Test', sumTest)

const asyncSumTest = async () => {
  let result = await asyncSum(1, 3)
  let final = 20
  expect(result).toBe(final)
}

test('Async Sum Test', asyncSumTest)

const subtractTest = () => {
  let result = subtract(5, 2)
  let final = 3
  expect(result).toBe(final)
}

test('Subtract test', subtractTest)