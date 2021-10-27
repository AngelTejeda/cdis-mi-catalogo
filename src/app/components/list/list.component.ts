import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from 'src/app/data';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[] = [];

  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

}
