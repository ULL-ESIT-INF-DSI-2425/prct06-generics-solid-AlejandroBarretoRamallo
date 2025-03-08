import {Disco} from './discografia'


/**
 * Clase para representar un artista
 */
export class Artista {
  /**
   * Constructor de la clase
   * @param nombre - Nombre del artista
   * @param numeroOyentes - Número de oyentes mensuales del artista
   * @param discografia - Discografía del artista
   * @throws {Error} - Si el número de oyentes es negativo
   */
  constructor(
    public readonly nombre: string,
    public readonly numeroOyentes: number,
    public readonly discografia: Disco[]
  ) {
    if (numeroOyentes < 0) {
      throw new Error('El número de oyentes no puede ser negativo')
    }
  }
}