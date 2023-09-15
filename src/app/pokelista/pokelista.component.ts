import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from './entities';
import { ListaService } from './lista.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.css'],
})
export class PokelistaComponent {
  @Output() pokepegou: EventEmitter<{ id: number }> = new EventEmitter<{
    id: number;
  }>();

  @Output() pokesoltou: EventEmitter<{ id: number }> = new EventEmitter<{
    id: number;
  }>();

  constructor(private lista: ListaService, private api: HttpClient) {
    this.api
      .get<Pokemon>('https://pokeapi.co/api/v2/pokemon/1/')
      .subscribe((poke: Pokemon) => this.lista.add(poke));
  }

  pokemons(): Pokemon[] {
    return this.lista.get_list();
  }

  pegou(evt: Event, id: number) {
    this.pokepegou.emit({ id: id });
  }

  soltou(evt: Event, id: number) {
    this.pokesoltou.emit({ id: id });
  }
}
