import { BasicStreamableCollection, infoElemento } from './Streamable';

/**
 * Representa una serie 
 */
export class Serie {
  constructor (
    public readonly numeroCapitulos: number,
    public readonly titulosCapitulos: string[],
    public readonly nombre: string,
    public readonly añoPublicacion: number,
    public readonly duracionCapitulos: number,
    public readonly puntuacionesCapitulos: number[]
  ) {}

}

/**
 * Representa una coleccion de series
 */
export class SerieCollection extends BasicStreamableCollection<Serie> {
  /**
   * 
   * @param listaElementos - Conjunto de series
   * @param puntuacionPromedio - La puntuacon media de los series
   * @param numeroVisualizaciones - Numero de visualizaciones total entre todos los series
   * @param numeroElementos - Numero de series
   */
  constructor(listaElementos: infoElemento<Serie>[], puntuacionPromedio: number, numeroVisualizaciones: number, numeroElementos: number) {
      super(listaElementos, puntuacionPromedio, numeroVisualizaciones, numeroElementos)
  }

  /**
   * Busca una serie por su año de publicacion
   * @param numero Año de publicacion
   * @returns Una lista de docuemtnales que salieron ese año
   */
  busquedaPorAño(numero: number): infoElemento<Serie>[] {
    return this.listaElementos.filter(elemento => {
      return numero === elemento[0].añoPublicacion
    })
  }

  /**
   * Busca una serie por su duracion
   * @param segundosDuracion - Duracion en segundos de la serie
   * @returns Lista de series con esa duracion
   */
  busquedaPorDuracion(segundosDuracion: number): infoElemento<Serie>[] {
    return this.listaElementos.filter(elemento => {
      return segundosDuracion === elemento[0].duracionCapitulos
    })
  }

  /**
   * Busca una serie por su nombre
   * @param nombre - Nombre de la serie
   * @returns Lista de series con ese nombre
   */
  busquedaPorNombre(nombre: string): infoElemento<Serie>[] {
    return this.listaElementos.filter(elemento => {
      return nombre === elemento[0].nombre
    })
  }

  /**
   * Imprime informacion de las series almacenadas
   * @returns void
   */
  imprimirInfoElementos(): void {
    if (this.listaElementos.length === 0) {
      console.log('Actualmente no hay ninguna serie')
      return
    }
    console.log('Lista de series:')
    console.log('--------------------')
    this.listaElementos.forEach(serie => {
      console.log(`Nombre de serie: ${serie[0].nombre}`)
      console.log(`Numero de capitulos: ${serie[0].numeroCapitulos}`)
      console.log(`Listado de capitulos: ${serie[0].titulosCapitulos}`)
      console.log(`Duracion de la serie: ${serie[0].duracionCapitulos}`)
      console.log(`Año de publicación: ${serie[0].añoPublicacion}`)
      console.log('--------------------')
    })
  }
}