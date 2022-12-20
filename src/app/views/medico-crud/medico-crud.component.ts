import { Router } from '@angular/router';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-crud',
  templateUrl: './medico-crud.component.html',
  styleUrls: ['./medico-crud.component.css'],
})
export class MedicoCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Médico',
      routeUrl: '/medico',
    };
  }
  ngOnInit(): void {}

  navigateToMedicoCreate(): void {
    this.router.navigate(['/medico/create']);
  }
}
