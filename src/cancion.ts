
/**
 * Class para representar una canción
 */
export class Cancion {
  /**
   * Constructor de la clase
   * @param nombre - Nombre de la canción
   * @param duracion - Duración de la canción
   * @param generos - Géneros de la canción
   * @param isASingle - Indica si la canción es un single
   * @param reporducciones - Número de reproducciones de la canción
   * @throws {Error} - Si la duración o las reproducciones son negativas
   */
  constructor(
    public readonly nombre: string,
    public readonly duracion: number,
    public readonly generos: string[],
    public readonly isASingle: boolean, 
    public readonly reporducciones: number
  ) {
    if (duracion < 0) {
      throw new Error('La duración de la canción no puede ser negativa')
    }
    if (reporducciones < 0) {
      throw new Error('Las reproducciones de la canción no pueden ser negativas')
    }
  }
}
