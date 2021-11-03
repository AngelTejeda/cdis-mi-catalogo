import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  auto: Automovil = {} as Automovil;
  action: string = "Agregar";
  modelsCopy: string[] = [];

  constructor(private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.action == "Agregar") {
      this.auto.modelos = [""];
    }

    this.modelsCopy = [...this.auto.modelos];
  }

  close(): void {
    this.auto.modelos = this.modelsCopy;
    this.modalRef.close(this.auto);
  }

  dismiss(): void {
    this.modalRef.dismiss();
  }

  addModel(): void {
    this.modelsCopy = this.modelsCopy.concat("");
  }

  deleteModel(index: number): void {
    console.log(index);
    this.modelsCopy.splice(index, 1);
  }
}
