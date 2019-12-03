const sleep = async (time = 3000) => {
  await new Promise(resolve => setTimeout(resolve, time))
}
const sum = (a, b) => a + b
const subtract = (a, b) => a - b
const asyncSum = async (a, b) => {
  await sleep(5000);
  return a + b
}

module.exports = {
  sum,
  asyncSum,
  subtract
}