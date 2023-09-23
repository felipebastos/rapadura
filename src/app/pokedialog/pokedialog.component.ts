import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/shared/models/pokemon';
import { pokemonCapturado } from 'src/shared/store/pokemon.actions';
import {
  selectDetail,
  selectShowModal,
} from 'src/shared/store/pokemon.selectors';

@Component({
  selector: 'app-pokedialog',
  templateUrl: './pokedialog.component.html',
  styleUrls: ['./pokedialog.component.css'],
})
export class PokedialogComponent {
  showModal: Observable<boolean> = new Observable<boolean>();
  detail: Observable<Pokemon> = new Observable<Pokemon>();

  constructor(private store: Store) {
    this.showModal = this.store.select(selectShowModal);
    this.detail = this.store.select(selectDetail);
  }

  capturar(p: Pokemon) {
    this.store.dispatch(pokemonCapturado({ poke: p }));
  }
}
