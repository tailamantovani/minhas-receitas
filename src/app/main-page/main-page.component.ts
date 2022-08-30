import { Component, OnInit } from '@angular/core';
import { receitas } from '../model/receita';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  receitas = [...receitas];

  constructor() {}

  ngOnInit(): void {}
}
