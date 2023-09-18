import { Injectable } from '@angular/core';
import { Pokemon } from './entities';
import { HttpClient } from '@angular/common/http';
import { map, range } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  pokemon_list: Pokemon[] = [];

  capturados: Pokemon[] = [];

  constructor(private api: HttpClient) {
    const numbers = range(1, 150);

    numbers.subscribe({
      next: (i) =>
        this.api
          .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${i}/`)
          .subscribe((poke: Pokemon) => this.add(poke)),
      complete: () => console.log('Concluído.'),
    });
  }

  get_list(): Pokemon[] {
    return this.pokemon_list.sort((a, b) => (a.id < b.id ? -1 : 1));
  }

  get_by_id(n: number): Pokemon {
    return this.pokemon_list.filter((poke) => poke.id == n)[0];
  }

  get_capturado(): Pokemon[] {
    return this.capturados;
  }

  add(p: Pokemon) {
    this.pokemon_list.push(p);
  }

  capture(id: number) {
    this.capturados.push(this.get_by_id(id));
  }
}
