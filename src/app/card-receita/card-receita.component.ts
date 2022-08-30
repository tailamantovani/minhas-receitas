import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Receita } from './../model/receita';

@Component({
  selector: 'app-card-receita',
  templateUrl: './card-receita.component.html',
  styleUrls: ['./card-receita.component.css'],
})
export class CardReceitaComponent implements OnInit {
  @Input() receita: Receita = new Receita('', '', '');

  constructor() {}

  ngOnInit(): void {}
}
