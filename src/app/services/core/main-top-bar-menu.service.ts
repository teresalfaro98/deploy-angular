import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint: string = 'assets/json/mainMenu.json'; //cuando ya tengamos backend aquí ponemos la url

@Injectable({
  providedIn: 'root'
})
export class MainTopBarMenuService {

  constructor(private http: HttpClient) { } //inyección de dependencias.

  //Método
  getItemsMenu(){ //get hacia la ruta del archivo json. Se manda a llamar en el app.component.ts
    return this.http.get(endPoint); //es un suscriptor, para recibir los datos debemos suscribirnos para escuchar cada vez
    //que el servidor esté mendando info del backend
  }
}
