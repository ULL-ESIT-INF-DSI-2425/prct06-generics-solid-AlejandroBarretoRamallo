import { BasicStreamableCollection, infoElemento } from './Streamable.js';

/**
 * Representa una pelicula
 */
export class Pelicula {
  constructor(
    public readonly nombre: string,
    public readonly duracion: number,
    public readonly puntuacion: number,
    public readonly añoPublicacion: number, 
  ) {}
}

/**
 * Representa una coleccion de peliculas
 */
export class PeliculaCollection extends BasicStreamableCollection<Pelicula> {
  /**
   * 
   * @param listaElementos - Conjunto de peliculas
   * @param puntuacionPromedio - La puntuacon media de los peliculas
   * @param numeroVisualizaciones - Numero de visualizaciones total entre todos los peliculas
   * @param numeroElementos - Numero de peliculas
   */
  constructor(listaElementos: infoElemento<Pelicula>[], puntuacionPromedio: number, numeroVisualizaciones: number, numeroElementos: number) {
    super(listaElementos, puntuacionPromedio, numeroVisualizaciones, numeroElementos)
  }

  /**
   * Busca una pelicula por su año de publicacion
   * @param numero Año de publicacion
   * @returns Una lista de docuemtnales que salieron ese año
   */
  busquedaPorAño(numero: number): infoElemento<Pelicula>[] {
    return this.listaElementos.filter(elemento => {
      return numero === elemento[0].añoPublicacion
    })
  }

  /**
   * Busca una pelicula por su duracion
   * @param segundosDuracion - Duracion en segundos de la pelicula
   * @returns Lista de peliculas con esa duracion
   */
  busquedaPorDuracion(segundosDuracion: number): infoElemento<Pelicula>[] {
    return this.listaElementos.filter(elemento => {
      return segundosDuracion === elemento[0].duracion
    })
  }

  /**
   * Busca una pelicula por su nombre
   * @param nombre - Nombre de la pelicula
   * @returns Lista de peliculas con ese nombre
   */
  busquedaPorNombre(nombre: string): infoElemento<Pelicula>[] {
    return this.listaElementos.filter(elemento => {
      return nombre === elemento[0].nombre
    })
  }

  /**
   * Imprime informacion de las peliculas almacenadas
   * @returns void
   */
  imprimirInfoElementos(): void {
    if (this.listaElementos.length === 0) {
      console.log('Actualmente no hay ninguna pelicula')
      return
    }
    console.log('Lista de peliculas:')
    console.log('--------------------')
    this.listaElementos.forEach(pelicula => {
      console.log(`Nombre de película: ${pelicula[0].nombre}`)
      console.log(`Puntuacion de la peliucla: ${pelicula[0].puntuacion}`)
      console.log(`Año de publicacion de la pelicula: ${pelicula[0].añoPublicacion}`)
      console.log(`Duracion de la pelicula: ${pelicula[0].duracion}`)
      console.log('--------------------')
    })
  }
}