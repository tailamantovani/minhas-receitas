import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receita } from 'src/app/model/receita';
import { ReceitaService } from 'src/app/receita/receita.service';

@Component({
  selector: 'app-card-receita',
  templateUrl: './card-receita.component.html',
  styleUrls: ['./card-receita.component.css'],
})
export class CardReceitaComponent implements OnInit {
  @Input() receita: Receita = new Receita();
  @Output() atualizarLista = new EventEmitter<string>;

  constructor(private receitaService: ReceitaService, private router: Router) {}

  ngOnInit(): void {}

  onEdit(): void {
    this.router.navigate(['receita', { id: this.receita.id }]);
  }

  onDelete(): void {
    this.receitaService.delete(this.receita.id!).subscribe({
      next: (data) => {
        alert('Receita excluída com sucesso!');
        this.atualizarLista.emit();
      },
      error: (error) => {
        alert('Ocorreu um erro ao excluir a receita Id. ' + this.receita.id + ': ' + error);
      },
    });
  }
}
