export class Agendamentos {
  id?: number;
  dataAbertura: '2022-12-26T13:31:11.209287';
  dataConsulta: '2022-12-29T11:11:27.807';
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
  nomeMedico: string;
  nomeCliente: string;
  dataAberturaInicio: string;
  dataAberturaFim: string;
  dataAtendimentoInicio: string;
  dataAtendimentoFim: string;
  valorConsultaMaximo: number;
  valorConsultaMinimo: number;
  ativo: boolean;
}
