import { Serie } from "./Serie"
import { Pelicula } from "./Pelicula"
import { Documental } from "./Documental"

/**
 * Este tipo almacena un objeto de tipo T y su identificador unico
 */
export type infoElemento<T> = [T, string]



/**
 * Contiene el esquema basico para representar una plataforma de streaming
 */
export interface Streamable<T> {
  listaElementos: infoElemento<T>[]
  puntuacionPromedio: number
  numeroVisualizaciones: number
  numeroElementos: number
  busquedaPorAño(numero: number): infoElemento<T>[]
  busquedaPorNombre(nombre: string): infoElemento<T>[]
  busquedaPorDuracion(segundosDuracion: number): infoElemento<T>[]
  retirarElemento(identificador: string): void
  añadirElemento(elemento: infoElemento<T>): void
  imprimirInfoElementos(): void
}

export abstract class BasicStreamableCollection<T extends Serie | Pelicula | Documental> implements Streamable<T> {
  private _listaElementos: infoElemento<T>[]
  private _puntuacionPromedio: number
  private _numeroVisualizaciones: number
  private _numeroElementos: number
  /**
   * 
   * @param listaElementos - Conjunto de peliculas
   * @param puntuacionPromedio - La puntuacon media de los peliculas
   * @param numeroVisualizaciones - Numero de visualizaciones total entre todos los peliculas
   * @param numeroElementos - Numero de peliculas
   */
  constructor(listaElementos: infoElemento<T>[], puntuacionPromedio: number, numeroVisualizaciones: number, numeroElementos: number) {
    this._listaElementos = listaElementos
    this._puntuacionPromedio = puntuacionPromedio
    this._numeroVisualizaciones = numeroVisualizaciones
    this._numeroElementos = numeroElementos
  }
  /**
   * Getter que devuelve la coleccion de elementos
   */
  get listaElementos(): infoElemento<T>[] {
    return this._listaElementos
  }
  /**
   * Getter que devuelve la puntuacion promedio
   */
  get puntuacionPromedio(): number {
    return this._puntuacionPromedio
  }
  /**
   * Getter que duelve el numero de visualizaciones
   */
  get numeroVisualizaciones(): number {
    return this._numeroVisualizaciones
  }
  /**
   * Getter que devuelve el numero de elementos
   */
  get numeroElementos(): number {
    return this._numeroElementos
  }

  /**
   * Elimina o retira un elemento de la coleccion
   * @param identificador - Identificador unico del elemento
   */
  retirarElemento(identificador: string): void {
    this._listaElementos = this._listaElementos.filter(elemento => {
      return elemento[1] != identificador
    })
  }

  /**
   * Añade un elemento a la coleccion
   * @param elemento Tupla que contiene el elemento y su identificador unico
   */
  añadirElemento(elemento: infoElemento<T>): void {
    this._listaElementos.push(elemento)
  }

  /**
   * Busca un documental por su año de publicacion
   * @param numero Año de publicacion
   * @returns Una lista de docuemtnales que salieron ese año
   */
  abstract busquedaPorAño(numero: number): infoElemento<T>[]

  /**
   * Busca un documental por su duracion
   * @param segundosDuracion - Duracion en segundos del documental
   * @returns Lista de documentales con esa duracion
   */
  abstract busquedaPorDuracion(segundosDuracion: number): infoElemento<T>[]

  /**
   * Busca un documental por su nombre
   * @param nombre - Nombre del documental
   * @returns Lista de documentales con ese nombre
   */
  abstract busquedaPorNombre(nombre: string): infoElemento<T>[]

  /**
   * Imprime informacion de los docuemtnales almacenados
   * @returns void
   */
  abstract imprimirInfoElementos(): void
}

