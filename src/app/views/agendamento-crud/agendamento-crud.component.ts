import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agendamento-crud',
  templateUrl: './agendamento-crud.component.html',
  styleUrls: ['./agendamento-crud.component.css'],
})
export class AgendamentoCrudComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Agendamento',
      routeUrl: '/agendamentos',
    };
  }
}
