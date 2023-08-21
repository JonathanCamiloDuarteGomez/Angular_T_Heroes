import { Component, OnInit } from '@angular/core';
import { ListHeroesService } from 'src/app/list-heroes.service';
import { Hero } from 'src/app/heroe';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class tablaComponent implements OnInit {
  // Arreglo de héroes obtenidos del servicio
  heroes: Hero[] = [];

  // Arreglos de banderas para controlar los botones de aumento y resta
  plusClicked: boolean[] = [false, false, false];
  subtractionClicked: boolean[] = [false, false, false];

  constructor(private listHeroes: ListHeroesService) {}

  ngOnInit(): void {
    // Cargar la lista de héroes cuando el componente se inicializa
    this.loadHeroes();
  }

  // Cargar la lista de héroes utilizando el servicio
  loadHeroes() {
    this.heroes = this.listHeroes.getDataList();
  }

  // Método para cambiar las estadísticas del héroe
  cambiarEstaditicasHeroe(nameI: string, index: number) {
    const heroToUpdate = this.heroes.find(hero => hero.name === nameI);
    // Llamar a los métodos de incremento y resta
    this.incrementarCinco(heroToUpdate, index);
    this.restaCinco(heroToUpdate, index);
  }

  // Método para gestionar el clic en los botones de aumento y resta
  cambiarClicked(index: number, type: string, value: boolean, nameI: string) {
    if (type === 'plus') {
      this.plusClicked[index] = value;
      this.subtractionClicked[index] = false; // Desactivar la otra bandera
      this.cambiarEstaditicasHeroe(nameI, index);
    } else if (type === 'subtraction') {
      this.subtractionClicked[index] = value;
      this.plusClicked[index] = false; // Desactivar la otra bandera
      this.cambiarEstaditicasHeroe(nameI, index);
    }
  }

  // Método para calcular el nuevo valor de las estadísticas
  updateValue(value: number, increment: boolean): number {
    if (increment && value < 100) {
      return Math.min(value + 5, 100);
    } else if (!increment && value > 0) {
      return Math.max(value - 5, 0);
    }
    return value;
  }

  // Método para incrementar las estadísticas del héroe
  incrementarCinco(heroToUpdate: Hero | undefined, index: number) {
    if (heroToUpdate && this.plusClicked[index]) {
      if (index === 0) {
        heroToUpdate.porcent_hab1 = this.updateValue(heroToUpdate.porcent_hab1, true);
      } else if (index === 1) {
        heroToUpdate.porcent_hab2 = this.updateValue(heroToUpdate.porcent_hab2, true);
      } else if (index === 2) {
        heroToUpdate.porcent_hab3 = this.updateValue(heroToUpdate.porcent_hab3, true);
      }
    }
  }

  // Método para restar las estadísticas del héroe
  restaCinco(heroToUpdate: Hero | undefined, index: number) {
    if (heroToUpdate && this.subtractionClicked[index]) {
      if (index === 0) {
        heroToUpdate.porcent_hab1 = this.updateValue(heroToUpdate.porcent_hab1, false);
      } else if (index === 1) {
        heroToUpdate.porcent_hab2 = this.updateValue(heroToUpdate.porcent_hab2, false);
      } else if (index === 2) {
        heroToUpdate.porcent_hab3 = this.updateValue(heroToUpdate.porcent_hab3, false);
      }
    }
  }
}
