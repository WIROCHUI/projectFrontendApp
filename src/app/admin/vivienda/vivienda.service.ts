import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vivienda } from './vivienda';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  private urlEndPoint:string = 'http://localhost:8080/censo/ciudadano';
  
  constructor(private http: HttpClient) { }

   getVivienda(): Observable<Vivienda[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Vivienda[]) 
    );
  } 

}
