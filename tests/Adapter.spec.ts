import {test, describe, expect} from 'vitest'
import {Adapter, ComplexNumber} from '../src/Arithmeticable.js'
import {RationalNumber} from '../src/rationalNumber.js'

describe('Tests para la clase adapter', () => {
  let adapter = new Adapter(new RationalNumber(2, 1))
  let complex = new ComplexNumber([1, 1])
  let complex2 = new ComplexNumber([-1 ,1])
  test('Constructor de la clase', () => {
    expect(adapter).toBeInstanceOf(Adapter)
    expect(adapter).toEqual(new Adapter(new RationalNumber(2, 1)))
    expect(adapter.complex).toEqual([2, 0])
  })
  test('Operaciones entre racionales y complejos', () => {
    expect(complex.add(adapter)).toEqual(new ComplexNumber([3, 1]))
    expect(complex.add(new Adapter(new RationalNumber(3, 1)))).toEqual(new ComplexNumber([4, 1]))
    expect(complex2.add(new Adapter(new RationalNumber(0, 1)))).toEqual(new ComplexNumber([-1, 1]))
    expect(complex2.add(new Adapter(new RationalNumber(-1, 1)))).toEqual(new ComplexNumber([-2, 1]))
    expect(complex.sub(adapter)).toEqual(new ComplexNumber([-1, 1]))
    expect(complex.sub(new Adapter(new RationalNumber(3, 1)))).toEqual(new ComplexNumber([-2, 1]))
    expect(complex2.sub(new Adapter(new RationalNumber(0, 1)))).toEqual(new ComplexNumber([-1, 1]))
    expect(complex2.sub(new Adapter(new RationalNumber(-1, 1)))).toEqual(new ComplexNumber([0, 1]))
    expect(complex.multiply(adapter)).toEqual(new ComplexNumber([2, 2]))
    expect(complex.multiply(new Adapter(new RationalNumber(3, 1)))).toEqual(new ComplexNumber([3, 3]))
    expect(complex2.multiply(new Adapter(new RationalNumber(0, 1)))).toEqual(new ComplexNumber([0, 0]))
    expect(complex2.multiply(new Adapter(new RationalNumber(-1, 1)))).toEqual(new ComplexNumber([1, -1]))
    expect(complex.divide(adapter)).toEqual(new ComplexNumber([0.5, -1]))
    expect(complex.divide(new Adapter(new RationalNumber(3, 1)))).toEqual(new ComplexNumber([ 0.3333333333333333, -1]))
    expect(complex2.divide(new Adapter(new RationalNumber(0, 1)))).toEqual(undefined)
    expect(complex2.divide(new Adapter(new RationalNumber(-1, 1)))).toEqual(new ComplexNumber([1, -1]))
  })
})