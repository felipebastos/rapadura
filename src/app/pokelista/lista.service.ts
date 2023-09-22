import { Injectable } from '@angular/core';
import { Pokemon } from './entities';
import { HttpClient } from '@angular/common/http';
import { Observable, mergeMap, range, scan } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  capturados: Pokemon[] = [];

  constructor(private api: HttpClient) {}

  load(): Observable<Pokemon[]> {
    const numbers = range(1, 150);

    return numbers.pipe(
      mergeMap((n) =>
        this.api.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${n}/`)
      ),
      scan((lista: Pokemon[], curr: Pokemon) => [...lista, curr], [])
    );
  }

  get_capturado(): Pokemon[] {
    return this.capturados;
  }
}
