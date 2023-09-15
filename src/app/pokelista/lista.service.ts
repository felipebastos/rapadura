import { Injectable } from '@angular/core';
import { Pokemon } from './entities';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  pokemon_list: Pokemon[] = [];

  constructor() {}

  get_list(): Pokemon[] {
    return this.pokemon_list;
  }

  add(p: Pokemon) {
    this.pokemon_list.push(p);
  }
}
