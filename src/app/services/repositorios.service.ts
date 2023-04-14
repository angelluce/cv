import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoriosService {

  constructor() {
  }

  obtenerRepositorios(): any {
    return [
      {
        nombre: 'NASA',
        url: 'https://github.com/angelluce/NASA'
      },
      {
        nombre: 'Rick and Morty',
        url: 'https://github.com/angelluce/RickAndMorty'
      },
      {
        nombre: 'ChatBot WhatsApp',
        url: 'https://github.com/angelluce/ChatBotWhatsApp'
      },
    ];
  }
}
