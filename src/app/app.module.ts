import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistaComponent } from './pokelista/pokelista.component';
import { ListaService } from './pokelista/lista.service';
import { HttpClientModule } from '@angular/common/http';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';

@NgModule({
  declarations: [AppComponent, PokelistaComponent, Pagina1Component, Pagina2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ListaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
