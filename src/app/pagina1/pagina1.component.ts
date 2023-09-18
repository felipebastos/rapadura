import { Component } from '@angular/core';
import { ListaService } from '../pokelista/lista.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css'],
})
export class Pagina1Component {
  ultimo: string = 'nunca selecionou';

  constructor(private lista: ListaService) {}
  pegou(n: number) {
    this.ultimo = `O último selecionado foi o de ID: ${n}`;
    this.lista.capture(n);
  }
}
