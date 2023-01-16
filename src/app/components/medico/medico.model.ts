import { Pessoa } from './pessoa.model';
export class Medico {
  id: number;
  dataCriacao: string;
  dataExclusao: string;
  crm: string;
  pessoa: Pessoa;
}

export class MedicoSearch {
  idMedico: number;
  nomeMedico: string;
  cpf: string;
  dataCriacaoInicio: string;
  dataCriacaoFim: string;
  ativo: boolean;
  sexo: string;
  idsEspecialidadeMedico: number[];
}
