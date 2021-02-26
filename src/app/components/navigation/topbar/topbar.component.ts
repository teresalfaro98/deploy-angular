import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'navigation-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  //para que el app.component me pase los datos aquí al topbar
  @Input() menuProfileItems: any = [] = [];
  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onclick_menu(index:number,item:any){
    console.log('El indice en el hijo es: ', index);
    console.log('El item en el hijo es: ', item);
    this.onClickMenu.emit({
      index,
      name: item.title
    });
  }

}
