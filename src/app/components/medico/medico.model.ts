import { Pessoa } from './pessoa.model';
export class Medico {
  id: number;
  dataCriacao: Date;
  dataExclusao: Date;
  crm: string;
  pessoa: Pessoa;
}

export class MedicoSearch {
  idMedico: number;
  nomeMedico: string;
  cpf: string;
  dataCriacaoInicio: Date;
  dataCriacaoFim: Date;
  ativo: boolean;
  sexo: string;
  idsEspecialidadeMedico: number[];
  page: number;
  pageSize: number;
}

export interface ListResponse<T> {
  list: Array<T>;
  total: number;
}
