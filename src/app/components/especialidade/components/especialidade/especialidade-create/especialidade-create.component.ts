import { Especialidade } from '../../../especialidade.model';
import { Component, OnInit } from '@angular/core';
import { EspecialidadeService } from '../especialidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-create',
  templateUrl: './especialidade-create.component.html',
  styleUrls: ['./especialidade-create.component.css'],
})
export class EspecialidadeCreateComponent implements OnInit {
  especialidade: Especialidade = {
    descricao: '',
  };

  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createEspecialidade(): void {
    this.especialidadeService.create(this.especialidade).subscribe(() => {
      this.especialidadeService.showMenssage('Especialidade cadastrada!');
      this.router.navigate(['/especialidade']);
    });
  }

  cancel(): void {
    this.router.navigate(['/especialidade']);
  }
}
