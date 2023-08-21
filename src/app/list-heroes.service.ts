import { Injectable } from '@angular/core';
import { Hero } from './heroe';

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
      image:'assets/iron-man.jpg'
    },
    {
      name:"Spider Man",
      porcent_hab1:15,
      porcent_hab2:45,
      porcent_hab3:75,
      image:'assets/spider-man-g5fe18f24a_640.png'
    },
    {
      name:"Batman",
      porcent_hab1:85,
      porcent_hab2:20,
      porcent_hab3:100,
      image:'assets/bat.jpg'
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
