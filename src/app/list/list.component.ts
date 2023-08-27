import { Component, OnInit } from '@angular/core';
import { ListHeroesService } from '../list-heroes.service';
import { Hero } from 'src/app/heroe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  list: Hero[]   = [];
  numb:number = 0;

  constructor(private listHeroes: ListHeroesService) { }

  openModel(){
    const modelDiv = document.getElementById('staticBackdrop');
    if(modelDiv !== null){
      modelDiv.style.display = 'block';
    }
  }

  closeModel(){
    const modelDiv = document.getElementById('staticBackdrop');
    if(modelDiv !== null){
      modelDiv.style.display = 'none';
    }
  }

  ngOnInit(): void {
    //  cargar la lista de héroes cuando el componente se inicializa
    this.loadHeroes();
  }

  loadHeroes() {
    // Utiliza el servicio para cargar la lista de héroes
    this.list = this.listHeroes.getDataList();
  }

  postIndex(num:number):number{
    return this.numb=num;
  }

  getIndex():number{
   return this.numb
  }

  isScrolled = false;

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollPosition = target.scrollTop;

    this.isScrolled = scrollPosition > 100;
  }

}
