import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(
    private especialidadeService: EspecialidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

  sweetAlert(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Deseja de fato Deletar?',
        text: 'Essa operação não pode ser desfeita!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Não, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.especialidadeService.delete(id).subscribe(
            () => {
              swalWithBootstrapButtons.fire(
                'Deletado!',
                'Especialidade deletada com sucesso!',
                'success'
              );
            },

            (error) => {
              swalWithBootstrapButtons.fire('Erro!', error.error, 'error');
            }
          );
          this.router.navigate(['/especialidade']);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Operação cancelada',
            'Especialidade ativa :)',
            'error'
          );
          this.router.navigate(['/especialidade']);
        }
      });
  }

  navigateToEspecialidadeForm() {
    this.router.navigate(['/especialidade/form']);
  }

  ngAfterViewInit(): void {
    this.findAll();
  }
}
