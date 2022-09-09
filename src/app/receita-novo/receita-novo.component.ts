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
})
export class ReceitaNovoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  isSubmitted!: boolean;
  isSuccess = false;
  message = '';

  receita!: Receita;

  constructor(
    private receitaService: ReceitaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.receita = new Receita();
  }

  onReset() {
    console.log('reset');
    this.receita = new Receita();
  }

  onCategoriaChange(event: Event) {
    this.receita.categoria = (event.target as HTMLInputElement)
      .value as Categoria;
  }

  onDificuldadeChange(event: Event) {
    this.receita.dificuldade = (event.target as HTMLInputElement)
      .value as Dificuldade;
  }

  onSubmit(): void {
    if (!this.receita.categoria) {
      this.isSubmitted = false;
      this.message = 'O campo Categoria não pode ser vazio.'
    } else if (!this.receita.dificuldade) {
      this.isSubmitted = false;
      this.message = 'O campo Dificuldade não pode ser vazio.'
    } else {
      this.isSuccess = true;
      this.isSubmitted = true;

      if (!this.receita.id) {
        this.receitaService
          .save(this.receita)
          .then((value) => {
            this.form.reset();
            this.receita = new Receita();

            alert('Cadastro realizado com sucesso!');
            this.router.navigate(['']);
          })
          .catch((error) => {
            alert('Ocorreu um erro ao salvar a receita: ' + error);
          });
      }
    }
  }

  onCancel() {
    this.router.navigate(['']);
  }

  onEdit(receita: Receita) {
    let cloneReceita: Receita = Receita.clone(receita);
    this.receita = cloneReceita;
  }
}
