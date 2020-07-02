export interface Pokemons {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon>
}

export interface Pokemon {
  id?: string;
  name: string;
  url: string;
  sprite?: string;
}

export interface FilterPagination {
  offset: number;
  limit: number;
}
