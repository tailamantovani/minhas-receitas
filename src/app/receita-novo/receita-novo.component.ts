import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from 'src/app/model/receita';
import { ReceitaService } from 'src/app/receita/receita.service';
import { Categoria, Dificuldade } from 'src/app/model/tipos';

@Component({
  selector: 'app-receita-novo',
  templateUrl: './receita-novo.component.html',
  styleUrls: ['./receita-novo.component.css'],
})
export class ReceitaNovoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @ViewChild('categoriaSelect') categoriaSelect!: ElementRef;
  @ViewChild('dificuldadeSelect') dificuldadeSelect!: ElementRef;

  isSubmitted!: boolean;
  message = '';

  categorias: Categoria[];
  dificuldades: Dificuldade[];

  receita!: Receita;

  constructor(
    private receitaService: ReceitaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categorias = Object.values(Categoria);
    this.dificuldades = Object.values(Dificuldade);
  }

  ngOnInit(): void {
    let idReceitaEdit = Number(this.route.snapshot.paramMap.get('id'));

    if (idReceitaEdit) {
      this.receitaService.getById(idReceitaEdit).subscribe({
        next: (data) => {
          this.receita = data;

          // Atualiza os selects com os valores da receita selecionada
          setTimeout(() => {
            M.FormSelect.init(this.categoriaSelect.nativeElement);
          }, 100);
        },
        error: (error) => {
          alert(
            'Ocorreu um erro ao buscar dados da receita Id. ' +
              idReceitaEdit +
              ' para edição: ' +
              error
          );
        },
      });
    }
    this.receita = new Receita();
  }

  onSubmit(): void {
    if (!this.receita.categoria) {
      this.message = 'O campo Categoria não pode ser vazio.';
    } else if (!this.receita.dificuldade) {
      this.message = 'O campo Dificuldade não pode ser vazio.';
    } else {
      this.isSubmitted = true;

      // Adicionar novo
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
      } else {
        // Editar
        this.receitaService
          .update(this.receita)
          .then((value) => {
            this.form.reset();
            this.receita = new Receita();

            alert('Edição realizada com sucesso!');
            this.router.navigate(['']);
          })
          .catch((error) => {
            alert('Ocorreu um erro ao salvar a receita: ' + error);
          });
      }
    }
  }

  onCancel() {
    this.form.reset();
    this.router.navigate(['']);
  }

  compareCategoria(c1: Categoria, c2: Categoria) {
    if (c1 != null && c2 != null) {
      return c1 == c2;
    }
    return false;
  }
  compareDificuldade(d1: Dificuldade, d2: Dificuldade) {
    if (d1 != null && d2 != null) {
      return d1 == d2;
    }
    return false;
  }
}
