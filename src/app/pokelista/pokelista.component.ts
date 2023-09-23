import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageEvent } from '@angular/material/paginator';
import {
  selectCapturados,
  selectPokemon,
} from '../../shared/store/pokemon.selectors';
import { PokemonRoot } from 'src/shared/models/pokemon';
import { Observable } from 'rxjs';
import {
  changeCapPage,
  changePage,
  loadPokemonDetail,
} from 'src/shared/store/pokemon.actions';
import { MatDialog } from '@angular/material/dialog';
import { PokedialogComponent } from '../pokedialog/pokedialog.component';

@Component({
  selector: 'app-pokelista',
  templateUrl: './pokelista.component.html',
  styleUrls: ['./pokelista.component.css'],
})
export class PokelistaComponent implements OnInit {
  @Input() capturados: boolean = false;
  @Input() size: number = 0;
  @Input() pageSize = 10;
  @Input() page = 0;

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

  mudaPagina(evt: PageEvent) {
    if (!this.capturados) {
      this.store.dispatch(
        changePage({ index: evt.pageIndex, size: evt.pageSize })
      );
    } else {
      this.store.dispatch(
        changeCapPage({ index: evt.pageIndex, size: evt.pageSize })
      );
    }
  }
}
