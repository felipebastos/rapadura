import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistaComponent } from './pokelista/pokelista.component';
import { PokemonService } from '../shared/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CapturadosComponent } from './capturados/capturados.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from '../shared/store/pokemon.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { PokemonEffects } from '../shared/store/pokemon.effects';
import { materialComponents } from './material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokedialogComponent } from './pokedialog/pokedialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistaComponent,
    PokemonComponent,
    CapturadosComponent,
    PokedialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ pokemon: pokemonReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([PokemonEffects]),
    ...materialComponents,
    BrowserAnimationsModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
