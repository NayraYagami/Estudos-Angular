import { Telefones } from './telefone.model';
import { Email } from './email.model';
import { Pessoa } from './../medico/pessoa.model';
export interface ClienteSearch {
  idCliente: number;
  nomeCliente: string;
  numeroTelefone: string;
  dataCriacaoInicio: string;
  dataCriacaoFim: string;
  ativo: boolean;
  cpf: string;
  emailCliente: string;
}

export class Cliente {
  id?: number;
  telefones: Telefones[];
  emails: Email[];
  dataCriacao: string;
  dataExclusao: string;
  pessoa: Pessoa;
}
