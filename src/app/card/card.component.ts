import { Component, OnInit } from '@angular/core';
import { ListHeroesService } from '../list-heroes.service';
import { Hero } from '../heroe';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  heroes: Hero[]   = [];

  constructor(private listHeroes: ListHeroesService) { }

  ngOnInit(): void {
    //  cargar la lista de héroes cuando el componente se inicializa
    this.loadHeroes();
  }

  loadHeroes() {
    // Utiliza el servicio para cargar la lista de héroes
    this.heroes = this.listHeroes.getDataList();

  }
  isScrolled = false;
  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollPosition = target.scrollTop;

    this.isScrolled = scrollPosition > 100;
  }
}

