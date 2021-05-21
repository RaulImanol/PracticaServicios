import { Component, OnInit } from '@angular/core';
//IMPORT DEL COMPONENT
import { MessageService } from '../message.service';
//IMPORT DEL SERVICIO DE MENSAJES
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
//COMPONENT
export class MessagesComponent implements OnInit {
//EXPORTACION DEL COMPONENTE DE MENSAJES 
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }
  //CONSTRUCTOR DEL SERVICIO DE MENSAJES

}
