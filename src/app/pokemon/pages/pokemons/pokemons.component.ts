import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { environment } from './../../../../environments/environment';
import { PokemonService } from './../../service/pokemon.service';
import { Pokemons, FilterPagination } from '../../model/pokemon.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {

  dataPokemons: Pokemons;
  data: Array<any>;

  filterPagination: FilterPagination;
  length: number = 100;
  pageSize: number = 20;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  constructor(
    private pokemonService: PokemonService,
    private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this.ngxService.start();
    this.pokemonService.getAllPokemon().subscribe(
      responseAllPokemons => {
        this.dataPokemons = responseAllPokemons;
        this.length = responseAllPokemons.count;
        this.getIdFromUrl();
        this.ngxService.stop();
      },
      error => {
        this.ngxService.stop();
        console.log("Erro ao carregar os Pokemons!", error);
      })
  }

  getIdFromUrl(): void {
    const regex: string = '([0-9]+)\/$';

    this.dataPokemons.results.forEach((pokemon, index) => {
      const extractIdOfUrl: string = pokemon.url.match(regex)[1];
      const pokemonSelected = this.dataPokemons.results[index];
      pokemonSelected.id = extractIdOfUrl;
      pokemonSelected.sprite = this.setSpritePokemon(extractIdOfUrl);
    })
  }

  setSpritePokemon(id: string): string {
    return `${environment.BASE_URL_IMAGE}${id}.png`
  }

  setParamsService(pageEvent: PageEvent): void {
    const OFFSET: string = (pageEvent.pageIndex * pageEvent.pageSize).toString();
    const LIMIT: string = (pageEvent.pageSize).toString();

    this.pokemonService.httpParams = this.pokemonService.httpParams.set('offset', OFFSET);
    this.pokemonService.httpParams = this.pokemonService.httpParams.set('limit', LIMIT);

    this.getAllPokemons();
  }
}
