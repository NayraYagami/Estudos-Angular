export class EspecialidadeMedico {
  id?: number;
  medicoId: number;
  especialidadeId: number;
}

export class EspecialidadeMedicoSearch {
  idsEspecialidade: number[];
  idsMedico: number[];
  page?: number;
  pageSize?: number;
}

export interface ListResponse<T> {
  list: Array<T>;
  total: number;
}
