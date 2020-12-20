import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViviendaComponent } from './vivienda/vivienda.component';
import { CiudadanosComponent } from './ciudadanos/ciudadanos.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { DetalleviviendaComponent } from './detallevivienda/detallevivienda.component';
import { TipoconstruccionComponent } from './tipoconstruccion/tipoconstruccion.component';
import { DetalletipoconstruccionComponent } from './detalletipoconstruccion/detalletipoconstruccion.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent,ViviendaComponent, CiudadanosComponent, EncuestasComponent, DetalleviviendaComponent, TipoconstruccionComponent, DetalletipoconstruccionComponent, DepartamentosComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule 
  ]
})
export class AdminModule { }
