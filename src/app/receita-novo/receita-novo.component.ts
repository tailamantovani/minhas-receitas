import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria, Dificuldade } from 'src/app/model/tipos';
import { ReceitaService } from 'src/app/receita/receita.service';
import { Receita } from 'src/app/model/receita';

@Component({
  selector: 'app-receita-novo',
  templateUrl: './receita-novo.component.html',
  styleUrls: ['./receita-novo.component.css'],
  providers: [ReceitaService],
})
export class ReceitaNovoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  receita!: Receita;
  isSubmitted!: boolean;

  constructor(
    private receitaService: ReceitaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.receita = new Receita(
      '',
      '',
      '',
      Dificuldade.Facil,
      Categoria.Bebidas
    );

  }

  onCategoriaChange(event: Event) {
    this.receita.categoria = (event.target as HTMLInputElement).value as Categoria;
  }

  onDificuldadeChange(event: Event) {
    this.receita.dificuldade = (event.target as HTMLInputElement).value as Dificuldade;
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (!this.receitaService.isExist(this.receita.nome)) {
      this.receitaService.save(this.receita);
    } else {
      this.receitaService.update(this.receita);
    }

    this.form.reset();
    this.receita = new Receita(
      '',
      '',
      '',
      Dificuldade.Facil,
      Categoria.Bebidas
    );

    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }

  onEdit(receita: Receita) {
    let cloneReceita: Receita = Receita.clone(receita);
    this.receita = cloneReceita;
  }
}
