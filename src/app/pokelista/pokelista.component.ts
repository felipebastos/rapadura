import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectCapturados,
  selectPokemon,
} from '../../shared/store/pokemon.selectors';
import { PokemonRoot } from 'src/shared/models/pokemon';
import { Observable } from 'rxjs';
import { loadPokemonDetail } from 'src/shared/store/pokemon.actions';
import { MatDialog } from '@angular/material/dialog';
import { PokedialogComponent } from '../pokedialog/pokedialog.component';

@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.css'],
})
export class PokelistaComponent implements OnInit {
  @Input() capturados: boolean = false;

  @Output() pokepegou: EventEmitter<{ id: number }> = new EventEmitter<{
    id: number;
  }>();

  @Output() pokesoltou: EventEmitter<{ id: number }> = new EventEmitter<{
    id: number;
  }>();

  lista$: Observable<PokemonRoot[]> = new Observable<PokemonRoot[]>();

  constructor(private store: Store, public dialog: MatDialog) {}

  ngOnInit(): void {
    if (this.capturados) {
      this.lista$ = this.store.select(selectCapturados);
    } else {
      this.lista$ = this.store.select(selectPokemon);
    }
  }

  pegou(evt: Event, id: number) {
    this.pokepegou.emit({ id: id });
  }

  soltou(evt: Event, id: number) {
    this.pokesoltou.emit({ id: id });
  }

  loadDetail(url: string) {
    if (url) this.store.dispatch(loadPokemonDetail({ url: url }));
    const dialogRef = this.dialog.open(PokedialogComponent);
  }
}
