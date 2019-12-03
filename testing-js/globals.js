const test = async (title, callback) => {
  try {
    await callback()
    console.log(`🛳 ${title}`)
  } catch (error) {
    console.error(`🚨 ${title}`)
    console.error(error);
  }
}

const expect = (expect) => {
  return {
    toBe: (result) => {
      if (result !== expect) {
        throw new Error(`${result} is not ${expect}`)
      }
    },
  }
}

global.test = test
global.expect = expect