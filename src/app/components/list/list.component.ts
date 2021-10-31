import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse, Automovil } from 'src/app/models';
import { AutosService } from 'src/app/services/autos.service';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[] = [];
  isLoading: boolean = true;

  constructor(private modalService: NgbModal, private autosService: AutosService) {
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

  ngOnInit(): void { }

  openModal(auto: Automovil) {
    const modalRef = this.modalService.open(ModalDetailsComponent, {centered: true})
    modalRef.componentInstance.auto = auto;
  }
}
