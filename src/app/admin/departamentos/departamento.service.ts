import { Injectable } from '@angular/core';
import { Departamento } from './departamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private urlEndPoint:string = 'http://localhost:8080/censo/departamento';

  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<Departamento[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Departamento[]) 
    );
  } 
}
