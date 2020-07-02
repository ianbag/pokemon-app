import { environment } from './../../../environments/environment';
import { PokemonDetail, AbilityDetail } from './../model/pokemon-detail.model';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import { Pokemons } from '../model/pokemon.model';

describe('PokemonService', () => {
  let injector: TestBed;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  const baseUrl: string = environment.BASE_URL_API;

  const mockPokemon: Pokemons = {
    count: 964, next: "https://pokeapi.co/api/v2/pokemon/?offset=22&limit=2",
    previous: "https://pokeapi.co/api/v2/pokemon/?offset=18&limit=2",
    results: [
      { name: "spearow", url: "https://pokeapi.co/api/v2/pokemon/21/" },
      { name: "fearow", url: "https://pokeapi.co/api/v2/pokemon/22/" }
    ]
  };

  const mockPokemonDetail: PokemonDetail = {
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/"
        },
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/"
        },
      }
    ],
    base_experience: 64,
    height: 7,
    id: 1,
    name: "bulbasaur",
    sprites: {
      back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      back_female: null,
      back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      back_shiny_female: null,
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      front_female: null,
      front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      front_shiny_female: null
    },
    weight: 69
  }

  const mockAbilityDetail: AbilityDetail = {
    effect_entries: [
      {
        effect: "Während starkem Sonnenlicht, wird der special attack von Pokémon mit dieser Fähigkeit um 50% erhöht, dafür erleidet es 1/8 seiner maximalen hp Schaden am Ende der Runde.",
        short_effect: "Erhöht den special attack um 50% aber zieht jede Runde 1/8 der max hp ab während starkem Sonnenlicht."
      },
      {
        effect: "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
        short_effect: "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight."
      }
    ],
    names: [
      { name: "サンパワー" },
      { name: "선파워" },
      { name: "太陽之力" },
      { name: "Force Soleil" },
      { name: "Solarkraft" },
      { name: "Poder Solar" },
      { name: "Solarpotere" },
      { name: "Solar Power" },
      { name: "サンパワー" },
      { name: "太阳之力" }
    ],
  }

  const mockErrorMessage: string = "Not Found";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });

    injector = getTestBed();
    service = injector.get(PokemonService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getAllPokemon() should return data', async () => {
    service.getAllPokemon().subscribe((data) => {
      expect(data).toEqual(mockPokemon);
    });

    const req = httpMock.expectOne(`${baseUrl}/pokemon`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemon);
  });

  it('getAllPokemon() should fail', async () => {
    service.getAllPokemon().subscribe(data => { }, error => {
      expect(error).toEqual(mockErrorMessage);
    });

    const req = httpMock.expectOne(`${baseUrl}/pokemon`);
    expect(req.request.method).toBe('GET');
    req.flush(mockErrorMessage);
  });

  it('getPokemonByName() should return data', async () => {
    service.getPokemonByName('bulbasaur').subscribe((res) => {
      expect(res).toEqual(mockPokemonDetail);
    });

    const req = httpMock.expectOne(`${baseUrl}/pokemon/bulbasaur`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemonDetail);
  });

  it('getPokemonByName() should fail', async () => {
    service.getPokemonByName('dontknow').subscribe(data => { }, error => {
      expect(error).toEqual(mockErrorMessage);
    });

    const req = httpMock.expectOne(`${baseUrl}/pokemon/dontknow`);
    expect(req.request.method).toBe('GET');
    req.flush(mockErrorMessage);
  });

  it('getAbilityPokemonByName() should return data', async () => {
    service.getAbilityPokemonByName('solar-power').subscribe((res) => {
      expect(res).toEqual(mockAbilityDetail);
    });

    const req = httpMock.expectOne(`${baseUrl}/ability/solar-power`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAbilityDetail);
  });

  it('getAbilityPokemonByName() should fail', async () => {
    service.getAbilityPokemonByName('dontknow').subscribe(data => { }, error => {
      expect(error).toEqual(mockErrorMessage);
    });

    const req = httpMock.expectOne(`${baseUrl}/ability/dontknow`);
    expect(req.request.method).toBe('GET');
    req.flush(mockErrorMessage);
  });
});
