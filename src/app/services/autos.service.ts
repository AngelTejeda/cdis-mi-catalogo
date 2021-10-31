import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Automovil } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL: string = "https://catalogo-autos.herokuapp.com/api/autos";

  constructor(private http: HttpClient) { }

  getAutos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.autosURL);
  }
}
