import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../pokelista/entities';

export const pokemonCapturado = createAction(
  '[POKEMON] Um pokemon foi capturado.',
  props<{ id: number }>()
);

export const loadPokemon = createAction('[POKEMON] Carrega todos os pokemons');

export const loadPokemonSuccess = createAction(
  '[POKEMON] Carregar pokemon bem sucedido',
  props<{ pokemon: Pokemon[] }>()
);

export const loadPokemonError = createAction(
  '[POKEMON] Carregar pokemon mal sucedido'
);
