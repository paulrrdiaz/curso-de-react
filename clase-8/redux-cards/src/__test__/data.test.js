import { removeFromArray } from 'helpers/data'

describe('Testing Data helpers', () => {
  const array = ['a', 'b', 'c']
  const target = 'b'
  const expected = ['a', 'c']

  it('should remove an item from an array', () => {
    expect(removeFromArray(array, target)).toStrictEqual(expected)
  });
});