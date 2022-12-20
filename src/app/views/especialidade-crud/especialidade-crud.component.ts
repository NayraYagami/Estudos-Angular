import { HeaderService } from './../../components/template/header/header.service';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-especialidade-crud',
  templateUrl: './especialidade-crud.component.html',
  styleUrls: ['./especialidade-crud.component.css'],
})
export class EspecialidadeCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Especialidade',
      routeUrl: '/especialidade',
    };
  }

  ngOnInit(): void {}

  navigateToEspecialidadeCreate(): void {
    this.router.navigate(['/especialidade/create']);
  }
}
