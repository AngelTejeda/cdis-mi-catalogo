import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  auto?: Automovil;
  action?: string;

  constructor(private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
    
  }

  close(): void {
    this.modalRef.close();
  }

  dismiss(): void {
    this.modalRef.dismiss();
  }
}
