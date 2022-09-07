import { Component, OnInit } from '@angular/core';
import { Receita } from './../model/receita';
import { ReceitaService } from './receita.service';
import { Shared } from './../utils/shared';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css'],
  providers: [ReceitaService],
})
export class ReceitaComponent implements OnInit {
  receitas?: Receita[];

  constructor(private receitaService: ReceitaService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.receitas = this.receitaService.getReceitas();
  }

  onEdit(receita: Receita): void {
    alert('Ainda não está implementado!');
  }
}
