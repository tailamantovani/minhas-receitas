import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/model/receita';
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
    this.buscarReceitas();
  }

  atualizarDados() {
    this.buscarReceitas();
  }

  buscarReceitas() {
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
