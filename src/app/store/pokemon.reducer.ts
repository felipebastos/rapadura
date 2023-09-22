import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { loadPokemonSuccess, pokemonCapturado } from './pokemon.actions';
import { Pokemon } from '../pokelista/entities';

export interface State {
  pokemonID: number;
  pokemon: Pokemon[];
}

export const initialState: State = {
  pokemonID: 0,
  pokemon: [],
};

export const pokemonReducer = createReducer(
  initialState,
  on(pokemonCapturado, (state, action) => {
    return {
      ...state,
      pokemonID: action.id,
    };
  }),
  on(loadPokemonSuccess, (state, action) => {
    return {
      ...state,
      pokemon: action.pokemon,
    };
  })
);

export const selectStore = createFeatureSelector<State>('pokemon');
