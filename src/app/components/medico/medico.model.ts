import { Pessoa } from './pessoa.model';
export interface Medico {
  id?: number;
  dataCriacao: string;
  dataExclusao: string;
  crm: string;
  pessoa: Pessoa;
}
