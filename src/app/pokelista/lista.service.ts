import { Injectable } from '@angular/core';
import { Pokemon } from './entities';
import { HttpClient } from '@angular/common/http';
import { Observable, mergeMap, mergeScan, of, range, scan } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  capturados: Pokemon[] = [];

  constructor(private api: HttpClient) {}

  load(): Observable<Pokemon[]> {
    const numbers = range(1, 10);

    return numbers.pipe(
      mergeMap((n) =>
        this.api.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${n}/`)
      ),
      mergeScan((acc: Pokemon[], one) => of([...acc, one]), [])
      //scan((lista: Pokemon[], curr: Pokemon) => [...lista, curr], [])
    );
  }

  get_capturado(): Pokemon[] {
    return this.capturados;
  }
}
