import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse, Automovil } from 'src/app/models';
import { AutosService } from 'src/app/services/autos.service';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

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

  constructor(private autosService: AutosService, private modalService: NgbModal) {
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

  openModal(auto: Automovil): void {
    const modalRef = this.modalService.open(ModalEditComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.action = "Editar";
  }
}
