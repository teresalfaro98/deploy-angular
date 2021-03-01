import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';
declare var App:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private menuSvc: MainTopBarMenuService){ //hice este constructor.

  }

  title = 'app-real-time';

  miEmpresa: string = 'La Salle Bajío';
  periodo: number = 2021;

  menuItems:any[] = [];

  ngOnInit(){
    //Load Sidebar Script
    App.init();
    //Load Data
    this.getData(); //cargar el getData como si lo trajeramos del backend
  }

  //mandar llamar al getItemMenu con un metodo
  getData(){
    this.menuSvc.getItemsMenu().subscribe((data:any) =>{
      this.menuItems = data;
    });
  }

  listenChildMenuEvent(eventArgs:any){
    console.log('Los datos emitidos por el componente hijo son: ', eventArgs);
    console.log('El indice en el papá es: ', eventArgs.index);
    console.log('El item en el papá es: ', eventArgs.name);
  }
}
