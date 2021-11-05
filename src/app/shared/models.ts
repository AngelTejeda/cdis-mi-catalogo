export interface ApiResponse {
    status: string;
    message: string;
    data: Automovil[];
}

export interface Automovil {
    marca: string;
    submarca: string;
    Ocupantes: string;
    modelos: string[];
    Cveveh: string;
    _id: string;
    descripcion: string;
    descripcioncorta: string;
}