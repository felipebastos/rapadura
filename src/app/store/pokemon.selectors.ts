import { createSelector } from '@ngrx/store';
import { selectStore } from './pokemon.reducer';

export const selectPokemonId = createSelector(
  selectStore,
  (state) => state.pokemonID
);

export const selectPokemon = createSelector(
  selectStore,
  (state) => state.pokemon
);
