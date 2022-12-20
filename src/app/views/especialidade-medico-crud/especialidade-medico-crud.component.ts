import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidade-medico-crud',
  templateUrl: './especialidade-medico-crud.component.html',
  styleUrls: ['./especialidade-medico-crud.component.css'],
})
export class EspecialidadeMedicoCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Especialidade-médico',
      routeUrl: '/especialidadeMedico',
    };
  }
  ngOnInit(): void {}

  navigateToEspecialidadeMedicoCreate(): void {
    this.router.navigate(['/especialidadeMedico/create']);
  }
}
