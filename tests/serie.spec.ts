import { test, expect, describe, vi } from 'vitest';
import { Serie } from '../src/Serie';
import { SerieCollection } from '../src/Serie';

describe('Test de la clase SerieCollection', () => {
  const serie1 = new Serie(
    10, // numeroCapitulos
    ['Capítulo 1', 'Capítulo 2'], // titulosCapitulos
    'Breaking Bad', // nombre
    2008, // añoPublicacion
    45, // duracionCapitulos
    [9, 8, 10] // puntuacionesCapitulos
  );

  const serie2 = new Serie(
    5, // numeroCapitulos
    ['Capítulo 1', 'Capítulo 2'], // titulosCapitulos
    'Stranger Things', // nombre
    2016, // añoPublicacion
    50, // duracionCapitulos
    [8, 9, 7] // puntuacionesCapitulos
  );

  const serieCollection = new SerieCollection(
    [[serie1, '1111'], [serie2, '2222']], // listaElementos
    8.5, // puntuacionPromedio
    1000, // numeroVisualizaciones
    2 // numeroElementos
  );

  test('Test del constructor', () => {
    expect(serieCollection).toBeInstanceOf(SerieCollection);
    expect(serieCollection.listaElementos.length).toBe(2);
    expect(serieCollection.puntuacionPromedio).toBe(8.5);
    expect(serieCollection.numeroVisualizaciones).toBe(1000);
    expect(serieCollection.numeroElementos).toBe(2);
  });

  test('Test de búsqueda por año', () => {
    const resultado2008 = serieCollection.busquedaPorAño(2008);
    expect(resultado2008.length).toBe(1);
    expect(resultado2008[0][0].nombre).toBe('Breaking Bad');

    const resultado2016 = serieCollection.busquedaPorAño(2016);
    expect(resultado2016.length).toBe(1);
    expect(resultado2016[0][0].nombre).toBe('Stranger Things');

    const resultado2020 = serieCollection.busquedaPorAño(2020);
    expect(resultado2020.length).toBe(0);
  });

  test('Test de búsqueda por nombre', () => {
    const resultadoBreakingBad = serieCollection.busquedaPorNombre('Breaking Bad');
    expect(resultadoBreakingBad.length).toBe(1);
    expect(resultadoBreakingBad[0][0].nombre).toBe('Breaking Bad');

    const resultadoStrangerThings = serieCollection.busquedaPorNombre('Stranger Things');
    expect(resultadoStrangerThings.length).toBe(1);
    expect(resultadoStrangerThings[0][0].nombre).toBe('Stranger Things');

    const resultadoInexistente = serieCollection.busquedaPorNombre('The Office');
    expect(resultadoInexistente.length).toBe(0);
  });

  test('Test de búsqueda por duración', () => {
    const resultado45 = serieCollection.busquedaPorDuracion(45);
    expect(resultado45.length).toBe(1);
    expect(resultado45[0][0].nombre).toBe('Breaking Bad');

    const resultado50 = serieCollection.busquedaPorDuracion(50);
    expect(resultado50.length).toBe(1);
    expect(resultado50[0][0].nombre).toBe('Stranger Things');

    const resultado60 = serieCollection.busquedaPorDuracion(60);
    expect(resultado60.length).toBe(0);
  });

  test('Test de añadir serie', () => {
    const nuevaSerie = new Serie(
      8, // numeroCapitulos
      ['Capítulo 1', 'Capítulo 2'], // titulosCapitulos
      'The Office', // nombre
      2005, // añoPublicacion
      22, // duracionCapitulos
      [9, 8, 9] // puntuacionesCapitulos
    );

    serieCollection.añadirElemento([nuevaSerie, '3']);
    expect(serieCollection.listaElementos.length).toBe(3);
    expect(serieCollection.listaElementos[2][0].nombre).toBe('The Office');
  });

  test('Test de retirar serie', () => {
    serieCollection.retirarElemento('1111'); // Retirar Breaking Bad
    expect(serieCollection.listaElementos.length).toBe(2);
    expect(serieCollection.listaElementos[0][0].nombre).toBe('Stranger Things');
  });

  test('Test de imprimir información', () => {
    const spy = vi.spyOn(console, 'log');
    serieCollection.imprimirInfoElementos();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});