import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectPokePage,
  selectPokePageSize,
  selectPokeSize,
  selectPokemonId,
} from '../../shared/store/pokemon.selectors';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  ultimo$ = this.store.select(selectPokemonId);

  size$: Observable<number> = new Observable<number>();

  page$: Observable<number> = new Observable<number>();
  pageSize$: Observable<number> = new Observable<number>();

  constructor(private store: Store) {
    this.size$ = this.store.select(selectPokeSize);
    this.page$ = this.store.select(selectPokePage);
    this.pageSize$ = this.store.select(selectPokePageSize);
  }
}
