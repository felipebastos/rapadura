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

export const selectPokemon = createSelector(selectStore, (state) => {
  const start = state.pokePage * state.pokePageSize;

  const end = start + state.pokePageSize;

  return state.pokemon.slice(start, end);
});

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

export const selectPokeSize = createSelector(
  selectStore,
  (state) => state.pokemon.length
);

export const selectPokePage = createSelector(
  selectStore,
  (state) => state.pokePage
);

export const selectPokePageSize = createSelector(
  selectStore,
  (state) => state.pokePageSize
);

export const selectCapPage = createSelector(
  selectStore,
  (state) => state.capPage
);

export const selectCapPageSize = createSelector(
  selectStore,
  (state) => state.capSize
);

export const selectCapSize = createSelector(
  selectStore,
  (state) => state.capturados.length
);
