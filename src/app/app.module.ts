import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistaComponent } from './pokelista/pokelista.component';
import { ListaService } from './pokelista/lista.service';
import { HttpClientModule } from '@angular/common/http';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './store/pokemon.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from './store/pokemon.effects';

@NgModule({
  declarations: [
    AppComponent,
    PokelistaComponent,
    Pagina1Component,
    Pagina2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ pokemon: pokemonReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([PokemonEffects]),
  ],
  providers: [ListaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
