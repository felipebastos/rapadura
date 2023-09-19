import { createAction, props } from '@ngrx/store';

export const pokemonCapturado = createAction(
  '[POKEMON] Um pokemon foi capturado.',
  props<{ id: number }>()
);
