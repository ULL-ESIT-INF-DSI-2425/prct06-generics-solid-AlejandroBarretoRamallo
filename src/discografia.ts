import { Cancion } from './cancion'

/**
 * Se representa una discogrfía como un conjunto de discos
 */
export type discografia = Disco | Single[]

export class Single {
  
}

/**
 * Clase para representar un disco
 */
export class Disco {
  /**
   * Constructor de la clase
   * @param nombre - Nombre del disco
   * @param añoPublicacion - Año de publicación del disco
   * @param canciones - Canciones del disco
   * @throws {Error} - Si el año de publicación es negativo 
   */
  constructor(
    public readonly nombre: string,
    public readonly añoPublicacion: number,
    public readonly canciones: Cancion[]
  ) {
    if (añoPublicacion < 0) {
      throw new Error('El año de publicación no puede ser negativo')
    }
  }
}