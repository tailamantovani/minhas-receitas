export class Receita {
  id?: number;
  nome?: string;
  categoria?: string;
  dificuldade?: string;

  constructor(nome: string, categoria: string, dificuldade: string) {
    this.nome = nome;
    this.categoria = categoria;
  }
}

export const receitas = [
  {
    id: 1,
    nome: 'Pudim',
    categoria: 'Doces',
    dificuldade: 'Médio',
  },
  {
    id: 2,
    nome: 'Lasanha',
    categoria: 'Massas',
    dificuldade: 'Médio',
  },
  {
    id: 3,
    nome: 'Bolo de chocolate',
    categoria: 'Doces',
    dificuldade: 'Fácil',
  },
  {
    id: 4,
    nome: 'Misto quente',
    categoria: 'Lanches',
    dificuldade: 'Fácil',
  },
  {
    id: 5,
    nome: 'Costelinha com molho barbecue',
    categoria: 'Carnes',
    dificuldade: 'Difícil',
  },
  {
    id: 6,
    nome: 'Macarrão ao molho branco',
    categoria: 'Massas',
    dificuldade: 'Médio',
  },
];
