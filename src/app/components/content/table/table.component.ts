import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse, Automovil } from 'src/app/shared/models';
import { AutosService } from 'src/app/services/autos.service';
import { ModalDetailsComponent } from '../../modals/modal-details/modal-details.component';
import { ModalEditComponent } from '../../modals/modal-edit/modal-edit.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[] = [];
  
  isLoading: boolean = true;
  displayProgressBar: boolean = false;
  page: number = 1;
  pageSize: number = 10;
  searchTextbox: string = "";

  constructor(
    private autosService: AutosService,
    private modalService: NgbModal,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe(
      (result: ApiResponse) => {
        this.autos = result.data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, "Cerrar", { duration: 4000 });
  }

  view(auto: Automovil) {
    const modalRef = this.modalService.open(ModalDetailsComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.action = "view";
  }

  add(): void {
    const modalRef = this.modalService.open(ModalEditComponent, {centered: true});
    modalRef.componentInstance.action = "Agregar";


    modalRef.result.then(
      (auto) => {
        this.displayProgressBar = true;

        this.autosService.addAuto(auto).subscribe(
          (response) => {
            this.autos.push(auto);

            this.displayProgressBar = false;
            this.openSnackBar("¡Auto agregado exitosamente!");
          },
        );
      },
      (reason) => { }
    )
    .catch((error) => this.openSnackBar("Ha ocurrido un error al agregar el auto."));
  }

  edit(auto: Automovil): void {
    const modalRef = this.modalService.open(ModalEditComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.action = "Editar";

    modalRef.result.then(
      (auto) => {
        this.displayProgressBar = true;
        
        this.autosService.updateAuto(auto).subscribe(
          (response) => {
            this.displayProgressBar = false;
            this.openSnackBar("¡Auto modificado exitosamente!");
          },
        );
      },
      (reason) => { }
    )
    .catch((error) => this.openSnackBar("Ha ocurrido un error al modificar el auto."));
  }

  delete(auto: Automovil, relativeIndex: number): void {
    const modalRef = this.modalService.open(ModalDetailsComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.action = "delete";

    modalRef.result
    .then(
      (auto) => {
        this.displayProgressBar = true;
        
        this.autosService.deleteAuto(auto._id).subscribe(
          (response) => {
            const absoluteIndex = (this.page - 1) * this.pageSize + relativeIndex;
            this.autos.splice(absoluteIndex, 1);
            
            this.displayProgressBar = false;
            this.openSnackBar("¡Auto eliminado exitosamente!");
          },
        );
      },
      (reason) => { }
    )
    .catch((error) => this.openSnackBar("Ha ocurrido un error al eliminar el auto."));
  }
}
