import { Router, ActivatedRoute } from '@angular/router';
import { EspecialidadeService } from './../especialidade.service';
import { Especialidade } from './../../../especialidade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-form',
  templateUrl: './especialidade-form.component.html',
  styleUrls: ['./especialidade-form.component.css'],
})
export class EspecialidadeFormComponent implements OnInit {
  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  especialidade: Especialidade = {
    descricao: '',
  };

  click() {
    if (this.especialidade.id) {
      this.especialidadeService.update(this.especialidade).subscribe(() => {
        this.especialidadeService.showMenssage(
          'Operação executada com sucesso!'
        );
        this.router.navigate(['/especialidade']);
      });
    } else {
      this.especialidadeService.create(this.especialidade).subscribe(() => {
        this.especialidadeService.showMenssage(
          'Operação executada com sucesso!'
        );
        this.router.navigate(['/especialidade']);
      });
    }
  }

  ngOnInit(): void {
    if (!!this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.especialidadeService.readById(id).subscribe((especialidade) => {
        this.especialidade = especialidade;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/especialidade']);
  }
}
