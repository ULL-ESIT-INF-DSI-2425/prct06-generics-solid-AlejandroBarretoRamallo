import { test, expect, describe, vi } from 'vitest';
import { Pelicula } from '../src/Pelicula';
import { PeliculaCollection } from '../src/Pelicula';

describe('Test de la clase PeliculaCollection', () => {
  const pelicula1 = new Pelicula(
    'Inception', // nombre
    148, // duracion
    8.8, // puntuacion
    2010 // añoPublicacion
  );

  const pelicula2 = new Pelicula(
    'Interstellar', // nombre
    169, // duracion
    8.6, // puntuacion
    2014 // añoPublicacion
  );

  const peliculaCollection = new PeliculaCollection(
    [[pelicula1, '1111'], [pelicula2, '2222']], // listaElementos
    8.7, // puntuacionPromedio
    1000, // numeroVisualizaciones
    2 // numeroElementos
  );

  test('Test del constructor', () => {
    expect(peliculaCollection).toBeInstanceOf(PeliculaCollection);
    expect(peliculaCollection.listaElementos.length).toBe(2);
    expect(peliculaCollection.puntuacionPromedio).toBe(8.7);
    expect(peliculaCollection.numeroVisualizaciones).toBe(1000);
    expect(peliculaCollection.numeroElementos).toBe(2);
  });

  test('Test de búsqueda por año', () => {
    const resultado2010 = peliculaCollection.busquedaPorAño(2010);
    expect(resultado2010.length).toBe(1);
    expect(resultado2010[0][0].nombre).toBe('Inception');

    const resultado2014 = peliculaCollection.busquedaPorAño(2014);
    expect(resultado2014.length).toBe(1);
    expect(resultado2014[0][0].nombre).toBe('Interstellar');

    const resultado2020 = peliculaCollection.busquedaPorAño(2020);
    expect(resultado2020.length).toBe(0);
  });

  test('Test de búsqueda por nombre', () => {
    const resultadoInception = peliculaCollection.busquedaPorNombre('Inception');
    expect(resultadoInception.length).toBe(1);
    expect(resultadoInception[0][0].nombre).toBe('Inception');

    const resultadoInterstellar = peliculaCollection.busquedaPorNombre('Interstellar');
    expect(resultadoInterstellar.length).toBe(1);
    expect(resultadoInterstellar[0][0].nombre).toBe('Interstellar');

    const resultadoInexistente = peliculaCollection.busquedaPorNombre('The Dark Knight');
    expect(resultadoInexistente.length).toBe(0);
  });

  test('Test de búsqueda por duración', () => {
    const resultado148 = peliculaCollection.busquedaPorDuracion(148);
    expect(resultado148.length).toBe(1);
    expect(resultado148[0][0].nombre).toBe('Inception');

    const resultado169 = peliculaCollection.busquedaPorDuracion(169);
    expect(resultado169.length).toBe(1);
    expect(resultado169[0][0].nombre).toBe('Interstellar');

    const resultado200 = peliculaCollection.busquedaPorDuracion(200);
    expect(resultado200.length).toBe(0);
  });

  test('Test de añadir película', () => {
    const nuevaPelicula = new Pelicula(
      'The Dark Knight', // nombre
      152, // duracion
      9.0, // puntuacion
      2008 // añoPublicacion
    );

    peliculaCollection.añadirElemento([nuevaPelicula, '3333']);
    expect(peliculaCollection.listaElementos.length).toBe(3);
    expect(peliculaCollection.listaElementos[2][0].nombre).toBe('The Dark Knight');
  });

  test('Test de retirar película', () => {
    peliculaCollection.retirarElemento('1111'); // Retirar Inception
    expect(peliculaCollection.listaElementos.length).toBe(2);
    expect(peliculaCollection.listaElementos[0][0].nombre).toBe('Interstellar');
  });

  test('Test de imprimir información', () => {
    const spy = vi.spyOn(console, 'log');
    peliculaCollection.imprimirInfoElementos();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});