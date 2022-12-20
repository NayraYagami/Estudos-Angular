import { EspecialidadeService } from './../especialidade.service';
import { Especialidade } from './../../../especialidade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-read',
  templateUrl: './especialidade-read.component.html',
  styleUrls: ['./especialidade-read.component.css'],
})
export class EspecialidadeReadComponent implements OnInit {
  especialidades: Especialidade[];
  displayedColumns = ['id', 'descricao', 'action'];
  constructor(private especialidadeService: EspecialidadeService) {}

  ngOnInit(): void {
    this.especialidadeService.read().subscribe((especialidades) => {
      this.especialidades = especialidades;
      console.log(especialidades);
    });
  }
}
