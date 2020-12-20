import { Genero } from '../entity/genero';
import { Ocupacion } from '../entity/ocupacion';
import { Parentesco } from '../entity/parentesco';
import { Direccion } from '../entity/direccion';

export class Ciudadano {
    id: number;
    nombre: string;
    apellido: string;
    edad : number;
    ocupacion : Ocupacion;
    genero : Genero; 
    parentescoFamilia  : Parentesco;
    direccion : Direccion
}
