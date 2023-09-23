import { createAction, props } from '@ngrx/store';
import { Pokemon, PokemonRoot } from '../models/pokemon';

export const pokemonCapturado = createAction(
  '[POKEMON] Um pokemon foi capturado.',
  props<{ poke: Pokemon }>()
);

export const loadPokemon = createAction('[POKEMON] Carregar todos os pokemons');

export const loadPokemonSuccess = createAction(
  '[POKEMON] Carregar cada pokemon bem sucedido',
  props<{ pokemon: PokemonRoot[] }>()
);

export const loadPokemonError = createAction(
  '[POKEMON] Carregar pokemon mal sucedido'
);

export const loadPokemonDetail = createAction(
  '[POKEMON] Carrega detalhes de um pokemon específico',
  props<{ url: string }>()
);

export const loadPokemonDetailSuccess = createAction(
  '[POKEMON] Carrega detalhes de um pokemon específico',
  props<{ detail: Pokemon }>()
);

export const changePage = createAction(
  '[POKEMON] Muda página exibida',
  props<{ index: number; size: number }>()
);

export const changeCapPage = createAction(
  '[POKEMON] Muda página exibida dos capturados',
  props<{ index: number; size: number }>()
);
