const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns 1 when given 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
})
