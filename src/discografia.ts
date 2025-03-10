import { Cancion } from './cancion'

export interface discoInterface {
  nombre: string,
  añoPublicacion: number
}

export class Single  implements discoInterface {
  /**
   * 
   * @param nombre - Nombre del single
   * @param añoPublicacion Año de publicacon del single
   * @param cancion - Cancion del single
   * @throws {Error} - Si el año de publicación es negativo
   */
  constructor(
    public readonly nombre: string,
    public readonly añoPublicacion: number,
    public readonly cancion: Cancion
  ) {
    if (añoPublicacion < 0) {
      throw new Error('El año de publicación no puede ser negativo')
    }
  }
}

export class Discografia<T extends Disco | Single | (Single | Disco)> {
  /**
   * 
   * @param discos - Discos o singles de la discografía
   */
  constructor(public readonly discos: T[]) {}
}

export class DiscofrafiaDiscos extends Discografia<Disco> {
  constructor(discos: Disco[]) {
    super(discos)
  }
}

export class DiscografiaSingles extends Discografia<Single> {
  constructor(singles: Single[]) {
    super(singles)
  }
}

export class DiscografiaMixta extends Discografia<(Single | Disco)> {
  constructor(discos: (Single | Disco)[]) {
    super(discos)
  }
}

/**
 * Clase para representar un disco
 */
export class Disco implements discoInterface {
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