export interface PokemonRoot {
  name: string;
  url: string;
}

export interface PokePage {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonRoot[];
}

export interface Pokemon {
  name: string;
  id: number;
}
