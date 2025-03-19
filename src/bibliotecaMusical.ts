import { Artista } from "./artista.js";
import { Disco, DiscofrafiaDiscos, Single , DiscografiaMixta, DiscografiaSingles} from "./discografia.js";
import { Cancion } from "./cancion.js";

/**
 * Interfaz para representar una biblioteca musical
 */
export interface bibliotecaMusical {
  mostrarBiblioteca(): void,
  calcularReproducionesDisco(nombreDisco: Disco | Single): number,
  calcularDuracionDisco(nombreDisco: Disco | Single): number,
  calcularCancionesEnDisco(nombreDisco: Disco | Single): number,
  busquedaArtista(nombreArtista: string): Artista | undefined,
  busquedaDisco(nombreDisco: string): Disco | Single | undefined,
  busquedaCancion(nombreCancion: string): Cancion | undefined,
  añadirArtista(artisa: Artista): void
}

/**
 * Clase para representar una biblioteca musical
 */
export class BibliotecaMusical implements bibliotecaMusical {
  /**
   * 
   * @param biblioteca Biblioteca musical
   */
  constructor(
    private biblioteca: Artista[]
  ) {}

  /**
   * Muestra la biblioteca musical y devuelve el número de artistas en ella
   */
  mostrarBiblioteca(): number {
    if (this.biblioteca.length === 0) {
      console.log('La biblioteca musical está vacía')
    }
    else {
      let discos: string = ''
      let canciones: string = ''
      this.biblioteca.forEach(artista => {
        let discografia: string = ''
        if (artista.discografia instanceof DiscofrafiaDiscos) {
          artista.discografia.discos.forEach(disco => {
            discografia += disco.nombre + ', '
            disco.canciones.forEach(cancion => {
              canciones += cancion.nombre + ', '
            })
          })
        }
        else if (artista.discografia instanceof DiscografiaSingles) {
          artista.discografia.discos.forEach(single => {
            discografia += single.nombre + ', '
            canciones += single.nombre + ', '
          })
        }
        else if (artista.discografia instanceof DiscografiaMixta) {
          artista.discografia.discos.forEach(disco => {
            if (disco instanceof Disco) {
              discografia += disco.nombre + ', '
              disco.canciones.forEach(cancion => {
                canciones += cancion.nombre + ', '
              })
            }
            else if (disco instanceof Single) {
              discografia += disco.nombre + ', '
              canciones += disco.nombre + ', '
            }
          })
          artista.discografia.discos.forEach(single => {
            discografia += single.nombre + ', '
            canciones += single.nombre + ', '
          })
        }
        discografia = discografia.slice(0, -2)
        discos += discografia + ', '
      })
      discos = discos.slice(0, -2)
      canciones = canciones.slice(0, -2)
      let datosBiblioteca = {
        numeroArtistas: this.biblioteca.length,
        discos: discos,
        numeroDiscos: this.biblioteca.length,
        canciones: canciones,
        numeroCanciones: this.biblioteca.length
      }
      console.table(datosBiblioteca)
    }
    return this.biblioteca.length
  }

  /**
   * calcula el número de reproducciones de un disco
   * @param disco - Disco del que se quiere calcular el número de reproducciones
   * @returns El número de reproducciones del disco
   */
  calcularReproducionesDisco(disco: Disco): number {
    let reproducciones: number = 0
    disco.canciones.forEach(cancion => {
      reproducciones += cancion.reporducciones
    })
    return reproducciones
  }

  /**
   * Calcula la duración de un disco
   * @param disco - Disco del que se quiere calcular la duración
   * @returns La duración del disco
   */
  calcularDuracionDisco(disco: Disco): number {
    let segundos: number = 0
    disco.canciones.forEach(cancion => 
      segundos += cancion.duracion
    )
    return segundos
  }
  /**
   * Calcula el número de canciones en un disco
   * @param disco - Disco del que se quiere calcular el número de canciones
   * @returns La cantidad de canciones en el disco
   */
  calcularCancionesEnDisco(disco: Disco): number {
    return disco.canciones.length
  }

