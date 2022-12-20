import { Especialidade } from './../../../especialidade.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadeService } from './../especialidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-update',
  templateUrl: './especialidade-update.component.html',
  styleUrls: ['./especialidade-update.component.css'],
})
export class EspecialidadeUpdateComponent implements OnInit {
  especialidade: Especialidade;

  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.especialidadeService.readById(id).subscribe((especialidade) => {
      this.especialidade = especialidade;
    });
  }

  updateEspecialidade(): void {
    this.especialidadeService.update(this.especialidade).subscribe(() => {
      this.especialidadeService.showMenssage('Produto atualizado com sucesso!');
      this.router.navigate(['/especialidade']);
    });
  }

  cancel(): void {
    this.router.navigate(['/especialidade']);
  }
}
