import { Pessoa } from './pessoa.model';
export class Medico {
  id?: number;
  dataCriacao: Date;
  dataExclusao: Date;
  crm: string;
  pessoa: Pessoa;
}

export interface MedicoSearch {
  idMedico: number;
  nomeMedico: string;
  cpf: string;
  dataCriacaoInicio: string;
  dataCriacaoFim: string;
  idsEspecialidadeMedico: number[];
}
