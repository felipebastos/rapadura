import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
  { path: 'um', component: Pagina1Component },
  { path: 'dois', component: Pagina2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
