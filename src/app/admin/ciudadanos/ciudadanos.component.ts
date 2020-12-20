import { Component, OnInit } from '@angular/core';
import { Ciudadano } from './ciudadano';
import { CiudadanoService } from './ciudadano.service';

@Component({
  selector: 'app-ciudadanos',
  templateUrl: './ciudadanos.component.html',
  styleUrls: ['./ciudadanos.component.scss']
})
export class CiudadanosComponent implements OnInit {
  ciudadanos: Ciudadano[] ;

  constructor(private ciudadanoService: CiudadanoService) { }

  ngOnInit(): void {
    this.ciudadanoService.getCiudadanos().subscribe(
      clientes =>  this.ciudadanos = clientes
    );
  }

}
