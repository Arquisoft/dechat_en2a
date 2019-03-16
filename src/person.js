/** Class representing a Person */
class Person {
  /**
   * Creates a Person
   * The initial age is 0
   * @param {String} aName name of person
   */
  constructor (aName) {
    this._name = aName
    this._age = 0
  }
  get name () { return this._name }
  get age () { return this._age }

  /**
   * Change age
   * @param {int} age
   */
  setAge (age) {
    if (age < 0) {
      throw new Error('Cannot assign negative age')
    }
    this._age = age
  }
}

const _Person = Person
export { _Person as Person }
