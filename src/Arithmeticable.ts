/**
 * Representa un numero complejo, el primer numero es la parte rela y el egundo la imaginaria
 */
export type complex = [number, number]

/**
 * Esta interfaz representa los metodos que todo objeto aritmetico debe tener
 */
export interface Arithmeticable<T> {
  add(operand1: T): T
  sub(operand1: T): T
  multiply(operand1: T): T 
  divide(operand1: T): T | undefined
}

/**
 * Esta clase representa una coleccion de objetos que implementan la interfaz de Arithmeticable
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  /**
   * Constructor de la clase
   * @param arithmeticableCollection - Conjunto de elementos aritméticos
   */
  constructor(private arithmeticableCollection: T[]) {}
  /**
   * Añade un elemento a la coleccion 
   * @param element - Elemento aritmetico que queremos añadir a la collecion
   */
  addArithmeticable(element: T): void {
    this.arithmeticableCollection.push(element)
  }
  /**
   * Devuelve un elemento en una posicion concreta de la collecion o undefined si el rango sobrepasa
   * el tamaño de la collecion
   * @param index - Posicion del elemento que queremos obtener
   * @returns - El elemento en al posicion index
   */
  getArithmeticable(index: number): T | undefined {
    if (index >= this.arithmeticableCollection.length || index < 0) {
      return undefined
    }
    return this.arithmeticableCollection[index]
  }
  /**
   * Calcula el numero de elementos de la collecion
   * @returns El tamaño de la collecion
   */
  getNumberOfArithmeticals(): number {
    return this.arithmeticableCollection.length
  }
}

/**
 * Esta clase representa un numero complejo, que a su vez es aritmetico porque implementa arithmeticable
 */
export class ComplexNumber implements Arithmeticable<ComplexNumber> {
  /**
   * Constructor de la clase
   * @param complex - Numero complejo
   */
  constructor(public readonly complex: complex) {}
  /**
   * Suma el numero complejo de la clase con otro
   * @param operand1 - Otro numero complejo a sumar
   * @returns La suma de los numeros
   */
  add(operand1: ComplexNumber): ComplexNumber {
    return new ComplexNumber([this.complex[0] + operand1.complex[0], this.complex[1] + operand1.complex[1]])
  }
  /**
   * Resta el numero complejo de esta clase con otro
   * @param operand1 - Otro numero complejo a restar
   * @returns La resta entre dos nuemros complejos
   */
  sub(operand1: ComplexNumber): ComplexNumber {
    return new ComplexNumber([this.complex[0] - operand1.complex[0], this.complex[1] - operand1.complex[1]])
  }
  /**
   * Multiplica el numero complejo de esta clase con otro
   * @param operand1 - Otro numero complejo
   * @returns La multiplicacion de ambos numeros
   */
  multiply(operand1: ComplexNumber): ComplexNumber {
    let parteReal = this.complex[0] * operand1.complex[0] + (this.complex[1] * operand1.complex[1])
    let parteImaginaria = this.complex[0] * operand1.complex[1] + this.complex[1] * operand1.complex[0]
    return new ComplexNumber([parteReal, parteImaginaria])
  }
  /**
   * Divide el numero complejod e la clase por otro 
   * @param operand1 - Otro nuemro complejo a dividir
   * @returns La division, o undefined si alun denoinador se hace 0
   */
  divide(operand1: ComplexNumber): ComplexNumber | undefined {
    let parteReal = (this.complex[0] * operand1.complex[0] + (this.complex[1] * operand1.complex[1] * -1))
    let divisorReal = operand1.complex[0] * operand1.complex[0] + (operand1.complex[1] * operand1.complex[1] * -1)
    if (divisorReal === 0) {
      return undefined
    }
    parteReal = parteReal / divisorReal
    let parteImaginaria = (this.complex[0] * (operand1.complex[1] * -1) + this.complex[1] * operand1.complex[0])
    let divisorImaginario = (this.complex[1] * (operand1.complex[0] * -1) + (this.complex[0] * operand1.complex[1] * -1))
    return new ComplexNumber([parteReal, parteImaginaria / divisorImaginario])
  }
}

