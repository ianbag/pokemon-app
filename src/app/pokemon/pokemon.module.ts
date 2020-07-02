import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';


import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { MatButtonModule } from '@angular/material/button';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail.component';
import { SpritesPokemonDetailComponent } from './component/sprites-pokemon-detail/sprites-pokemon-detail.component';
import { AbilitiesPokemonDetailComponent } from './component/abilities-pokemon-detail/abilities-pokemon-detail.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonDetailComponent,
    SpritesPokemonDetailComponent,
    AbilitiesPokemonDetailComponent
  ],
  imports: [
    CommonModule,
    NgxUiLoaderModule,
    // routing
    PokemonRoutingModule,
    // angular material
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
  ]
})
export class PokemonModule { }
