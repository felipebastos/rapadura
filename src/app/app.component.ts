import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemon } from '../shared/store/pokemon.actions';
import { Observable } from 'rxjs';
import { selectLoaded } from 'src/shared/store/pokemon.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rapadura';

  novo: string = '';

  loaded: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store) {
    this.loaded = this.store.select(selectLoaded);
  }

  loadPokemon() {
    this.store.dispatch(loadPokemon());
  }
}
