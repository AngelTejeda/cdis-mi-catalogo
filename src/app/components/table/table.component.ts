import { Component, OnInit } from '@angular/core';
import { ApiResponse, Automovil } from 'src/app/models';
import { AutosService } from 'src/app/services/autos.service';

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

  constructor(private autosService: AutosService) {
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

}
