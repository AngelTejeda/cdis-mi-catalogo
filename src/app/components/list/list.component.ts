import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AUTOMOVILES } from 'src/app/data';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[] = AUTOMOVILES;
  autoSeleccionado?: Automovil;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  openModal(auto: Automovil, modalRef: any) {
    this.autoSeleccionado = auto;

    this.modalService.open(modalRef).result.then((result) => {
      this.autoSeleccionado = undefined;
    }, (reason) => {
      this.autoSeleccionado = undefined;
    });
  }
}
