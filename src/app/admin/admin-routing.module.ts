import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ViviendaComponent } from './vivienda/vivienda.component';
import { CiudadanosComponent } from './ciudadanos/ciudadanos.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { DetalleviviendaComponent } from './detallevivienda/detallevivienda.component';
import { TipoconstruccionComponent } from './tipoconstruccion/tipoconstruccion.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'vivienda', component: ViviendaComponent },
  { path: 'ciudadanos', component: CiudadanosComponent },
  { path: 'encuestas', component:  EncuestasComponent},
  { path: 'detallevivienda', component:  DetalleviviendaComponent},
  { path: 'tipoconstruccion', component:  TipoconstruccionComponent},
  { path: 'detalletipoconstruccion', component:  DetalleviviendaComponent},
  { path: 'departamentos', component:  DepartamentosComponent},
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
