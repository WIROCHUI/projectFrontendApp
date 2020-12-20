import { Component, OnInit } from '@angular/core';
import { Departamento } from '../departamentos/departamento';
import { EncuestaService } from './encuesta.service';
import { Tipovia } from '../entity/tipovia';
import { Provincia } from '../entity/provincia';
import { Distrito } from '../entity/distrito';
import { Ocupacion } from '../entity/ocupacion';
import { Genero } from '../entity/genero';
import { Parentesco } from '../entity/parentesco';
import { Ciudadano } from '../ciudadanos/ciudadano';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.scss']
})
export class EncuestasComponent implements OnInit {
   ciudadano : Ciudadano = new Ciudadano()
   ocupacion : Ocupacion = new Ocupacion()
   genero: Genero = new Genero()

  departamentos : Departamento[];
  provincias : Provincia[];
  tipovias : Tipovia[];
  distritos : Distrito[];
  ocupaciones : Ocupacion[];
  generos : Genero[];
  parentescos : Parentesco[];

  constructor(private encuestaService: EncuestaService, private router :Router) { }

  ngOnInit(): void {
    this.encuestaService.getCmbDepartamento().subscribe(
      departament => this.departamentos = departament,
    )

    this.encuestaService.getCmbProvincia().subscribe(
      provi => this.provincias = provi,
    )

    this.encuestaService.getCmbDistrito().subscribe(
      distri => this.distritos = distri,
    )

    this.encuestaService.getCmbTipovia().subscribe(
      vias => this.tipovias = vias,
    )

    this.encuestaService.getCmbOcupacion().subscribe(
      v => this.ocupaciones = v,
    )

    this.encuestaService.getCmbGenero().subscribe(
      v => this.generos = v,
    )

    this.encuestaService.getCmbParentesco().subscribe(
      v => this.parentescos = v,
    )
  }

  public createEncuesta():void{
    this.encuestaService.createEncuesta(this.ciudadano).subscribe( ciudadano =>{
      response => this.router.navigate(['/admin'])
      swal("Se guardo las informacion Censal", `Jefe de vivienda ${ciudadano.nombre}`, "success")
    }
    );
  }

}
