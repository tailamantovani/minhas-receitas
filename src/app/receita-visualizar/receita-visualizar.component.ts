import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/model/receita';
import { ReceitaService } from 'src/app/receita/receita.service';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-visualizar.component.html',
  styleUrls: ['./receita-visualizar.component.css'],
})
export class ReceitaVisualizarComponent implements OnInit {
  receita!: Receita;

  constructor(
    private route: ActivatedRoute,
    private receitaService: ReceitaService
  ) {
    this.receita = new Receita();
  }

  ngOnInit(): void {
    let idReceita = this.route.snapshot.params['id'];

    this.receitaService.getById(idReceita).subscribe({
      next: (data) => {
        this.receita = data;
      },
      error: (error) => {
        alert(
          'Ocorreu um erro ao buscar dados da receita Id. ' +
            idReceita +
            ': ' +
            error
        );
      },
    });
  }
}
