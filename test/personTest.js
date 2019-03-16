import { Person } from '../src/person.js'
import { describe, it } from 'mocha'
import { assert, expect } from 'chai'

describe('person', function () {
  it('has default age of 0', function () {
    const foo = new Person('foo')
    assert.equal(foo.age, 0)
  })

  it('can set age', function () {
    const foo = new Person('foo')
    foo.setAge(3)
    assert.equal(foo.age, 3)
  })

  it('raises exception when passing negative age', function () {
    const foo = new Person('foo')
    expect(() => foo.setAge(-4)).to.throw('Cannot assign negative age')
  })

  it('keeps its name', function () {
    const foo = new Person('foo')
    assert.equal(foo.name, 'foo')
  })
})
