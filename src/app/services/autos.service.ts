import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Automovil } from '../shared/models';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/delay';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL: string = "https://catalogo-autos.herokuapp.com/api/autos";

  constructor(private http: HttpClient) { }

  getAutos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.autosURL);
  }

  updateAuto(auto: Automovil): Observable<any> {
    // return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto);
    
    const myObservable = of("{'status': 'success', 'message': 'updated auto'}").delay(1500);
    
    return myObservable;
  }

  addAuto(auto: Automovil): Observable<any> {
    //return this.http.post<any>(this.autosURL, auto);
    
    const myObservable = of("{'status': 'success', 'message': 'added new auto'}").delay(1500);

    return myObservable;
  }

  deleteAuto(id: number): Observable<any> {
    //return this.http.delete<any>(`${this.autosURL}/${id}`);

    const myObservable = of("{'status': 'success', 'message': 'deleted auto'}").delay(1500);

    return myObservable;
  }
}
