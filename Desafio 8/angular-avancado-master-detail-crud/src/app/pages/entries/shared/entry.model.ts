import { Category } from "../../categories/shared/category.model";

export class Entry {
  category: unknown;
  constructor(
    public id?: number,
    public user_id?: string,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: boolean,
    public categoryId?: number
  ){ }

  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  };

  get paidText(): string {
    return this.paid ? 'Pago' : 'Pedente';
  }
}