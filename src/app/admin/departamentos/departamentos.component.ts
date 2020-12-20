import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from './departamento.service';
import { Departamento } from './departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {
  departamentos: Departamento[];

  constructor(private depatamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.depatamentoService.getDepartamentos().subscribe(
      departament => this.departamentos = departament,
    )
  }

}
