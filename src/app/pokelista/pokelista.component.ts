import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPokemon } from '../store/pokemon.selectors';

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

  lista$ = this.store.select(selectPokemon);

  constructor(private store: Store) {}

  pegou(evt: Event, id: number) {
    this.pokepegou.emit({ id: id });
  }

  soltou(evt: Event, id: number) {
    this.pokesoltou.emit({ id: id });
  }
}
