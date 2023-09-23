import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCapPage,
  selectCapPageSize,
  selectCapSize,
} from 'src/shared/store/pokemon.selectors';

@Component({
  selector: 'app-capturados',
  templateUrl: './capturados.component.html',
  styleUrls: ['./capturados.component.css'],
})
export class CapturadosComponent {
  size$: Observable<number> = new Observable<number>();

  page$: Observable<number> = new Observable<number>();
  pageSize$: Observable<number> = new Observable<number>();

  constructor(private store: Store) {
    this.size$ = this.store.select(selectCapSize);
    this.page$ = this.store.select(selectCapPage);
    this.pageSize$ = this.store.select(selectCapPageSize);
  }
}
