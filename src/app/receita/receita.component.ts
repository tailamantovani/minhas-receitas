import { Component, OnInit } from '@angular/core';
import { Receita } from './../model/receita';
import { ReceitaService } from './receita.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css'],
})
export class ReceitaComponent implements OnInit {
  receitas: Receita[];

  constructor(private receitaService: ReceitaService) {
    this.receitas = [];
  }

  ngOnInit(): void {
    this.receitaService.getReceitas().subscribe({
      next: (data) => {
        this.receitas = data;
      },
      error: (error) => {
        alert(error);
      },
    });
  }

}
