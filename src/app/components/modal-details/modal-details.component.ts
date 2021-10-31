import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {
  @Input() auto?: Automovil;
  
  constructor(private modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modal.close();
  }

}
