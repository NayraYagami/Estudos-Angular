import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EspecialidadeService } from './../especialidade.service';
import { Especialidade } from './../../../especialidade.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-especialidade-read',
  templateUrl: './especialidade-read.component.html',
  styleUrls: ['./especialidade-read.component.css'],
})
export class EspecialidadeReadComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Especialidade>;

  especialidades: Especialidade[] = [];
  displayedColumns = ['id', 'descricao', 'action'];
  constructor(private especialidadeService: EspecialidadeService) {}

  dataSource = new MatTableDataSource<Especialidade>(this.especialidades);

  ngOnInit(): void {
    this.especialidadeService.read().subscribe((especialidades) => {
      this.especialidades = especialidades;
      console.log(especialidades);
    });
  }

  findAll(): void {
    this.especialidadeService.findAll().subscribe((resposta) => {
      this.especialidades = resposta;
      this.dataSource = new MatTableDataSource<Especialidade>(
        this.especialidades
      );
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.findAll();
  }
}
