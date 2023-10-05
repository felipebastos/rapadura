import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';
import { CapturadosComponent } from './capturados/capturados.component';
import { BuscaComponent } from './busca/busca.component';
import { PoketextComponent } from './poketext/poketext.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'capturados', component: CapturadosComponent },
  { path: 'editor', component: PoketextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
