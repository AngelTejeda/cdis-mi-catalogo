import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse, Automovil } from 'src/app/models';
import { AutosService } from 'src/app/services/autos.service';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[] = [];
  isLoading: boolean = true;
  page: number = 1;
  pageSize: number = 10;

  constructor(
    private autosService: AutosService,
    private modalService: NgbModal,
    private snackBar: MatSnackBar) {
    this.autosService.getAutos().subscribe(
      (result: ApiResponse) => {
        this.autos = result.data;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, "Cerrar", { duration: 4000 });
  }

  add(): void {
    const modalRef = this.modalService.open(ModalEditComponent, {centered: true});
    modalRef.componentInstance.action = "Agregar";

    modalRef.result.then(
      (auto) => {
        this.autosService.addAuto(auto).subscribe(
          (response) => {
            this.autos = this.autos.concat(auto);
            this.openSnackBar("¡Auto agregado exitosamente!");
          },
          (error) => {
            this.openSnackBar("Ha ocurrido un error al agregar el auto.");
          }
        );
      },
      (reason) => { }
    );
  }

  edit(auto: Automovil): void {
    const modalRef = this.modalService.open(ModalEditComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.action = "Editar";

    modalRef.result.then(
      (auto) => {
        this.autosService.updateAuto(auto).subscribe(
          (response) => {
            this.openSnackBar("¡Auto modificado exitosamente!");
          },
          (error) => {
            this.openSnackBar("Ha ocurrido un error al modificar el auto.");
          }
        );
      },
      (reason) => { }
    );
  }

  delete(auto: Automovil, relativeIndex: number): void {
    const modalRef = this.modalService.open(ModalDetailsComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.action = "delete";

    modalRef.result.then(
      (auto) => {
        this.autosService.deleteAuto(auto._id).subscribe(
          (response) => {
            const absoluteIndex = (this.page - 1) * this.pageSize + relativeIndex;
            this.autos.splice(absoluteIndex, 1);
            this.openSnackBar("¡Auto eliminado exitosamente!");
          },
          (error) => {
            this.openSnackBar("Ha ocurrido un error al eliminar el auto.");
          }
        );
      },
      (reason) => { }
    );
  }
}
