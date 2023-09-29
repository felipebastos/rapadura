import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';
import { CapturadosComponent } from './capturados/capturados.component';
import { BuscaComponent } from './busca/busca.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'busca', component: BuscaComponent },
  { path: 'capturados', component: CapturadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
