import { createSelector } from '@ngrx/store';
import { selectStore } from './pokemon.reducer';

export const selectPokemonId = createSelector(
  selectStore,
  (state) => state.pokemonID
);

export const selectLoaded = createSelector(
  selectStore,
  (state) => state.loaded
);

export const selectPokemon = createSelector(
  selectStore,
  (state) => state.pokemon
);

export const selectCapturados = createSelector(
  selectStore,
  (state) => state.capturados
);

export const selectError = createSelector(selectStore, (state) => state.error);

export const selectShowModal = createSelector(
  selectStore,
  (state) => state.showDetail
);

export const selectDetail = createSelector(
  selectStore,
  (state) => state.pokemonDetail
);
