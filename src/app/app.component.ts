import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-heroes';
  heroes: Heroes[] = [
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
}
type Heroes ={
  name:string,
  porcent_hab1: number,
  porcent_hab2: number,
  porcent_hab3: number,
  image: string
}
