import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Automovil } from '../shared/models';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/delay';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  private autosURL: string = "https://catalogo-autos.herokuapp.com/api/autos";

  constructor(private http: HttpClient, private messageService: MessagesService) { }

  getAutos(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.autosURL)
      .delay(1500)
      .pipe(
        catchError(this.handleError<any>("getAutos")),
        tap((result) => {this.messageService.add(`Obtenidos ${result.data.length} registros de autos.`)})
      );;
  }

  updateAuto(auto: Automovil): Observable<any> {
    // return this.http.put<any>(`${this.autosURL}/${auto._id}`, auto);
    
    const myObservable = of("{'status': 'success', 'message': 'updated auto'}")
      .delay(1500)
      .pipe(
        catchError(this.handleError<any>("updateAuto")),
        tap(() => {this.messageService.add(`Auto con ID ${auto._id} modificado.`)})
      );
    
    return myObservable;
  }

  addAuto(auto: Automovil): Observable<any> {
    //return this.http.post<any>(this.autosURL, auto);
    
    const myObservable = of("{'status': 'success', 'message': 'added new auto'}")
      .delay(1500)
      .pipe(
        catchError(this.handleError<any>("addAuto")),
        tap(() => {this.messageService.add(`Auto añadido con ID ${auto._id}.`)})
      );

    return myObservable;
  }

  deleteAuto(id: number): Observable<any> {
    //return this.http.delete<any>(`${this.autosURL}/${id}`);

    const myObservable = of("{'status': 'success', 'message': 'deleted auto'}")
      .delay(1500)
      .pipe(
        catchError(this.handleError<any>("deleteAuto")),
        tap(() => {this.messageService.add(`Auto con ID ${id} eliminado.`)})
      );

    return myObservable;
  }

  private handleError<T>(operation="operación", result?: T) {
    return(error: any): Observable<T> => {
      this.messageService.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }
}
