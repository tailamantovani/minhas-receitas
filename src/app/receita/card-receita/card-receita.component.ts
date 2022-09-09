import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Receita } from '../../model/receita';
import { ReceitaService } from 'src/app/receita/receita.service';

@Component({
  selector: 'app-card-receita',
  templateUrl: './card-receita.component.html',
  styleUrls: ['./card-receita.component.css'],
})
export class CardReceitaComponent implements OnInit {
  @Input() receita: Receita = new Receita();

  constructor(private receitaService: ReceitaService, private router: Router) {}

  ngOnInit(): void {}

  onEdit(): void {
    alert('Ainda não está implementado!');
  }

  onDelete(): void {
    this.receitaService.delete(this.receita.id!).subscribe({
      next: (data) => {
        alert('Receita excluída com sucesso!');
        this.receitaService.getReceitas().subscribe({
          next: (data) => {
          },
          error: (error) => {
            alert(error);
          },
        });
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
