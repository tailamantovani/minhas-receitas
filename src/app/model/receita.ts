import { Dificuldade, Categoria } from './tipos';

export class Receita {
  id?: number;
  nome?: string;
  ingredientes?: string;
  modoPreparo?: string;
  dificuldade?: Dificuldade;
  categoria?: Categoria;

  constructor(
    nome?: string,
    ingredientes?: string,
    modoPreparo?: string,
    dificuldade?: Dificuldade,
    categoria?: Categoria
  ) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.modoPreparo = modoPreparo;
    this.dificuldade = dificuldade;
    this.categoria = categoria;
  }

  public static clone(receita: Receita) {
    let r: Receita = new Receita(
      receita.nome,
      receita.ingredientes,
      receita.modoPreparo,
      receita.dificuldade,
      receita.categoria
    );
    r.nome = receita.nome;
    r.ingredientes = receita.ingredientes;
    r.modoPreparo = receita.modoPreparo;
    r.dificuldade = receita.dificuldade;
    r.categoria = receita.categoria;
    return r;
  }
}
