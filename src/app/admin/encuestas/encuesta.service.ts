import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Departamento } from '../departamentos/departamento';
import { map, catchError } from 'rxjs/operators';
import { Tipovia } from '../entity/tipovia';
import { Provincia } from '../entity/provincia';
import { identifierName } from '@angular/compiler';
import { Distrito } from '../entity/distrito';
import { Ocupacion } from '../entity/ocupacion';
import { Genero } from '../entity/genero';
import { Parentesco } from '../entity/parentesco';
import { Ciudadano } from '../ciudadanos/ciudadano';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private urlEndPointDepartamento:string = 'http://localhost:8080/censo/departamento';
  private urlEndPointTipovia:string = 'http://localhost:8080/censo/tipovia';
  private urlEndPointProvincia:string='http://localhost:8080/censo/provincia';
  private urlEndPointDistrito:string='http://localhost:8080/censo/distrito';
  private urlEndPointOcupacion:string='http://localhost:8080/censo/ocupacion';
  private urlEndPointParentesco:string='http://localhost:8080/censo/parentesco';
  private urlEndPointGenero:string='http://localhost:8080/censo/genero';
  private urlEndPointCiudadano:string='http://localhost:8080/censo/ciudadano';

  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private http: HttpClient) { }

  getCmbDepartamento(): Observable<Departamento[]>{
    return this.http.get(this.urlEndPointDepartamento).pipe(
      map( (response) => response as Departamento[]) 
    );
  }

  getCmbProvincia(): Observable<Provincia[]>{
    return this.http.get(this.urlEndPointProvincia).pipe(
      map( (response) => response as Provincia[]) 
    );
  }

  getCmbTipovia(): Observable<Tipovia[]>{
    return this.http.get(this.urlEndPointTipovia).pipe(
      map( (response) => response as Tipovia[]) 
    );
  }

  getCmbDistrito(): Observable<Distrito[]>{
    return this.http.get(this.urlEndPointDistrito).pipe(
      map( (response) => response as Distrito[]) 
    );
  }

  getCmbOcupacion(): Observable<Ocupacion[]>{
    return this.http.get(this.urlEndPointOcupacion).pipe(
      map( (response) => response as Ocupacion[]) 
    );
  }

  getCmbGenero(): Observable<Genero[]>{
    return this.http.get(this.urlEndPointGenero).pipe(
      map( (response) => response as Genero[]) 
    );
  }

  getCmbParentesco(): Observable<Parentesco[]>{
    return this.http.get(this.urlEndPointParentesco).pipe(
      map( (response) => response as Parentesco[]) 
    );
  }

  createEncuesta (ciudadano: Ciudadano) : Observable<Ciudadano>{
    return this.http.post<Ciudadano>(this.urlEndPointCiudadano,ciudadano,{headers: this.httpHeaders})
    }
}
