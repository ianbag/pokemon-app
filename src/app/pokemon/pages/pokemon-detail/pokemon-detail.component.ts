import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonDetail } from './../../model/pokemon-detail.model';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetail: PokemonDetail;

  constructor(private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const nameParams: string = this.activatedRoute.snapshot.params['id'];
    this.getPokemonByName(nameParams);
  }

  getPokemonByName(name: string): void {
    this.pokemonService.getPokemonByName(name).subscribe(
      data => {
        this.pokemonDetail = data;
      },
      error => {
        console.log("Error ao carregar o Pokemon Details.", error)
      })
  }


}
