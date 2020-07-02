export interface PokemonDetail {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;
  abilities: Array<Ability>;
  sprites: Sprites;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  }
}

export interface AbilityDetail {
  names: Array<{ name: string }>
  effect_entries: Array<Effect>
}

export enum LanguagesCode {
  englishLanguage = 7,
  englishEffect = 1,
}

interface Effect {
  effect: string;
  short_effect: string;
}

interface Sprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}
