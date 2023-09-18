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
  @Input() capturados: boolean = false;

  @Output() pokepegou: EventEmitter<{ id: number }> = new EventEmitter<{
    id: number;
  }>();

  @Output() pokesoltou: EventEmitter<{ id: number }> = new EventEmitter<{
    id: number;
  }>();

  constructor(private lista: ListaService) {}

  pokemons(): Pokemon[] {
    if (!this.capturados) return this.lista.get_list();
    return this.lista.get_capturado();
  }

  pegou(evt: Event, id: number) {
    this.pokepegou.emit({ id: id });
  }

  soltou(evt: Event, id: number) {
    this.pokesoltou.emit({ id: id });
  }
}
