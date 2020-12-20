import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ciudadano } from './ciudadano'

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {

  private urlEndPoint:string = 'http://localhost:8080/censo/ciudadano';

  constructor(private http: HttpClient) { }

  getCiudadanos(): Observable<Ciudadano[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Ciudadano[]) 
    );
  } 
}
