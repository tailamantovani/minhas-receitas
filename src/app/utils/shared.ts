import { Constants } from './constants';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.RECEITA_KEY) == null) {
      localStorage.setItem(Constants.RECEITA_KEY, JSON.stringify([]));
    }
  }
}
