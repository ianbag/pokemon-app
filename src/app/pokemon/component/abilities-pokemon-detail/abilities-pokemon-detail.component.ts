import { Component, Input, OnChanges } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { PokemonDetail, AbilityDetail, LanguagesCode } from './../../model/pokemon-detail.model';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-abilities-pokemon-detail',
  templateUrl: './abilities-pokemon-detail.component.html',
  styleUrls: ['./abilities-pokemon-detail.component.css']
})

export class AbilitiesPokemonDetailComponent implements OnChanges {

  @Input() pokemonDetail: PokemonDetail;

  languagesCode = LanguagesCode;

  abilityDetail: Array<AbilityDetail> = new Array<AbilityDetail>();
  constructor(private pokemonService: PokemonService,
    private ngxService: NgxUiLoaderService) { }

  ngOnChanges(): void {
    this.getAbilityPokemonByName();
  }

  getAbilityPokemonByName(): void {
    this.ngxService.start();
    this.pokemonDetail?.abilities.forEach(ability => {
      this.pokemonService.getAbilityPokemonByName(ability.ability.name).subscribe(
        abilities => {
          this.ngxService.stop();
          this.abilityDetail.push(abilities);
        },
        error => {
          this.ngxService.stop();
          console.log("Erro ao carregar as Habilidades: ", error);
        }
      )
    })
  }


}
