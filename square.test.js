import { expect, test } from 'vitest'
import { square } from './square'

test('square 5 to equal 25', () => {
  expect(square(5)).toBe(25)
})
