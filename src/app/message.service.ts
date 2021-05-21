import { Injectable } from '@angular/core';
//IMPORTACAION DEL INYECTABLE
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
//EXPORTACION DEL SERVICIO DE MENSAJES
  add(message: string) {
    this.messages.push(message);
  }
//FUNCION PARA AÑADIR EL MENSAJE 
  clear() {
    this.messages = [];
//FUNCION PARA LIMPIAR EL MENSAJE
  }
}
