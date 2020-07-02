import { ImagePokemon } from './../model/pokemon-image.model';
import { environment } from './../../../environments/environment';
import { PokemonDetail, AbilityDetail } from './../model/pokemon-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemons } from './../model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.BASE_URL_API

  httpParams = new HttpParams();

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${this.baseUrl}/pokemon`, { params: this.httpParams });
  }

  getPokemonByName(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.baseUrl}/pokemon/${name}`);
  }

  getAbilityPokemonByName(name: string): Observable<AbilityDetail> {
    return this.http.get<AbilityDetail>(`${this.baseUrl}/ability/${name}`);
  }
}
