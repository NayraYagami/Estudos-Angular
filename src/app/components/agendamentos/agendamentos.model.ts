export class Agendamentos {
  id?: number;
  dataAbertura: Date;
  dataConsulta: Date;
  dataCancelamento: string;
  valorConsulta: number;
  medico: Medico;
  cliente: Cliente;
}

export class Cliente {
  id: number;
}

export class Medico {
  id: number;
}

export class AgendamentosSearch {
  nomeMedico?: string;
  nomeCliente?: string;
  dataAberturaInicio?: string;
  dataAberturaFim?: string;
  dataAtendimentoInicio?: string;
  dataAtendimentoFim?: string;
  valorConsultaMaximo?: number;
  valorConsultaMinimo?: number;
  ativo?: boolean;
  page?: number;
  pageSize?: number;
}

export interface ListResponse<T> {
  list: Array<T>;
  total: number;
}
