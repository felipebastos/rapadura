import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { pokemonCapturado } from './pokemon.actions';

export interface State {
  pokemonID: number;
}

export const initialState: State = {
  pokemonID: 0,
};

export const pokemonReducer = createReducer(
  initialState,
  on(pokemonCapturado, (state, action) => {
    return {
      ...state,
      pokemonID: action.id,
    };
  })
);

export const selectStore = createFeatureSelector<State>('pokemon');
