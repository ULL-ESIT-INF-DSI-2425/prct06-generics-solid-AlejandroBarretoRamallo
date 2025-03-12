import {expect, test, describe} from 'vitest'
import {Arithmeticable, ArithmeticableCollection, complex, ComplexNumber} from '../src/Arithmeticable'

describe('Tests de la clase ArithmeticalColection y ComplexNumber', () => {
  let complex = new ComplexNumber([1, 1])
  let newArothmeticalCollection = new ArithmeticableCollection<ComplexNumber>([complex])
  test('Constructor de la clase ArithmeticalCollection', () => {
    expect(newArothmeticalCollection).toBeInstanceOf(ArithmeticableCollection)
    expect(newArothmeticalCollection.getArithmeticable(0)).toEqual(complex)
  })
  test('Metodos de la clase ArithmeticalCollection', () => {
    newArothmeticalCollection.addArithmeticable(new ComplexNumber([2, 2]))
    expect(newArothmeticalCollection.getNumberOfArithmeticals()).toEqual(2)
    expect(newArothmeticalCollection.getArithmeticable(1)).toEqual(new ComplexNumber([2, 2]))
    expect(newArothmeticalCollection.getArithmeticable(-1)).toEqual(undefined)
    expect(newArothmeticalCollection.getArithmeticable(4)).toEqual(undefined)
  })
  test('Constructor de la clase ComplexNumebr', () => {
    expect(complex).toBeInstanceOf(ComplexNumber)
    expect(complex.complex).toEqual([1, 1])
  })
  test('Metodos de la clase ComplexNumber', () => {
    let operand: ComplexNumber = new ComplexNumber([1, 1])
    expect(complex.add(operand)).toEqual(new ComplexNumber([2, 2]))
    expect(complex.sub(operand)).toEqual(new ComplexNumber([0, 0]))
    expect(complex.multiply(operand)).toEqual(new ComplexNumber([2, 2]))
    expect(complex.multiply(operand)).toEqual(new ComplexNumber([2, 2]))
    expect(complex.divide(new ComplexNumber([0, 0]))).toEqual(undefined)
    expect(complex.divide(new ComplexNumber([0, 1]))).toEqual(new ComplexNumber([1, 1]))
  })
})