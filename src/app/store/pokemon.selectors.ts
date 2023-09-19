import { createSelector } from '@ngrx/store';
import { State, selectStore } from './pokemon.reducer';

export const selectPokemonId = createSelector(
  selectStore,
  (state) => state.pokemonID
);
