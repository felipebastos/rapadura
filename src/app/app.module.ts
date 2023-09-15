import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokelistaComponent } from './pokelista/pokelista.component';
import { ListaService } from './pokelista/lista.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PokelistaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ListaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
