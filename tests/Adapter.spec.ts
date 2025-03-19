import {test, describe, expect} from 'vitest'
import {Adapter, ComplexNumber} from '../src/Arithmeticable.js'
import {RationalNumber} from '../src/rationalNumber.js'

describe('Tests para la clase adapter', () => {
  let adapter = new Adapter(new RationalNumber(2, 1))
  let complex = new ComplexNumber([1, 1])
  test('Constructor de la clase', () => {
    expect(adapter).toBeInstanceOf(Adapter)
    expect(adapter).toEqual(new Adapter(new RationalNumber(2, 1)))
    expect(adapter.complex).toEqual([2, 0])
  })
  test('Operaciones entre racionales y complejos', () => {
    expect(complex.add(adapter)).toEqual(new ComplexNumber([3, 1]))
    expect(complex.add(new Adapter(new RationalNumber(3, 1)))).toEqual(new ComplexNumber([4, 1]))
    expect(complex.add(new Adapter(new RationalNumber(0, 1)))).toEqual(new ComplexNumber([1, 1]))
    expect(complex.add(new Adapter(new RationalNumber(-1, 1)))).toEqual(new ComplexNumber([0, 1]))
    expect(complex.sub(adapter)).toEqual(new ComplexNumber([-1, 1]))
    expect(complex.sub(new Adapter(new RationalNumber(3, 1)))).toEqual(new ComplexNumber([-2, 1]))
    expect(complex.sub(new Adapter(new RationalNumber(0, 1)))).toEqual(new ComplexNumber([1, 1]))
    expect(complex.sub(new Adapter(new RationalNumber(-1, 1)))).toEqual(new ComplexNumber([0, 1]))
  })
})