import { Router, ActivatedRoute } from '@angular/router';
import { EspecialidadeService } from './../especialidade.service';
import { Especialidade } from './../../../especialidade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-delete',
  templateUrl: './especialidade-delete.component.html',
  styleUrls: ['./especialidade-delete.component.css'],
})
export class EspecialidadeDeleteComponent implements OnInit {
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

  deleteEspecialidade(): void {
    this.especialidadeService.delete(this.especialidade.id).subscribe(() => {
      this.especialidadeService.showMenssage('Produto deletado com sucesso!');
      this.router.navigate(['/especialidade']);
    });
  }

  cancel(): void {
    this.router.navigate(['/especialidade']);
  }
}
