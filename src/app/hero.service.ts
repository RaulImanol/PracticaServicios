//COMENTARIOS 
import { Injectable } from '@angular/core';
//IMPORT DEL INYECTABLE
import { Observable, of } from 'rxjs';
//IMPORT DEL OBSERVABLE
import { Hero } from './hero';
//IMPORT DEL HERO
import { HEROES } from './mock-heroes';
//IMPORT DEL MOCK HEROES
import { MessageService } from './message.service';
//IMPORT DEL SERVICIO DE MENSAJES

@Injectable({
  providedIn: 'root',
})
//INYECTABLE
export class HeroService {

  constructor(private messageService: MessageService) { }
//EXPORTACION DE LA CLASE HEROSERVICE
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
//FUNCION GETHEROES PARA EL FUNCIONAMIENTO DEL SERVICIO DE MENSAJES    
  }
}
