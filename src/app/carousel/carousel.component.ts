import { Component,OnInit } from '@angular/core';
import { Hero } from '../heroe';
import { ListHeroesService } from '../list-heroes.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero : Hero |undefined;
  isModalOpen: boolean = false;
  showModal: boolean = false;

  constructor(private listHeroes: ListHeroesService) { }

  ngOnInit(): void {
    //  cargar la lista de héroes cuando el componente se inicializa
    this.loadHeroes();
  }

  loadHeroes() {
    // Utiliza el servicio para cargar la lista de héroes
    this.heroes = this.listHeroes.getDataList();
  }

  openModal(hero: Hero) {
    this.selectedHero = hero;
    this.isModalOpen = true;
  }
  closeModal() {
    this.showModal = false;
  }
}