  /**
   * Busca un artista en la biblioteca
   * @param nombreArtista - Nombre del artista a buscar
   * @returns El artista buscado
   */
  busquedaArtista(nombreArtista: string): Artista | undefined {
    if (this.biblioteca.length === 0) {
      return undefined
    }
    let artistaBuscado: Artista = this.biblioteca[0]
    let encontrado: boolean = false
    this.biblioteca.forEach(artista => {
      if (encontrado) {
        return
      }
      if (artista.nombre === nombreArtista) {
        encontrado = true
        artistaBuscado = artista
        return
      }
    })
    if (artistaBuscado !== undefined) {
      let discos: string = ''
      if (artistaBuscado.discografia instanceof DiscofrafiaDiscos) {
        artistaBuscado.discografia.discos.forEach(disco => {
          discos += disco.nombre + ', '
        })
      }
      else if (artistaBuscado.discografia instanceof DiscografiaSingles) {
        artistaBuscado.discografia.discos.forEach(single => {
          discos += single.nombre + ', '
        })
      }
      else if (artistaBuscado.discografia instanceof DiscografiaMixta) {
        artistaBuscado.discografia.discos.forEach(disco => {
          if (disco instanceof Disco) {
            disco.canciones.forEach(cancion => {
              discos += cancion.nombre + ', '
            })
          }
          else if (disco instanceof Single) {
            discos += disco.nombre + ', '
          }
        })
      }
      discos = discos.slice(0, -2)
      let canciones: string = ''
      if (artistaBuscado.discografia instanceof DiscofrafiaDiscos) {
        artistaBuscado.discografia.discos.forEach(disco => {
          disco.canciones.forEach(cancion => {
            canciones += cancion.nombre + ', '
          })
        })
      }
      else if (artistaBuscado.discografia instanceof DiscografiaSingles) {
        artistaBuscado.discografia.discos.forEach(single => {
          canciones += single.nombre + ', '
        })
      }
      else if (artistaBuscado.discografia instanceof DiscografiaMixta) {
        artistaBuscado.discografia.discos.forEach(disco => {
          if (disco instanceof Disco) {
            disco.canciones.forEach(cancion => {
              canciones += cancion.nombre + ', '
            })
          }
          else if (disco instanceof Single) {
            canciones += disco.nombre + ', '
          }
        })
      }
      canciones = canciones.slice(0, -2)
      let numeroCanciones: number = 0
      if (artistaBuscado.discografia instanceof DiscofrafiaDiscos) {
        artistaBuscado.discografia.discos.forEach(disco => {
          numeroCanciones += disco.canciones.length
        })
      }
      else if (artistaBuscado.discografia instanceof DiscografiaSingles) {
        artistaBuscado.discografia.discos.forEach(single => {
          numeroCanciones += 1
        })
      }
      else if (artistaBuscado.discografia instanceof DiscografiaMixta) {
        artistaBuscado.discografia.discos.forEach(disco => {
          if (disco instanceof Disco) {
            numeroCanciones += disco.canciones.length
          }
          else if (disco instanceof Single) {
            numeroCanciones += 1
          }
        })
      }
      let datosArtista = {
        nombre: artistaBuscado.nombre,
        numeroDiscos: artistaBuscado.discografia.discos.length,
        discos: discos,
        numeroCanciones: numeroCanciones,
        canciones: canciones,
        oyentesMensuales: artistaBuscado.numeroOyentes
      }
      console.table(datosArtista)
    }
    return encontrado ? artistaBuscado : undefined
  }

  /**
   * Busca una canción en la biblioteca
   * @param nombreCancion - Nombre de la canción a buscar
   * @returns La canción buscada
   */
  busquedaCancion(nombreCancion: string): Cancion | undefined {
    let encontrado: boolean = false
    if (this.biblioteca.length === 0) {
      return undefined
    }
    let cancionBuscada = new Cancion("cancion", 0, ["genero"], false, 0)
    this.biblioteca.forEach(artista => {
      if (encontrado) {
        return
      }
      if (artista.discografia instanceof DiscofrafiaDiscos) {
        artista.discografia.discos.forEach(disco => {
          if (encontrado) {
            return
          }
          disco.canciones.forEach(cancion => {
            if (cancion.nombre === nombreCancion) {
              encontrado = true
              cancionBuscada = cancion
              return
            }
          })
        })
      }
      else if (artista.discografia instanceof DiscografiaSingles) {
        artista.discografia.discos.forEach(single => {
          if (single.nombre === nombreCancion) {
            encontrado = true
            return
          }
        })
      }
      else if (artista.discografia instanceof DiscografiaMixta) {
        artista.discografia.discos.forEach(disco => {
          if (disco instanceof Disco) {
            disco.canciones.forEach(cancion => {
              if (cancion.nombre === nombreCancion) {
                encontrado = true
                cancionBuscada = cancion
                return
              }
            })
          }
          else if (disco instanceof Single) {
            if (disco.nombre === nombreCancion) {
              encontrado = true
              return
            }
          }
        })
      }
    })
    if (encontrado) {
      let generos: string = ""
      cancionBuscada.generos.forEach(genero => {
        generos += genero + ", "
      })
      generos = generos.slice(0, -2)
      let datosCancion = {
        nombre: cancionBuscada.nombre,
        duracion_seg: cancionBuscada.duracion,
        generos: generos,
        reproudcciones: cancionBuscada.reporducciones,
        esSingle: cancionBuscada.isASingle
      }
      console.table(datosCancion)
    }
    return encontrado ? cancionBuscada : undefined
  }

  /**
   * Busca un disco en la biblioteca
   * @param nombreDisco - Nombre del disco a buscar
   * @returns El disco buscado
   */
  busquedaDisco(nombreDisco: string): Disco | undefined {
    let encontrado: boolean = false
    if (this.biblioteca.length === 0) {
      return undefined
    }
    let discoBuscado: Disco = new Disco("disco", 0, [])
    this.biblioteca.forEach(artista => {
      if (encontrado) {
        return
      }
      if (artista.discografia instanceof DiscofrafiaDiscos) {
        artista.discografia.discos.forEach(disco => {
          if (disco.nombre === nombreDisco) {
            encontrado = true
            discoBuscado = disco
            return
          }
        })
      }
    })
    if (encontrado) {
      let canciones: string = ""
      discoBuscado.canciones.forEach(cancion => {
        canciones += cancion.nombre + ", "
      })
      canciones = canciones.slice(0, -2)
      let datosDisco = {
        nombre: discoBuscado.nombre,
        año: discoBuscado.añoPublicacion,
        numeroCanciones: discoBuscado.canciones.length,
        duracion_seg: this.calcularDuracionDisco(discoBuscado),
        reproducciones: this.calcularReproducionesDisco(discoBuscado),
        canciones: canciones
      }
      console.table(datosDisco)
    }
    return encontrado ? discoBuscado : undefined
  }

  /**
   * Añade un artista a la biblioteca
   * @param artista - Artista a añadir a la biblioteca
   */
  añadirArtista(artista: Artista): void {
    if (this.biblioteca.find(artista_ => artista.nombre === artista_.nombre) === undefined) {
      this.biblioteca.push(artista)
      console.log('Artista añadido a la biblioteca')
    }
    else {
      console.log('El artista ya estaba en la biblioteca')
    }
  }
}
