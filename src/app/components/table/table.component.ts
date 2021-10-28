import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from 'src/app/data';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos: Automovil[] = AUTOMOVILES;

  constructor() { }

  ngOnInit(): void {
  }

}
