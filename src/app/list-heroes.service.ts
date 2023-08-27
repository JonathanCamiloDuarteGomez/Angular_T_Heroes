import { Injectable } from '@angular/core';
import { Hero } from './heroe';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ListHeroesService {

  constructor() { }
  private heroes: Hero[] = [
    {
      name:"Iron Man",
      porcent_hab1:15,
      porcent_hab2:30,
      porcent_hab3:45,
      image:'assets/iron-man.jpg',
      imagen_fondo:'assets/iron-log.jpg',
      descripcion: "Stark es un fabricante, genio inventor, héroe y explayboy propietario de Industrias Stark. Al comienzo de la serie, es el principal fabricante de armas para el ejército de los Estados Unidos, hasta que cambia de parecer y redirige su conocimiento técnico hacia la creación de armaduras metalizadas que usa para defenderse de aquellos que amenazan la paz alrededor del mundo."
    },
    {
      name:"Spider Man",
      porcent_hab1:15,
      porcent_hab2:45,
      porcent_hab3:75,
      image:'assets/spider-man-g5fe18f24a_640.png',
      imagen_fondo:'assets/spider-log.jpg',
      descripcion:"Entre sus habilidades destacan la fuerza, el combate y la inteligencia, además de ser capaz de producir y lanzar telarañas sintéticas con ayuda de unos lanzadores que van sujetos a sus muñecas; trepar, adherirse y desplazarse a través de muros y edificaciones; y percibir peligros y amenazas a su alrededor de forma precognitiva gracias a su «sentido arácnido». Algunas de sus colaboraciones con otros superhéroes incluyen a Antorcha Humana, Iron Man, Capitán América y Los Vengadores, mientras que algunos de sus rivales más recurrentes son el Duende Verde, Doctor Octopus y Venom, así como grupos delictivos como los Seis Siniestros y los Herederos."
    },
    {
      name:"Batman",
      porcent_hab1:85,
      porcent_hab2:20,
      porcent_hab3:100,
      image:'assets/bat.jpg',
      imagen_fondo:'assets/bat-log.png',
      descripcion:"La identidad secreta de Batman es Bruce Wayne (Bruno Díaz en algunos países de habla hispana),16​17​18​ un multimillonario magnate empresarial y filántropo dueño de Empresas Wayne en Gotham City. Después de presenciar el asesinato de sus padres, el Dr. Thomas Wayne y Martha Wayne en un violento y fallido asalto cuando era niño, juró venganza contra los criminales, un juramento moderado por el sentido de la justicia. Bruce Wayne se entrena física e intelectualmente y crea un traje inspirado en los murciélagos para combatir el crimen, con sus gadgets de combate del batcinturón y sus vehículos.19"
    },

    {
      name:"Superman",
      porcent_hab1:45,
      porcent_hab2:50,
      porcent_hab3:45,
      image:'assets/superman.jpg',
      imagen_fondo:'assets/super-log.jpg',
      descripcion: "Stark es un fabricante, genio inventor, héroe y explayboy propietario de Industrias Stark. Al comienzo de la serie, es el principal fabricante de armas para el ejército de los Estados Unidos, hasta que cambia de parecer y redirige su conocimiento técnico hacia la creación de armaduras metalizadas que usa para defenderse de aquellos que amenazan la paz alrededor del mundo."
    },
    {
      name:"Mr. Increíble",
      porcent_hab1:65,
      porcent_hab2:95,
      porcent_hab3:85,
      image:'assets/incre.jpg',
      imagen_fondo:'assets/log-incre.png',
      descripcion:"Registrado al nacer como Robert Parr, Bob anteriormente trabajó como un superhéroe bajo el alias de Mr. Increíble, pero tras ser demandado por salvar a alguien que aparentemente no quería ser salvado, Oliverio Sanito, y por las víctimas del accidente de un tren de alta velocidad, el gobierno discretamente inició el programa de reubicación de superhéroes, donde ellos recibirían amnistía por su responsabilidad en acciones pasadas a cambio de la promesa de nunca volver a sus actividades heroicas y siendo ciudadados comunes. Debido a esto, y al estar trabajando en una oficina, Bob estuvo quince años aburrido ya que no tenía nada de acción. Mientras trabajaba en la empresa, su jefe, Gilbert Huph (Sr. Rabia en Hispanoamérica) le decía que sus clientes lo ponían infeliz, y tras ello, lleno de furia, Bob lanzó a Huph provocando que no sólo termine hospitalizado, sino que también Bob sea despedido."
    },
    {
      name:"Hancock",
      porcent_hab1:65,
      porcent_hab2:77,
      porcent_hab3:25,
      image:'assets/Hancock.jpg',
      imagen_fondo:'assets/log-hancock.png',
      descripcion:" John Hancock es un personaje con poderes sobrehumanos, incluyendo el vuelo supersónico, invulnerabilidad, la inmortalidad y superfuerza. A pesar de que utiliza sus poderes para rescatar a la gente de delincuentes, su actividad inadvertidamente causa millones de dólares en daños a la propiedad debido a su embriaguez constante y actitud cínica."


    }

  ]

  setDataList(data: Hero[]) {
    this.heroes = data;
  }

  getDataList() {
    return this.heroes;
  }

  cambiarEstaditicasHeroe(nameI: string, porcentajeB1: number): boolean {
    const heroToUpdate = this.heroes.find(hero => hero.name === nameI);

    if (heroToUpdate) {
      if (porcentajeB1 >= 0 && porcentajeB1 <= 100) {
        heroToUpdate.porcent_hab1 = porcentajeB1;
        return true;
      } else {
        return false; // Porcentaje no válido
      }
    } else {
      return false; // Héroe no encontrado
    }
  }

}
