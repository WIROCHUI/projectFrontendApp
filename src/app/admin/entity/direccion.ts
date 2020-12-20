import { Departamento } from '../departamentos/departamento';
import { Provincia } from './provincia';
import { Distrito } from './distrito';
import { Tipovia } from './tipovia';

export class Direccion {
    id : number;
    departamento : Departamento;
    provincia : Provincia;
    distrito : Distrito;
    tipovia : Tipovia;
    nombreVia: string;
    piso: number;
    manzana: string;
    lote: string;
    kilimetro : number;
}

