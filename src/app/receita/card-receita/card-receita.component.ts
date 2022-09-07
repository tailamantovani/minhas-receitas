import { Component, Input, OnInit } from '@angular/core';
import { Categoria, Dificuldade } from 'src/app/model/tipos';
import { Receita } from '../../model/receita';

@Component({
  selector: 'app-card-receita',
  templateUrl: './card-receita.component.html',
  styleUrls: ['./card-receita.component.css'],
})
export class CardReceitaComponent implements OnInit {
  @Input() receita: Receita = new Receita('', '', '', Dificuldade.Facil, Categoria.Bebidas);

  constructor() {}

  ngOnInit(): void {}
}
