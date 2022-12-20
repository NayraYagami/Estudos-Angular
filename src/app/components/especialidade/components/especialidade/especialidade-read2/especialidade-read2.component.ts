import { Especialidade } from './../../../especialidade.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EspecialidadeRead2DataSource } from './especialidade-read2-datasource';

@Component({
  selector: 'app-especialidade-read2',
  templateUrl: './especialidade-read2.component.html',
  styleUrls: ['./especialidade-read2.component.css'],
})
export class EspecialidadeRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Especialidade>;
  dataSource: EspecialidadeRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new EspecialidadeRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
