import { Injectable } from '@angular/core';
import { PokePage, Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  concatMap,
  map,
  mergeScan,
  of,
  range,
  switchMap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  root_url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private api: HttpClient) {}

  load(): Observable<PokePage> {
    return this.api.get<PokePage>(this.root_url).pipe(
      switchMap(({ count }) => range(0, count / 20)),
      concatMap((n) => {
        return this.api.get<PokePage>(
          this.root_url + `?offset=${n * 20}&limit=20`
        );
      })
    );
  }

  load_one(url: string): Observable<Pokemon> {
    return this.api.get<Pokemon>(url);
  }
}
