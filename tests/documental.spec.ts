import { test, expect, describe, vi } from 'vitest';
import { Documental } from '../src/Documental';
import { DocumentalCollection } from '../src/Documental';

describe('Test de la clase DocumentalCollection', () => {
  const documental1 = new Documental(
    'Ciencia', // generoDocumental
    ['Premio 1', 'Premio 2'], // premiosGanados
    'Cosmos', // nombre
    1980, // añoPublicacion
    false, // paraMayoresDeEdad
    ['Patrocinador 1', 'Patrocinador 2'], // patrocinadores
    120 // duracionDocumental
  );

  const documental2 = new Documental(
    'Historia', // generoDocumental
    ['Premio 3'], // premiosGanados
    'Civilizaciones', // nombre
    2018, // añoPublicacion
    true, // paraMayoresDeEdad
    ['Patrocinador 3'], // patrocinadores
    90 // duracionDocumental
  );

  const documentalCollection = new DocumentalCollection(
    [[documental1, '1111'], [documental2, '2222']], // listaElementos
    8.5, // puntuacionPromedio
    1000, // numeroVisualizaciones
    2 // numeroElementos
  );

  test('Test del constructor', () => {
    expect(documentalCollection).toBeInstanceOf(DocumentalCollection);
    expect(documentalCollection.listaElementos.length).toBe(2);
    expect(documentalCollection.puntuacionPromedio).toBe(8.5);
    expect(documentalCollection.numeroVisualizaciones).toBe(1000);
    expect(documentalCollection.numeroElementos).toBe(2);
  });

  test('Test de búsqueda por año', () => {
    const resultado1980 = documentalCollection.busquedaPorAño(1980);
    expect(resultado1980.length).toBe(1);
    expect(resultado1980[0][0].nombre).toBe('Cosmos');

    const resultado2018 = documentalCollection.busquedaPorAño(2018);
    expect(resultado2018.length).toBe(1);
    expect(resultado2018[0][0].nombre).toBe('Civilizaciones');

    const resultado2020 = documentalCollection.busquedaPorAño(2020);
    expect(resultado2020.length).toBe(0);
  });

  test('Test de búsqueda por nombre', () => {
    const resultadoCosmos = documentalCollection.busquedaPorNombre('Cosmos');
    expect(resultadoCosmos.length).toBe(1);
    expect(resultadoCosmos[0][0].nombre).toBe('Cosmos');

    const resultadoCivilizaciones = documentalCollection.busquedaPorNombre('Civilizaciones');
    expect(resultadoCivilizaciones.length).toBe(1);
    expect(resultadoCivilizaciones[0][0].nombre).toBe('Civilizaciones');

    const resultadoInexistente = documentalCollection.busquedaPorNombre('Planeta Tierra');
    expect(resultadoInexistente.length).toBe(0);
  });

  test('Test de búsqueda por duración', () => {
    const resultado120 = documentalCollection.busquedaPorDuracion(120);
    expect(resultado120.length).toBe(1);
    expect(resultado120[0][0].nombre).toBe('Cosmos');

    const resultado90 = documentalCollection.busquedaPorDuracion(90);
    expect(resultado90.length).toBe(1);
    expect(resultado90[0][0].nombre).toBe('Civilizaciones');

    const resultado200 = documentalCollection.busquedaPorDuracion(200);
    expect(resultado200.length).toBe(0);
  });

  test('Test de añadir documental', () => {
    const nuevoDocumental = new Documental(
      'Naturaleza', // generoDocumental
      ['Premio 4'], // premiosGanados
      'Planeta Tierra', // nombre
      2006, // añoPublicacion
      false, // paraMayoresDeEdad
      ['Patrocinador 4'], // patrocinadores
      100 // duracionDocumental
    );

    documentalCollection.añadirElemento([nuevoDocumental, '3333']);
    expect(documentalCollection.listaElementos.length).toBe(3);
    expect(documentalCollection.listaElementos[2][0].nombre).toBe('Planeta Tierra');
  });

  test('Test de retirar documental', () => {
    documentalCollection.retirarElemento('1111'); // Retirar Cosmos
    expect(documentalCollection.listaElementos.length).toBe(2);
    expect(documentalCollection.listaElementos[0][0].nombre).toBe('Civilizaciones');
  });

  test('Test de imprimir información', () => {
    const spy = vi.spyOn(console, 'log');
    documentalCollection.imprimirInfoElementos();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});