import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/model/receita';
import { ReceitaService } from 'src/app/receita/receita.service';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-visualizar.component.html',
  styleUrls: ['./receita-visualizar.component.css'],
  providers: [ReceitaService],
})
export class ReceitaVisualizarComponent implements OnInit {
  receita!: Receita;

  constructor(
    private route: ActivatedRoute,
    private receitaService: ReceitaService
  ) {}

  ngOnInit(): void {
    let nomeReceita = this.route.snapshot.params['nome'];

    let receitas = this.receitaService.getReceitas();
    let receitaSelect = receitas.filter((r) => {
      return r.nome == nomeReceita;
    });

    if (receitaSelect.length === 0) {
      alert('Receita não encontrada!');
    }
    this.receita = receitaSelect[0];
  }
}
