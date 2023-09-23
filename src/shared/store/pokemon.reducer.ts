import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import {
  changePage,
  loadPokemonDetailSuccess,
  loadPokemonSuccess,
  pokemonCapturado,
} from './pokemon.actions';
import { Pokemon, PokemonRoot } from '../../shared/models/pokemon';

import * as _ from 'lodash';

export interface State {
  pokemonID: number;
  loaded: boolean;
  pokemon: PokemonRoot[];
  pokemonDetail: Pokemon;
  showDetail: boolean;
  capturados: PokemonRoot[];
  error: { show: boolean; msg: string };
  pokePage: number;
  pokePageSize: number;
}

export const initialState: State = {
  pokemonID: 0,
  loaded: false,
  pokemon: [],
  capturados: [],
  pokemonDetail: { id: 0, name: 'Não carregou nenhum' },
  showDetail: false,
  error: { show: false, msg: '' },
  pokePage: 0,
  pokePageSize: 10,
};

export const pokemonReducer = createReducer(
  initialState,
  on(pokemonCapturado, (state, action) => {
    return {
      ...state,
      capturados: [
        ...state.capturados,
        ...state.pokemon.filter((each) => each.name === action.poke.name),
      ],
      pokemonID: action.poke.id,
    };
  }),
  on(loadPokemonSuccess, (state, action) => {
    return {
      ...state,
      loaded: true,
      pokemon: [...state.pokemon, ...action.pokemon],
    };
  }),
  on(loadPokemonDetailSuccess, (state, action) => {
    return {
      ...state,
      pokemonDetail: action.detail,
      showDetail: true,
    };
  }),
  on(changePage, (state, action) => {
    return {
      ...state,
      pokePage: action.index,
      pokePageSize: action.size,
    };
  })
);

export const selectStore = createFeatureSelector<State>('pokemon');
