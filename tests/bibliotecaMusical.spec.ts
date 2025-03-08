import {test, expect, describe, vi} from 'vitest'
import {BibliotecaMusical} from '../src/bibliotecaMusical'
import { Artista } from '../src/artista'
import { Disco } from '../src/discografia'
import { Cancion } from '../src/cancion'


describe('Test de la clase artista', () => {
  let artista: Artista = new Artista("Bad bunny", 1, [new Disco("x100pre", 2013, [new Cancion("Safaera", 240, ["trap"], true, 10000)])])
  expect(() => {new Artista("Bad bunny", 1, [new Disco("x100pre", -1, [new Cancion("Safaera", 240, ["trap"], true, 10000)])])}).toThrowError('El año de publicación no puede ser negativo')
  test('Test del constructor', () => {
    expect(artista).toBeInstanceOf(Artista)
    expect(artista.nombre).toBe("Bad bunny")
    expect(artista.numeroOyentes).toBe(1)
    expect(artista.discografia.length).toBe(1)
  })
})

describe('Test de la clase disco', () => {
  let disco: Disco = new Disco("x100pre", 2013, [new Cancion("Safaera", 240, ["trap"], true, 10000)])
  test('Test del constructor', () => {
    expect(disco).toBeInstanceOf(Disco)
    expect(disco.nombre).toBe("x100pre")
    expect(disco.añoPublicacion).toBe(2013)
    expect(disco.canciones.length).toBe(1)
    expect( ()=> {new Disco("x100pre", -2013, [new Cancion("Safaera", 240, ["trap"], true, 10000)])}).toThrowError('El año de publicación no puede ser negativo')
  })
})

describe('Test de la clase cancion', () => {
  let cancion: Cancion = new Cancion("Safaera", 240, ['trap'], true, 10000)
  test('Test del constructor', () => {
    expect(cancion).toBeInstanceOf(Cancion)
    expect(cancion.nombre).toEqual('Safaera')
    expect(cancion.duracion).toEqual(240)
    expect(cancion.generos).toEqual(['trap'])
    expect(cancion.isASingle).toEqual(true)
    expect(cancion.reporducciones).toEqual(10000)
    expect(() => {new Cancion("Safaera", -240, ['trap'], true, 10000)}).toThrowError('La duración de la canción no puede ser negativa')
  })
})

describe('Test de la clase bibliotecaMusical', () => {
  let badBunny: Artista = new Artista("Bad bunny", 1, [new Disco("x100pre", 2013, [new Cancion("Safaera", 240, ["trap"], true, 10000)])])
  let biblioteca: BibliotecaMusical = new BibliotecaMusical([badBunny])
  test('Test del constructor', () => {
    expect(biblioteca).toBeInstanceOf(BibliotecaMusical)
  })
  test('Test calcular reproducciones de disco', () => {
    let x100pre: Disco = new Disco("x100pre", 2013, [new Cancion("Safaera", 240, ["trap"], true, 10000)])
    let oasis: Disco = new Disco("Oasis", 2019, [new Cancion("I don't care", 240, ["pop"], true, 10000)])
    expect(biblioteca.calcularReproducionesDisco(oasis)).toEqual(10000)
    expect(biblioteca.calcularReproducionesDisco(x100pre)).toEqual(10000)
  })
  let x100pre: Disco = new Disco("x100pre", 2013, [new Cancion("Safaera", 240, ["trap"], true, 10000), new Cancion("La noche de anoche", 240, ["trap"], true, 10000)])
  let oasis: Disco = new Disco("Oasis", 2019, [new Cancion("I don't care", 240, ["pop"], true, 10000)])
  test('test calcular duracion de disco', () => {
    expect(biblioteca.calcularDuracionDisco(oasis)).toEqual(240)
    expect(biblioteca.calcularDuracionDisco(x100pre)).toEqual(480)
  })
  test('Test calcular canciones en disco', () => {
    expect(biblioteca.calcularCancionesEnDisco(oasis)).toEqual(1)
    expect(biblioteca.calcularCancionesEnDisco(x100pre)).toEqual(2)
  })
  test('Test busqueda artista', () => {
    expect(biblioteca.busquedaArtista('Bad bunny')).toEqual(badBunny)
    expect(biblioteca.busquedaArtista('J Balvin')).toEqual(undefined)
  })
  test('Test añadir artista', () => {
    let jBalvin: Artista = new Artista("J Balvin", 1, [new Disco("Colores", 2020, [new Cancion("Rojo", 240, ["reggaeton"], true, 10000)])])
    biblioteca.añadirArtista(jBalvin)
    expect(biblioteca.busquedaArtista('J Balvin')).toEqual(jBalvin)
    expect(biblioteca.mostrarBiblioteca()).toEqual(2)
    biblioteca.añadirArtista(jBalvin)
    expect(biblioteca.mostrarBiblioteca()).toEqual(2)
    const spy = vi.spyOn(console, 'log')
    biblioteca.mostrarBiblioteca()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore
  })
  test('Test busqueda disco', () => {
    let colores: Disco = new Disco("Colores", 2020, [new Cancion("Rojo", 240, ["reggaeton"], true, 10000)])
    x100pre = new Disco("x100pre", 2013, [new Cancion("Safaera", 240, ["trap"], true, 10000)])
    expect(biblioteca.busquedaDisco('Oasis')).toEqual(undefined)
    expect(biblioteca.busquedaDisco('Colores')).toEqual(colores)
    expect(biblioteca.busquedaDisco('x100pre')).toEqual(x100pre)
  })
  test('Test busueda cancion', () => {
    let safaera: Cancion = new Cancion("Safaera", 240, ["trap"], true, 10000)
    let rojo: Cancion = new Cancion("Rojo", 240, ["reggaeton"], true, 10000)
    expect(biblioteca.busquedaCancion('Safaera')).toEqual(safaera)
    expect(biblioteca.busquedaCancion('Rojo')).toEqual(rojo)
    expect(biblioteca.busquedaCancion('I don\'t care')).toEqual(undefined)
  })
})