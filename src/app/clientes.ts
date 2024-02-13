import { Servicios } from "./servicios";

export interface Clientes {
    "clienteId"?:number ;
    "cuit":string;
    "razonSocial": string;
    "domicilio": string;
    "email": string;
    "listaServicios": Servicios[];
        



}
