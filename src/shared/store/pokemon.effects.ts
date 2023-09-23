import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, switchMap } from 'rxjs';
import {
  loadPokemon,
  loadPokemonDetail,
  loadPokemonDetailSuccess,
  loadPokemonSuccess,
} from './pokemon.actions';
import { PokemonService } from '../services/pokemon.service';

@Injectable()
export class PokemonEffects {
  loadPokemon$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadPokemon),
      switchMap(() =>
        this.pokeservice.load().pipe(
          map((pokemon) => {
            return loadPokemonSuccess({ pokemon: pokemon.results });
          })
        )
      )
    )
  );

  loadDetail$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadPokemonDetail),
      switchMap(({ url }) => {
        if (url)
          return this.pokeservice.load_one(url).pipe(
            map((p) => {
              return loadPokemonDetailSuccess({ detail: p });
            })
          );
        return EMPTY;
      })
    )
  );

  constructor(private action$: Actions, private pokeservice: PokemonService) {}
}
