import { Telefones } from './telefone.model';
import { Email } from './email.model';
import { Pessoa } from './../medico/pessoa.model';
export class ClienteSearch {
  idCliente: number;
  nomeCliente: string;
  numeroTelefone: string;
  dataCriacaoInicio: Date;
  dataCriacaoFim: Date;
  ativo: boolean;
  cpf: string;
  emailCliente: string;
  sexo: string;
  page?: number;
  pageSize?: number;
}

export class Cliente {
  id: number;
  telefones: Telefones[];
  emails: Email[];
  dataCriacao: Date;
  dataExclusao: Date;
  pessoa: Pessoa;
}

export interface ListResponse<T> {
  list: Array<T>;
  total: number;
}
