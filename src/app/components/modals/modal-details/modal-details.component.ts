import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {
  auto: Automovil = {} as Automovil;
  action: string = "";
  buttonText: string = "";
  
  constructor(private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
    this.buttonText = this.action == "delete" ? "Eliminar" : "Cerrar";
  }

  closeModal(): void {
    this.modalRef.close(this.auto);
  }

  dismiss(): void {
    this.modalRef.dismiss();
  }

}
