import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/utils/web-storage-util';
import { Constants } from 'src/app/utils/constants';
import { Receita } from '../model/receita';

@Injectable()
export class ReceitaService {
  receitas!: Receita[];
  private receitaSource!: BehaviorSubject<number>;

  constructor() {
    this.receitas = WebStorageUtil.get(Constants.RECEITA_KEY);

    if (this.receitas != undefined) {
      this.receitaSource = new BehaviorSubject<number>(this.receitas.length);
    } else {
      this.receitaSource = new BehaviorSubject<number>(1);
    }
  }

  save(receita: Receita) {
    this.receitas = WebStorageUtil.get(Constants.RECEITA_KEY);
    this.receitas.push(receita);
    WebStorageUtil.set(Constants.RECEITA_KEY, this.receitas);
  }

  update(receita: Receita) {
    this.receitas = WebStorageUtil.get(Constants.RECEITA_KEY);
    this.delete(receita.nome);
    this.save(receita);
  }

  delete(nome: string): boolean {
    this.receitas = WebStorageUtil.get(Constants.RECEITA_KEY);
    this.receitas = this.receitas.filter((r) => {
      return r.nome?.valueOf() != nome?.valueOf();
    });

    WebStorageUtil.set(Constants.RECEITA_KEY, this.receitas);
    return true;
  }

  isExist(nome: string): boolean {
    this.receitas = WebStorageUtil.get(Constants.RECEITA_KEY);

    for (let r of this.receitas) {
      if (r.nome?.valueOf() == nome?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getReceitas(): Receita[] {
    this.receitas = WebStorageUtil.get(Constants.RECEITA_KEY);
    return this.receitas;
  }

  asObservable(): Observable<number> {
    return this.receitaSource;
  }
}
