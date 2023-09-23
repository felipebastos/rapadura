import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonComponent } from './pokemon/pokemon.component';
import { CapturadosComponent } from './capturados/capturados.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'capturados', component: CapturadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
