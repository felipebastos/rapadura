import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, filter, map, startWith, takeUntil } from 'rxjs';
import { Pokemon, PokemonRoot } from 'src/shared/models/pokemon';
import { selectPokemon } from 'src/shared/store/pokemon.selectors';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css'],
})
export class BuscaComponent implements OnInit, OnDestroy {
  myControl = new FormControl('');
  options = this.store.select(selectPokemon);
  filteredOptions: Observable<PokemonRoot[]> = new Observable<PokemonRoot[]>();

  destroy$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.myControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .pipe(map((pokepartialname) => this._filter(pokepartialname || '')))
      .subscribe((filtrados) => (this.filteredOptions = filtrados));
  }

  ngOnDestroy(): void {
    this.destroy$.next(1);
    this.destroy$.complete();
  }

  private _filter(value: string): Observable<PokemonRoot[]> {
    return this.options
      .pipe
      // TODO
      ();
  }
}
