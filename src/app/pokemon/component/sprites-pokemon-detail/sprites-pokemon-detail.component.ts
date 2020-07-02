import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetail } from './../../model/pokemon-detail.model';


@Component({
  selector: 'app-sprites-pokemon-detail',
  templateUrl: './sprites-pokemon-detail.component.html',
  styleUrls: ['./sprites-pokemon-detail.component.css']
})
export class SpritesPokemonDetailComponent implements OnInit {

  @Input() pokemonDetail: PokemonDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
