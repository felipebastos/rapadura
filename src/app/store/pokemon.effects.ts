import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { loadPokemonSuccess } from './pokemon.actions';
import { ListaService } from '../pokelista/lista.service';

@Injectable()
export class PokemonEffects {
  loadPokemon$ = createEffect(() =>
    this.action$.pipe(
      ofType('[POKEMON] Carrega todos os pokemons'),
      tap(() => console.log('Carregando')),
      switchMap(() =>
        this.listaservice.load().pipe(
          map((pokemon) => {
            console.log(pokemon);
            return loadPokemonSuccess({ pokemon: pokemon });
          })
        )
      )
    )
  );

  constructor(private action$: Actions, private listaservice: ListaService) {}
}
