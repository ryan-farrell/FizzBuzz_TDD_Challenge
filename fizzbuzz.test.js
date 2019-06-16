const fizzbuzz = require('./fizzbuzz')

/* Created 15 tests using the 'jest' testing framework as my TDD starting point 
to complete the well known fizzbuzz tech test.*/

/******* Note to myself that further reading on other test libraries/frameworks is 
required. Although Node.js has its on built in assertion library others are also available
such as 'Chai' usually used in conjunction with 'Mocha'. Also 'SuperTest' is used with 'Express'******** */

describe('fizzbuzz', () => {
  it('returns 1 when given 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
})
describe('fizzbuzz', () => {
  it('returns 2 when given 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })
})

describe('fizzbuzz', () => {
  it('returns fizz when given 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
})

describe('fizzbuzz', () => {
  it('returns 4 when given 4', () => {
    expect(fizzbuzz(4)).toBe(4)
  })
})

describe('fizzbuzz', () => {
  it('returns buzz when given 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })
}
)
describe('fizzbuzz', () => {
  it('returns fizz when given 6', () => {
    expect(fizzbuzz(6)).toBe('fizz')
  })
})
describe('fizzbuzz', () => {
  it('returns 7 when given 7', () => {
    expect(fizzbuzz(7)).toBe(7)
  })
})
describe('fizzbuzz', () => {
  it('returns 8 when given 8', () => {
    expect(fizzbuzz(8)).toBe(8)
  })
})

describe('fizzbuzz', () => {
  it('returns fizz when given 9', () => {
    expect(fizzbuzz(9)).toBe('fizz')
  })
})

describe('fizzbuzz', () => {
  it('returns buzz when given 10', () => {
    expect(fizzbuzz(10)).toBe('buzz')
  })
})

describe('fizzbuzz', () => {
  it('returns 11 when given 11', () => {
    expect(fizzbuzz(11)).toBe(11)
  })
}
)
describe('fizzbuzz', () => {
  it('returns fizz when given 12', () => {
    expect(fizzbuzz(12)).toBe('fizz')
  })
})
describe('fizzbuzz', () => {
  it('returns 13 when given 13', () => {
    expect(fizzbuzz(13)).toBe(13)
  })
}
)
describe('fizzbuzz', () => {
  it('returns 14 when given 14', () => {
    expect(fizzbuzz(14)).toBe(14)
  })
})

describe('fizzbuzz', () => {
  it('returns fizzbuzz when given 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})

