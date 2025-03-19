import { BasicStreamableCollection, infoElemento } from './Streamable.js';

/**
 * Representa un Documental
 */
export class Documental {
  /**
   * Constructor de la clase
   * @param generoDocumental - Genero del coducmental
   * @param premiosGanados - Premios que ha ganado el documental
   * @param nombre - Nombre del documental
   * @param añoPublicacion - Año de publicacion del documental
   * @param paraMayoresDeEdad - Si tiene contenido +18 o no
   * @param patrocinadores - Conjunto de patrocinadores
   * @param duracionDocumental - Duracion del documental
   */
  constructor (
    public readonly generoDocumental: string,
    public readonly premiosGanados: string[],
    public readonly nombre: string,
    public readonly añoPublicacion: number,
    public readonly paraMayoresDeEdad: boolean,
    public readonly patrocinadores: string[],
    public readonly duracionDocumental: number
  ) {}
}

/**
 * Esta clase representa una coleccion de documentales
 */
export class DocumentalCollection extends BasicStreamableCollection<Documental> {
  /**
   * 
   * @param listaElementos - Conjunto de documentales
   * @param puntuacionPromedio - La puntuacon media de los documentales
   * @param numeroVisualizaciones - Numero de visualizaciones total entre todos los documentales
   * @param numeroElementos - Numero de docuemtnales
   */
  constructor(listaElementos: infoElemento<Documental>[], puntuacionPromedio: number, numeroVisualizaciones: number, numeroElementos: number) {
      super(listaElementos, puntuacionPromedio, numeroVisualizaciones, numeroElementos)
  }

  /**
   * Busca un documental por su año de publicacion
   * @param numero Año de publicacion
   * @returns Una lista de docuemtnales que salieron ese año
   */
  busquedaPorAño(numero: number): infoElemento<Documental>[] {
    if (this.listaElementos.length === 0) {
      return []
    }
    return this.listaElementos.filter(elemento => {
      return numero === elemento[0].añoPublicacion
    })
  }

  /**
   * Busca un documental por su duracion
   * @param segundosDuracion - Duracion en segundos del documental
   * @returns Lista de documentales con esa duracion
   */
  busquedaPorDuracion(segundosDuracion: number): infoElemento<Documental>[] {
    if (this.listaElementos.length === 0) {return []}
    return this.listaElementos.filter(elemento => {
      return segundosDuracion === elemento[0].duracionDocumental
    })
  }

  /**
   * Busca un documental por su nombre
   * @param nombre - Nombre del documental
   * @returns Lista de documentales con ese nombre
   */
  busquedaPorNombre(nombre: string): infoElemento<Documental>[] {
    if (this.listaElementos.length === 0) {
      return []
    }
    return this.listaElementos.filter(elemento => {
      return nombre === elemento[0].nombre
    })
  }

  /**
   * Imprime informacion de los docuemtnales almacenados
   * @returns void
   */
  imprimirInfoElementos(): void {
    if (this.listaElementos.length === 0) {
      console.log('Actualmente no hay ningun Documental')
      return
    }
    console.log('Lista de Documentales:')
    console.log('--------------------')
    this.listaElementos.forEach(Documental => {
      console.log(`Nombre de Documental: ${Documental[0].nombre}`)
      console.log(`Genero del Documental: ${Documental[0].generoDocumental}`)
      console.log(`Premios que ha recibido este documental: ${Documental[0].premiosGanados}`)
      console.log(`Duracion de la Documental: ${Documental[0].duracionDocumental}`)
      console.log(`Año de publicación: ${Documental[0].añoPublicacion}`)
      console.log(`Premios ganados: `)
      Documental[0].premiosGanados.length === 0 ? console.log('-') : console.log(Documental[0].premiosGanados)
      console.log('--------------------')
    })
  }
}