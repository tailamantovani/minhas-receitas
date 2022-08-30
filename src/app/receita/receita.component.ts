import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { receitas, Receita } from '../model/receita';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css'],
})
export class ReceitaComponent implements OnInit {
  receita!: Receita;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let idReceita = this.route.snapshot.params['id'];
    let receitaList = receitas.filter((r) => {
      return r.id == idReceita;
    });

    if (receitaList.length === 0) {
      alert('Receita não encontrada!');
    }
    this.receita = receitaList[0];
  }
}
