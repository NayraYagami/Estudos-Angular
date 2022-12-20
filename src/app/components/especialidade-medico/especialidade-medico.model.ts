export interface EspecialidadeMedico {
  id?: number;
  medicoId: number;
  especialidadeId: number;
}

export interface EspecialidadeMedicoSearch {
  idEspecialidade: number[];
  idMedico: number[];
  nomeEspecialidade: string;
  nomeMedico: string;
  idEspecialidadeMedico: number;
}
